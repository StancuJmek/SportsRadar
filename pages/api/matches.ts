import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { ApiDataReturn, MatchesData, ReducerGetDataMatch, TournamentData } from "../../src/types/ApiTypes"

const getData = async (tournamentID: number) => {
    return await axios.get<MatchesData>(`https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${tournamentID}/2021`)
}

const getDataFromMatch: ReducerGetDataMatch = (newObj, [key, val]) => {
    newObj[key] = {
        teams: val.teams,
        time: val.time,
        comment: val.comment,
        result: val.result
    };
    return newObj;
}

export default async function getTournaments(req: NextApiRequest,
    res: NextApiResponse<ApiDataReturn[]>) {
    const responseTournament = await axios.get<TournamentData>("https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17")
    const tournamets = responseTournament.data
    const tournamentList = tournamets.doc[0].data.tournaments

    const tournamentsResponse = await Promise.all(
        tournamentList.map(async (tournament) => {
          const matches = await getData(tournament._id);
          const matchesData = matches.data.doc[0].data.matches;
          const matchesEntries = Object.entries(matchesData)
          const newMatchesData = matchesEntries.slice(-5).reduce(getDataFromMatch, {})
          return {...tournament, matches: newMatchesData}
        })
    )

    res.status(200).json(tournamentsResponse)
}



                  