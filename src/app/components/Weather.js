import React from "react";

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        }
    }
    componentDidMount() {
        let cityId = this.props.cityId || '524901';
        let path = (`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=e1c84156e270c48a122a5ec550984b60`);
        this.loadData(path);
        this.timerId = setInterval(
            () => this.loadData(path)
            , 60000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    async loadData(path) {
        const res = await fetch(path);
        const json = await res.json();

        this.setState({ weather: json});
    }
    render() {
        let {weather} = this.state;
        if (weather.wind) {
            console.log(weather);
            return (
                <div className="card card-weather">
                    <h4 className="card-header bg-dark text-white">{ weather.name }</h4>
                    <div className="card-block">
                        <div className="card-weather__img h5">
                            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
                            { Math.round(weather.main.temp - 273.15) } &deg;C
                        </div>
                        <p>Wind: { weather.wind.speed } m/s</p>
                    </div>
                </div>
            );
        }
        return (
            <p>Loading...</p>
        );
    }
}