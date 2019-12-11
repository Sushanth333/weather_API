var search =document.getElementById('search');
//events
search.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13){
        var getcityname= e.target.value;
    }
    getweather(getcityname);
});

function getweather(getcityname){
const weatherapi =`http://api.openweathermap.org/data/2.5/weather?q=${getcityname}&&mode=json&units=metric&APPID=e8a513fde76080c58d5407a6087e22b3`;
window.fetch(weatherapi).then(data =>{
    data.json().then(weather =>{
        var output ="";
        console.log(weather);
        console.log(weather.coord.lon); //longitude
        console.log(weather.coord.lat);//latitude
     
        var weatherdata =weather.weather;
        for (let x of weatherdata){
            output += `
            <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
            <h1>${weather.name}</h1>
            <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png" /> </span>
            <p><span>Temp:</span>
            <span class="temp">${weather.main.temp}&deg;c</span></p>
                </div>
            </div>`;
            document.getElementById("template").innerHTML= output;
        }
    }).catch(err => console.log(err));
}).catch(err => console.log(err));
}