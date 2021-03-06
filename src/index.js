//navbar component
import Navbar from './scripts/nav';

//interact with ui
import {Ui} from './scripts/ui';
const ui = new Ui();

var weatherDiv = document.querySelector('.content .weather');
import {Weather} from './scripts/weather';
const weather = new Weather();

// localStorage and Caching script
import {Cache} from './scripts/cache';
const cache = new Cache();
cache.checkForWeatherCache() ? ui.changeWeather(weatherDiv ,cache.checkForWeatherCache()) : '';



// import Weather module :)
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    let city = searchForm.city.value;

    if(city.trim()){
        searchForm.reset();
        weather.init(city).then((data) => {
            ui.changeWeather(weatherDiv, data)
            cache.chacheData(data);
            ui.hideErrorOnWeatherForm(searchForm, 'Done ;)');
        }).catch(err => {
            ui.showErrorOnWeatherForm(searchForm, 'something wants wrong !');
            console.log('something wents wrong !');
        })
    } else {
        ui.showErrorOnWeatherForm(searchForm, 'Enter City Name !!!');
    }
})

//render navbar
const nav = new Navbar(document.querySelector('nav'));
nav.init();
