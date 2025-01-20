export type Forecast = {
    //The date and time of the forecast
    ftime: string;
    // Temperature
    T: number;
    // Description
    W: string;
    // Windspeed in m/s
    F: number;
    // Direction the wind is blowing
    D: string;
    // Rain in mm/hr
    R: number;
};

export type Station = {
    id: number;
    name: string;
};
