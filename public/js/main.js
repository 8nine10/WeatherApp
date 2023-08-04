const submitBtn = document.getElementById('submitBtn');
const city = document.getElementById('city');
const temp = document.getElementById('temp1');
const temp_stat = document.getElementById('temp_stat');
const city_name = document.getElementById('city_name');
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById("day");
const date = document.getElementById("date");


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = city.value;
    console.log(cityVal);
    if (cityVal === "") {
        city_name.innerText = 'Please write name before search.';
        dataHide.classList.add('data_hide');
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1ac400a27dd7b1dfd0b3b83ca97b5080`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            console.log(arr);
            city_name.innerText = cityVal;
            temp.innerText = (arr[0].main.temp - 273).toPrecision(2);
            var ige = arr[0].weather[0].main;
            console.log(ige);
            if (ige == "Sunny") {
                console.log(ige);
                temp_stat.innerHTML = "<i class='fa-regular fa-sun' style='color: #fff700;'></i>";
            } else if (ige == "Mist") {
                console.log(ige);
                temp_stat.innerHTML = "<i class='fa-solid fa-cloud' style='color: #d6d6d6;'></i>";
            } else if (ige == "Rain") {
                console.log(ige);
                temp_stat.innerHTML = "<i class='fa-solid fa-droplet' style='color: #94bbff;'></i>";
            } else if (ige == "Clouds") {
                console.log(ige);
                temp_stat.innerHTML = "<i class='fa-solid fa-cloud' style='color: #d6d6d6;'></i>";
            }
            dataHide.classList.remove('data_hide');
        } catch {
            city_name.innerText = 'Please name a correct city name.';
            dataHide.classList.add('data_hide');
        }
    }
}

const getCurTime = () => {
    var mth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var curTime = new Date();
    var mth = mth[curTime.getMonth()];
    var day = curTime.getDate();
    return `${day} | ${mth}`;
}
date.innerHTML = getCurTime();

const getToday = () => {
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var cur = new Date();
    var dayn = week[cur.getDay()];
    console.log(dayn);
    return `${dayn}`;
}

day.innerHTML = getToday();

submitBtn.addEventListener('click', getInfo);