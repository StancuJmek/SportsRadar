import React from "react";
import Axios, {AxiosResponse} from "axios";
import {ApiDataReturn} from "../types/ApiTypes";
import TournamentWidget from "./TournamentWidget";

const IndexPageComponent:React.FC = () => {
    const [tournamentDataList, setTournamentsData] = React.useState<ApiDataReturn[]>([]);

    const getTournamentData = async (): Promise<void> => {
        const tournamentsReq:AxiosResponse<ApiDataReturn[]> = await Axios.get('/api/matches');
        setTournamentsData(tournamentsReq.data);
    };

     
    
    React.useEffect(() => {
        getTournamentData ()
    },[])

    return (
        <div className="container">
            <main>
                <div>
                    <h3>Results: {tournamentDataList.length}</h3>
                </div>
                <div className="tournamentWidgets_list">
                    {tournamentDataList.map(tournament => <TournamentWidget key={tournament._id} tournament={tournament} />)}
                </div>
            </main>

            <style jsx>{`
                .container {
                  min-height: 100vh;
                  padding: 0 0.5rem;
                }
                
                .tournamentWidgets_list {
                    display: grid;
                    gap: 30px;
                    grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr) );
                }
            
            `}</style>

            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                
                * {
                  box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default IndexPageComponent;
