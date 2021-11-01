import {API_KEY} from './Config.js'; 

function suceess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat , lon)
    const div = document.querySelector('div');
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        div.innerHTML = `<h3>${data.name}</h3><h3>${data.main.temp}</h3><h3>${data.weather[0].description}</h3>`
    })
}
function error(){
    alert('현재 위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(suceess,error);