import React from 'react'
import './stylesheets/home.css'
// import {WiHumidity, GiSunset, GiSunrise, IoIosTimer, FaLocationArrow, FaSearchLocation, FaBars, FaTimes, FaArrowUp, FaArrowDown} from 'react-icons/all'
import * as Icons from 'react-icons/all'
class Home extends React.Component {
    constructor() {
        super()
        this.staticMapAPIKey = ''
        this.city = React.createRef()
        this.country = React.createRef()
        this.apikey = '31607cb616d24d692b0da2526c7beb27'
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        this.state = {
            lat: '',
            lon: '',
            weatherData: '',
            weatherToday: '',
            nextDays: [],
            city: '',
            target: '',
            isHide: true,
            date: new Date().toLocaleDateString()
        }
    }

    getLocation = (target) => {
        if(window.navigator.geolocation && target) {
            this.setState({
                weatherData: '',
                weatherToday:'',
                nextDays: []
            })
            window.navigator.geolocation.getCurrentPosition(position=>this.position(position, target))
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    position = (position, target) => {
        this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })
        this.fetchData(target)
    }

    fetchData = async (target) => {
        try {
            let dataTarget = target==='geolocation'?`lat=${this.state.lat}&lon=${this.state.lon}`:target
            let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${dataTarget}&appid=${this.apikey}`)
            let result = await data.json()
            for(let i=8; i<result.list.length;i=i+8) {
                this.state.nextDays.push(result.list[i])
            }
            this.setState({
                weatherData: result,
                weatherToday: result.list[0],
                date: new Date().toDateString()
            })
            console.log(this.state.weatherData)
        } catch (error) {
            console.error(error)
            alert('Please Enter Correct City, and Check your Network')
            this.getLocation('geolocation')
        }
    }

    componentDidMount() {
        this.getLocation('geolocation')
    }

    getChosenWeather = (event) => {
        event.preventDefault()
        this.getLocation(`q=${this.state.city}`)
        this.setState({
            city: '',
            isHide: true
        })
    }

    onCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleDisplay = () => {
        this.setState({isHide: !this.state.isHide})
    }

    render() {
        return(
            <React.Fragment>
                <div className='home-container'>
                <div className={this.state.isHide?'more':'more show'}>
                    <div className='form'>
                        <span 
                            className='close' 
                            onClick={this.handleDisplay}
                            >
                            <Icons.FaTimes />
                        </span>
                        <form onSubmit={this.getChosenWeather}>
                            <input 
                                className='form-controls'
                                type="text" 
                                ref={this.city} 
                                required 
                                placeholder='city'
                                onChange={this.onCityChange}
                                value={this.state.city}
                                />
                            <button 
                                disabled={this.state.city===''?true:false}
                                className='btn'
                                type="submit"
                            >{this.state.weatherData!==''
                            ?<Icons.FaSearchLocation/>
                            :<img 
                                className='wait-btn' 
                                src='media/wait.gif' 
                                alt='' />
                            }
                            </button>
                        </form>
                    </div>
                </div>

                
                <div className='navbar-home'>
                    {this.state.weatherData!==''
                    &&this.state.nextDays.length!==0?
                        <React.Fragment>
                            <h2>
                                {this.state.weatherData.city.name + ', ' + this.state.weatherData.city.country}
                                <span><Icons.FaLocationArrow /></span>
                            </h2>
                            <div 
                                className='icon-bar'
                                onClick={this.handleDisplay}
                            >
                                <Icons.FaBars/>
                            </div>
                        </React.Fragment>
                    :<div className='wait-navabar'>
                        <img src='media/wait.gif' alt='' />
                    </div>
                    }
                </div>

                {this.state.weatherData!==''
                &&this.state.nextDays.length!==0?
                    <React.Fragment>
                        <div className='display row'>
                            <div className='weather col col-12 col-sm-6'>
                                <div className="day">
                                    <img 
                                        src={'http://openweathermap.org/img/wn/'+this.state.weatherToday.weather[0].icon+'.png'} 
                                      alt='' 
                                    />
                                    <span className='date'>
                                        {this.state.date}
                                    </span>
                                </div>
                                <h2 className='temp'>
                                    <span className='min-temp'>
                                        <Icons.FaArrowDown/> 
                                        {Math.round(this.state.weatherToday.main.temp_min - 273.15)}
                                    </span>
                                    {Math.round(this.state.weatherToday.main.temp - 273.15)}&deg;
                                    <span className='max-temp'>
                                        {Math.round(this.state.weatherToday.main.temp_max - 273.15)}
                                        <Icons.FaArrowUp/>
                                    </span>
                                </h2>
                                <p>
                                    {this.state.weatherToday.weather[0].description}
                                </p>
                            </div>
                            <hr className='d-block d-sm-none'/>
                            <div className='next-days col col-12 col-sm-6'>
                                {this.state.nextDays.map((day, index)=> 
                                    <div className='day' key={index}>
                                        <img 
                                            src={'http://openweathermap.org/img/wn/'+day.weather[0].icon+'.png'} 
                                            alt='' 
                                        />
                                        <span className="date">
                                            {new Date(day.dt*1000).toDateString().substr(0,10)}
                                        </span>
                                        <span className='temp'>
                                            <span className='min-temp'>
                                                <Icons.FaArrowDown/>
                                                {Math.round(day.main.temp_min - 273.15)}
                                            </span>
                                            <span className='max-temp'>
                                                {Math.round(day.main.temp_max - 273.15)}
                                                <Icons.FaArrowUp/> 
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr/>
                        <div className='main text-center row'>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    <Icons.GiSunrise/> 
                                    {
                                        new Date(this.state.weatherData.city.sunrise*1000).getHours()+":"+
                                        new Date(this.state.weatherData.city.sunrise*1000).getMinutes()+" AM"
                                    }
                                </span>
                            </div>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    <Icons.GiSunset/> 
                                    {
                                        new Date(this.state.weatherData.city.sunset*1000).getHours()+":"+
                                        new Date(this.state.weatherData.city.sunset*1000).getMinutes()+" PM"
                                    }
                                </span>
                            </div>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    <Icons.WiHumidity/> 
                                    {this.state.weatherToday.main.humidity} %
                                </span>
                            </div>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    <Icons.IoIosTimer/>
                                    {this.state.weatherToday.main.pressure} mb
                                </span>
                            </div>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    {(this.state.weatherToday.main.temp>15)?<Icons.RiTempHotLine/>:<Icons.RiTempColdLine/>}
                                    {(this.state.weatherToday.main.temp - 273.15).toFixed(2)}
                                </span>
                            </div>
                            <div className='item col col-12 col-sm-6'>
                                <span className='desc'>
                                    <Icons.FiWind /> 
                                    {Math.round(this.state.weatherToday.wind.speed*3.6)} km/h
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div className='map'>
                            <img 
                                src={'https://maps.googleapis.com/maps/api/staticmap?center='+this.state.lat+','+this.state.lon+'&zoom=13&maptype=roadmap'+
                                '&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318'+
                                '&markers=color:red%7Clabel:C%7C40.718217,-73.998284'+
                                '&'+this.staticMapAPIKey} //this map must be valid with billing adrress to work
                                alt=''
                            />
                        </div>
                    </React.Fragment>
                    :<div className='wait-global'>
                        <img src='media/wait.gif' alt='staticmap' />
                    </div>
                }  
            </div>
            </React.Fragment> 
        )
    }
}

export default Home