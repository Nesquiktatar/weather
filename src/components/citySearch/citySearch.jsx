import React from 'react';

const CitySearch = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name='city' placeholder='enter city name'/>
        <button>Check weather</button>
    </form>
)

export default CitySearch;