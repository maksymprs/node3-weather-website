const { error } = require('console')
const request = require('request')




const forecast = (latitude, longitude, callback) => {
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=03e5dda755c17658357d990788f63ea3&units=metric`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to to weather service!', undefined)
    } else if (body.cod != 200) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.weather[0].main}, ${body.weather[0].description}. It is currently ${body.main.temp} degrees out. It feels like ${body.main.feels_like} degrees out. Humidity is ${body.main.humidity}, pressure is ${body.main.pressure}`)
    }
  })
}

module.exports = forecast