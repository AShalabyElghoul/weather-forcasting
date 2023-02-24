async function today(sBar) {
    var searchBar = document.getElementById("searchBar");
    var sBar = searchBar.value;
    var data
    if (sBar == ""){
        data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key= 6a0f25566db24a70932160418232302&q=cairo&days=3&aqi=no&alerts=no`)
        // errormessage.innerHTML="a region is requred";
    }
    else if (sBar != "")
        data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key= 6a0f25566db24a70932160418232302&q=${sBar}&days=3&aqi=no&alerts=no`)
    var res = await data.json()
    // address
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = res.current.last_updated;
    var d1 = new Date(d);
    var dayName1 = days[d1.getDay()];
    todaydate.innerHTML += dayName1;
    todaydattte.innerHTML += d;
    // city
    var city = res.location.name;
    cityName.innerHTML += city;
    // weather condition
    var cond = res.current.condition.text;
    condit.innerHTML += cond;
    console.log(res);
    // icon
    var tomIcon0 = res.current.condition.icon
    var askDay0 = tomIcon0.slice(35, 36)
    if (askDay0 == 'd' || askDay0 == 'D') {
        var iconId0 = tomIcon0.slice(39, 42);
        dayNight.innerHTML += `<img src="weather/64x64/day/${iconId0}.png" class="py-4" alt="">`;
    }
    else {
        var iconId0 = tomIcon0.slice(41, 44);
        dayNight.innerHTML += `<img src="weather/64x64/night/${iconId0}.png" class="py-4" alt="">`;
    }
    // wind speed
    var currentWind = res.current.wind_kph;
    wind.innerHTML += currentWind + `<span>km\h</span>`;
    // temperature
    var temp = res.current.temp_c;
    temperature.innerHTML += temp + `<span>&degC</span>`;
    // humidity
    var humid = res.current.humidity;
    humidity.innerHTML += humid + `<span>%</span>`;
    // wind direction
    var windDirec = res.current.wind_dir;
    direction.innerHTML += windDirec;
    // -----------------------------------------------------------------------------------
    // tomorrow
    // address
    var d2 = new Date(res.forecast.forecastday[1].date);
    var dayName2 = days[d2.getDay()];
    tomdate.innerHTML += dayName2;
    // icon
    var tomIcon = res.forecast.forecastday[1].day.condition.icon;
    var askDay = tomIcon.slice(35, 36)
    if (askDay == 'd' || askDay == 'D') {
        var iconId = tomIcon.slice(39, 42);
        tomorrowIcon.innerHTML += `<img src="weather/64x64/day/${iconId}.png" class="py-4" alt="">`;
    }
    else {
        var iconId = tomIcon.slice(41, 44);
        tomorrowIcon.innerHTML += `<img src="weather/64x64/night/${iconId}.png" class="py-4" alt="">`;
    }
    // max temp
    var mas = res.forecast.forecastday[1].day.maxtemp_c;
    maxTom.innerHTML += mas + `<span>&degC</span>`;
    // min temp
    var min = res.forecast.forecastday[1].day.mintemp_c;
    minTom.innerHTML += min + `<span>&degC</span>`;
    // weather condition
    var tCond = res.forecast.forecastday[1].day.condition.text;
    tomCond.innerHTML += tCond;
    // -----------------------------------------------------------------------------------
    // the day after tomorrow
    // address
    var d3 = new Date(res.forecast.forecastday[2].date);
    var dayName3 = days[d3.getDay()];
    day2date.innerHTML += dayName3;
    // icon
    var tomIcon2 = res.forecast.forecastday[2].day.condition.icon;
    var askDay2 = tomIcon2.slice(35, 36)
    if (askDay2 == 'd' || askDay2 == 'D') {
        var iconId2 = tomIcon2.slice(39, 42);
        day2Icon.innerHTML += `<img src="weather/64x64/day/${iconId2}.png" class="py-4" alt="">`;
    }
    else {
        var iconId2 = tomIcon2.slice(41, 44);
        tomorrowIcon.innerHTML += `<img src="weather/64x64/night/${iconId2}.png" class="py-4" alt="">`;
    }
    // max temp
    var max2 = res.forecast.forecastday[2].day.maxtemp_c;
    day2Max.innerHTML += max2 + `<span>&degC</span>`;
    // min temp
    var min2 = res.forecast.forecastday[2].day.mintemp_c;
    day2Min.innerHTML += min2 + `<span>&degC</span>`;
    // weather condition
    var tCond2 = res.forecast.forecastday[2].day.condition.text;
    day2Cond.innerHTML += tCond2;
}
(function(){
    today("cairo")
})();
searchButton.addEventListener("click", function () {
    todaydate.innerHTML = " ";
    todaydattte.innerHTML = " ";
    tomdate.innerHTML = " ";
    day2date.innerHTML = " ";
    cityName.innerHTML = " ";
    condit.innerHTML = " ";
    humidity.innerHTML = " ";
    temperature.innerHTML = " ";
    wind.innerHTML = " ";
    dayNight.innerHTML = " ";
    direction.innerHTML = " ";
    maxTom.innerHTML = " ";
    minTom.innerHTML = " ";
    tomCond.innerHTML = " ";
    day2Max.innerHTML = " ";
    day2Min.innerHTML = " ";
    day2Cond.innerHTML = " ";
    tomorrowIcon.innerHTML = " ";
    day2Icon.innerHTML = " ";
})
