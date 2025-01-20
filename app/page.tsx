import Forecasts from "./ui/forecast";
import { fetchForecastsByStation, fetchWeatherStations } from "./lib/data";
import Stations from "./ui/stations";

// This is the main (and only page) it is run server side while the components are run client side
export default async function Home(props: {
        searchParams?: Promise<{
            query?: string;
        }>;
    }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '1';
    const forecasts = await fetchForecastsByStation(parseInt(query));  
    const stations = await fetchWeatherStations();

    return (
        <main>
            <div className="w-screen p-4 flex justify-center">
                <Stations stations={stations}/>
            </div>
            <div className="w-screen p-8 flex items-start justify-center">
                <Forecasts forecasts={forecasts}/>
            </div>
        </main>
    );
}
