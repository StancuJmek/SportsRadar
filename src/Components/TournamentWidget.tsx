import React from "react";
import {ApiDataReturn} from "../types/ApiTypes"

interface TournamentDataInt {
    tournament: ApiDataReturn
}

const TournamentWidget:React.FC<TournamentDataInt> = ({tournament}) => {
    console.log('tournament: ', tournament);
    

const tournamentMatchesArray = Object.values(tournament.matches)
    const timeConverter = (time: string, date: string):Date => {
        const newData = date.replace(/(\d+[/])(\d+[/])/, '$2$1');
        return  new Date(newData + ` ${time}`);
    }

    return (
        <div className="tourDetails">
            
            
            <div>
                <b>Tournament Name: </b>
                {tournament.name}
            </div>
            <div>
                <b>Matches Today: </b>
                {tournamentMatchesArray.sort((a,b) => {
                    const aDate = timeConverter(b.time.time, b.time.date)
                    const bDate = timeConverter(a.time.time, a.time.date)
                    if (bDate < aDate)    return -1;
                    else if(bDate > aDate) return  1;
                    else                      return  0;
                }).map((match, i) => {
                    console.log('match: ',match);
                    new Date(match.time.date)
                    return (
                        <div className="matchDetails" key={match.comment + i}>
                           
                            
                            
                            <div>
                            <b>Date & Time: </b>
                            {`${match.time.date}  ${match.time.time}`}
                            </div>
                            <div>
                            <b>Teams: </b>
                            {`${match.teams.home.name} vs ${match.teams.away.name}`}
                            </div>
                            <b>Final Score: </b>
                            {`${match.result.home} : ${match.result.away}`}
                            <div>
                            <b> Comment: </b> {match.comment}
                            </div>  
                            
                           
                           
                        </div>
                    )
                })}
            </div>
            
            <style jsx>{`
                .tourDetails {
                text-align: center;
                border-radius: 8px;
                background :    #D3D3D3
                
                }

                

                .matchDetails{
                    font-size: 14px;
                    padding: 30px;
                
                }
            
                
                
            `}</style>
        </div>
    );

};

export default TournamentWidget;
