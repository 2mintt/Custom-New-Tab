
var today = new Date();
setInterval(() => {
    var today = new Date();
    var date = today.getDate();
    var mon = today.getMonth()+1;
    var h = today.getHours();
    var m = today.getMinutes();
    if (mon < 10){
        var mon = '0' + mon;
    };
    if (date < 10){
        var date = '0' + date;
    };
    if (h < 10){
        h = '0' + h;
    };
    if (m < 10){
        m = '0' + m;
    }
    document.getElementById('date').innerHTML = date + '/' + mon;
    document.getElementById('time').innerHTML = h + ':' + m;
    
}, 1000);

function bgColor(){
    var h = today.getHours();
    var bg = document.getElementById('bg').style;
    var sun = document.querySelector("#bg > div.sun").style;
    if (h == 0 && h < 5){
        bg.backgroundColor = '#555';
    }
    else if( h > 5 && h <= 7 ){
        bg.backgroundColor = '#efa18b';
        sun.transform = 'rotate(-150deg) translate(40vw) rotate(-150deg)';
    }
    else if( h <= 10 ){
        bg.backgroundColor = '#e3c498';
        sun.transform = 'rotate(-120deg) translate(40vw) rotate(-120deg)';
    }
    else if( h <= 14 ){
        bg.backgroundColor = '#f6e9d2';
        sun.transform = 'rotate(-90deg) translate(40vw) rotate(-90deg)';
    }
    else if( h <= 16 ){
        bg.backgroundColor = '#e3c498';
        sun.transform = 'rotate(-60deg) translate(40vw) rotate(-60deg)';
    }
    else if (h <=17){
        bg.backgroundColor = '#efa18b';
        sun.transform = 'rotate(-30deg) translate(40vw) rotate(-30deg)';
    }
    else if (h >= 18){
        bg.backgroundColor = '#010a3d';
        sun.transform = 'rotate(-90deg) translate(40vw) rotate(-90deg)';
    }
}
bgColor();
function getAPI(){
    var url = 'https://api.openweathermap.org/data/2.5/weather?id=1581130&appid=337b82f1937cfc7d06473028f45c403e&units=metric';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var weatherId = data.weather[0].id;
        var temp = data.main.temp;
        var min = data.main.temp_min;
        var max = data.main.temp_max;
        var feel = data.main.feels_like;
        var type = data.weather[0].main;
        document.getElementById('range').innerHTML = min +'°C' + ' - ' + max + '°C';
        document.getElementById('temp').innerHTML = temp + '°C';
        document.getElementById('type').innerHTML = type;
        document.getElementById('feel').innerHTML = feel + '°C';
        if (weatherId == 500){
            document.getElementById('weather-icon').innerHTML = '<img id=icon src=./svg/small_rain.svg>';
            document.getElementsByClassName('rain-drop').style.display = 'block';
        }
        else if (weatherId == 202){
            document.getElementById('weather-icon').innerHTML = '<img id=icon src = ./svg/strong_rain.svg>';
            document.getElementsByClassName('lightning').style.display = 'block';
        }
        else if (weatherId == 501){
            document.getElementById('weather-icon').innerHTML = '<img id=icon src = ./svg/strong_rain.svg>';
        }
        else if (weatherId == 701){
            document.getElementById('weather-icon').innerHTML = '<img id=icon src = ./svg/foggy.svg>';
        }
        else if (weatherId == 804){
            document.getElementById('weather-icon').innerHTML = '<img id=icon src = ./svg/cloudy.svg>';
        }
    })
    .catch(error => console.error(error))

}
getAPI();
