import React from 'react';
import './App.css';
import CitySearch from './components/citySearch/citySearch';
import WeatherInfo from './components/weatherInfo/weatherInfo';

const API_KEY = "e268ba99b1259f6b44a8711be5a5815f   ";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }




    getWeather = async (event) => {
        event.preventDefault(); //уничтожаем стандартное поведение страничек-перезагрузка
        const cityName = event.target.elements.city.value;


        if (cityName) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
            const data = await api_url.json();
            console.log(data) ;

            let sunset=data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                error: undefined
            });
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            })
        }
    };

    getWeatherGismeteo = async (event) => {
        event.preventDefault(); //уничтожаем стандартное поведение страничек-перезагрузка
        const cityName = event.target.elements.city.value;


        if (cityName) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
            const data = await api_url.json();

            let sunset=data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                error: undefined
            });
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            })
        }
    };



    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <CitySearch  getWeather={this.getWeather}/>
                        <WeatherInfo
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunset={this.state.sunset}
                            error={this.state.error}

                        />
                    </div>
                </header>
            </div>
        )
    };
}

export default App;

//import requests
// import json
// city_name = input("Введите город:")
// api_token = '56b30cb255.3443075'
// api_url_base = 'https://api.gismeteo.net/v2/search/cities/?lang=ru&query='
// headers = {
//     'X-Gismeteo-Token': api_token,
//     'Accept-Encoding': 'gzip'
// }
//
// def get_info_about_city(api_url_base_value=api_url_base, requests_headers=None):
//     if requests_headers is None:
//         requests_headers = headers
//     response = requests.get(api_url_base_value + city_name, headers=requests_headers)
//     if response.status_code == 200:
//         return json.loads(response.content.decode('utf-8'))
//     else:
//         return None
// print(get_info_about_city())