document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById("location-form");
    const inputLocation=document.getElementById("input-location");
    const weatherInfo=document.getElementById("weather-info")
    const cityName=document.getElementById("city-name");
    const temperature=document.getElementById("temperature");
    const description=document.getElementById("description");
    const weaterIcon=document.getElementById("weather-icon")
    
    
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
            
        } catch (error) {
            console.error("Error fetching city")
        }
    }

    

  











})
