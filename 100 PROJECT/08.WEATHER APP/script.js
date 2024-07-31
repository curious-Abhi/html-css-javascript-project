document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById("location-form");
    const inputLocation=document.getElementById("input-location");
    const weatherInfo=document.getElementById("weather-info")
    const cityName=document.getElementById("city-name");
    const temperature=document.getElementById("temperature");
    const description=document.getElementById("description");
    const weatherIcon=document.getElementById("weather-icon")
    
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const location=inputLocation.value
        if(location){
            getWeather(location);
            inputLocation.value=""
        }
    })

    async function getWeather(location){
        const apikey="";
        const url="";


        try {
            const response = await fetch(url)
            const data  = await response.json()
            if(data.cod===200){
                updateWeatherInfo(data);
            }else{
                alert("City not found")
            }
            
        } catch (error) {
            console.error("Error fetching city")
        }
    }
    function updateWeatherInfo(data){
        cityName.textContent=data.name;
        temperature.textContent=`Temperature:${data.main.temp}°C`;
        description.textContent=`weather:${data.weather[0].description}`;
        weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherInfo.classList.remove('hidden');
    }

});
