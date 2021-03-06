import '../styles/weather.scss';

class Weather
{
    // get waether data (https://www.metaweather.com/api/location/2487956/)
    async init(city){
        this.city = city;
        this.data = await this.getWeather(city);

        return this.getData();
    }

    async getWeather(){
        const apiKey = '75880f14e1d23dd3567d0cf4ef506afc'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    }

    getData(){
        return {
            city: this.city,
            temp: Math.round(this.data.main.temp - 273),
            iconURL: `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`,
        };
    }
}

export {Weather};