import axios from 'axios';
import fs from 'fs/promises'; 

// Fetches the first 15 forecasts for the given station and returns them as Forecast[]
export async function fetchForecastsByStation(id: number) {
    var parseString = require('xml2js').parseStringPromise;
    try{
        const response = await axios.get(`https://xmlweather.vedur.is/?op_w=xml&type=forec&lang=en&view=xml&ids=${id}&time=6h&params=T;W;F;D;R`);
        const result = await response.data;
        // Parse data from XML
        const parsed = await parseString(result);
        // Remove unused data
        var forecasts = [];
        if(parsed.forecasts != ''){
            forecasts = parsed.forecasts.station[0].forecast.slice(0, 15);
        }
        return forecasts;
    }
    catch (error) {
        console.error('Error fetching forecast from API:', error);
        throw new Error('Failed to fetch forecast.');
    }
}

// Fetches all the stations from public/stations.json and returns them as Station[]
export async function fetchWeatherStations() {
    const jsonData = await fs.readFile('./public/stations.json', 'utf-8');
    const parsedData = JSON.parse(jsonData);
    return parsedData.stations;
}