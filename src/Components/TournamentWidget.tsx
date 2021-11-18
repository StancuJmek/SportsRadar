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
                <span>name: </span>
                {tournament.name}
            </div>
            <div>
                <span>matches: </span>
                {tournamentMatchesArray.map((match, i) => {
                    console.log('match: ',match);
                    
                    return (
                        <>
                            <div key={match.comment + i}>
                                Comment: {match.comment}
                            </div>  

                            <div></div>
                            <span>Result: </span>
                            {match.result.home + ':'}
                            {match.result.away}

                        </>
                    )
                })}
            </div>
            
            <style jsx>{`
                .tourDetails {
                background : #A9A9A9
                }
                
            `}</style>
        </div>
    );

};

export default TournamentWidget;
