class Ui
{
    changeWeather(weatherDiv, data){
        weatherDiv.querySelector('.name').textContent = data.city;
        weatherDiv.querySelector('.temp').innerHTML = `${data.temp} &#176C`;
        weatherDiv.querySelector('.icon').src = data.iconURL;
    }

    showErrorOnWeatherForm(searchForm, message){
        searchForm.city.classList.add('error');
        searchForm.city.placeholder = message;
    }

    hideErrorOnWeatherForm(searchForm, message){
        searchForm.city.classList.remove('error');
        searchForm.city.placeholder = message;
    }
}

export {Ui};