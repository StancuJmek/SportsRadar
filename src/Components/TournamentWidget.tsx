import React from "react";
import {ApiDataReturn} from "../types/ApiTypes"

interface TournamentDataInt {
    tournament: ApiDataReturn
}

const TournamentWidget:React.FC<TournamentDataInt> = ({tournament}) => {
    console.log('tournament: ', tournament);
    

    const tournamentMatchesArray = Object.values(tournament.matches)
   

    return (
        <div className="tourDetails">
            
            
            <div>
                <b>Tournament Name: </b>
                {tournament.name}
            </div>
            <div>
                <b>Matches Today: </b>
                {tournamentMatchesArray.map((match, i) => {
                    console.log('match: ',match);
                    
                    return (
                        <div className="matchDetails" key={match.comment + i}>
                           
                            <div>
                            <b> Comment: </b> {match.comment}
                            </div>  

                           
                            <b>Final Score: </b>
                            {`${match.result.home} : ${match.result.away}`}
                            <div>
                            <b>Teams: </b>
                            {`${match.teams.home.name} vs ${match.teams.away.name}`}
                            </div>
                            <div>
                            <b>Time: </b>
                            {`${match.time.date}  ${match.time.time}`}
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
