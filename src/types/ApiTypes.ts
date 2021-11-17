export type Team = {
    "_doc": string,
    "_id": number,
    "_sid": number,
    "uid": number,
    "virtual": false,
    "name": string,
    "mediumname": string,
    "abbr": string,
    "nickname": string,
    "iscountry": boolean,
    "haslogo": boolean
}
export type Time = {
    "_doc": string,
    "time": string,
    "date": string,
    "tz": string,
    "tzoffset": number,
    "uts": number
}
export type Result = {
    home: number,
    away: number,
    period: string,
    winner: string
}

export type MatchDataNeeded = {
    teams: {
        "home": Team,
        "away": Team
    },
    time: Time,
    comment: string,
    result: Result
};

export type TournamentDataNeeded = {
    _doc: string,
    _id: number,
    _sid: number,
    _rcid: number,
    _isk: number,
    _tid: number,
    _utid: number,
    name: string,
    abbr: string,
    ground: string,
    friendly: boolean,
    seasonid: number,
    currentseason: number,
    year: string,
    seasontype: string,
    seasontypename: string,
    seasontypeunique: string,
    livetable: number,
    cuprosterid: string,
    roundbyround: boolean,
    tournamentlevelorder: number,
    tournamentlevelname: string,
    outdated: boolean,
    _sk: boolean,
};

export type OnlyMatchDataUsed = {
    [key: string]: MatchDataNeeded & {
        [key: string]: any,
    }
};
  
export type MatchesData = {
    doc: [
        {
            data: {
                matches: OnlyMatchDataUsed,
                [key: string]: any,
            },
            [key: string]: any,
        }
    ],
    [key: string]: any,
}
  
export type TournamentData = {
    doc: [
        {
            data: {
                tournaments: TournamentDataNeeded[],
                [key: string]: any,
            },
            [key: string]: any,
        }
    ],
    [key: string]: any,
}

export type GetDataReduceValue = [keyof OnlyMatchDataUsed, OnlyMatchDataUsed[keyof OnlyMatchDataUsed]]
export type ReducerGetDataMatch = (acc: {[key: string]: MatchDataNeeded}, val: GetDataReduceValue ) => {[key: string]: MatchDataNeeded}


export interface ApiDataReturn extends TournamentDataNeeded {
    matches: {
        [key: string]: MatchDataNeeded;
    }
}