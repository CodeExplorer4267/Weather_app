const url="https://api.api-ninjas.com/v1/weather?city="
const input=document.getElementById("input")
const btn=document.getElementById("search")
let city=document.getElementById("city")
let temp=document.getElementById("city_temp")
let humidity=document.getElementById("humi")
let wind=document.getElementById("wind_s")
let min_temp=document.getElementById("MITEMP")
let max_temp=document.getElementById("MATEMP")
let wind_degree=document.getElementById("WINDDEG")
let feel=document.getElementById("feels_like")
let details=document.getElementById("all_details")
let weather_icon=document.getElementById("weather_logo")
let humi=document.querySelector(".humidity")
let newDate=new Date()
console.log(newDate.getHours())
if(newDate.getHours()>18){
    console.log("setting background color to black")
    document.body.style.background="black"
    details.style.color="white"
}
else if(newDate.getHours()>6 && newDate.getHours()<15){

    
}
const options={
    method:'GET',
    headers:{
     'X-Api-Key':'0IKlu7DsBJINFGjdmfmgnQ==XKv9WOyZDNma6mBx'
    }
};

btn.addEventListener('click',()=>{
    if(input.value===''){
        alert("You must write some city")
    }
    else{
        fetch(`${url}${input.value}`,options)
        .then((response)=>response.json())
        .then((data)=>{
        console.log(data)
        city.innerHTML=input.value
        temp.innerHTML=data.temp + `<sup>o</sup>c`
        humidity.innerHTML=data.humidity + "%"
        wind.innerHTML=data.wind_speed + "km/hr"
        min_temp.innerHTML=data.min_temp+ `<sup>o</sup>c`
        max_temp.innerHTML=data.max_temp+ `<sup>o</sup>c`
        wind_degree.innerHTML=data.wind_degrees
        feel.innerHTML=data.feels_like+`<sup>o</sup>c`
        let cloud_pcg=data.cloud_pct
        if(data.temp<=0){
         weather_icon.src="snowy-6.svg"
        }
        else if(newDate.getHours()>18){
            weather_icon.src="night.svg"
        }
        else if(cloud_pcg>70 && data.humidity<70){
            weather_icon.src="cloudy-day-3.svg"
        }
        else if(cloud_pcg>70 && data.humidity>70){
            weather_icon.src="rainy-7.svg"
        }
        else{
            weather_icon.src="day.svg"
        }

        })

    }
})
var style=document.createElement('style')
style.innerHTML=`
body{
    background:red;

}
`
document.appendChild(style)
