class Cache
{
    chacheData(data){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    checkForWeatherCache(){
        if(!localStorage.weatherData){
            return false;
        }

        let data = JSON.parse(localStorage.getItem('weatherData'));
       return data;
    }

}

export {Cache};