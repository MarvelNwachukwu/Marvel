let greetingText = document.querySelector('span');

var TodayDate = new Date();
var CurrentHour = TodayDate.getHours();
console.log(CurrentHour);

function ChangeGreeting (){
    if(CurrentHour > 0 && CurrentHour < 12){
        greetingText.innerHTML = 'Good Morning'
    }else if(CurrentHour > 12 && CurrentHour < 16){
        greetingText.innerHTML = 'Good Afternoon'
    }else if(CurrentHour > 16 && CurrentHour < 24){
        greetingText.innerHTML = 'Good Evening'
    }else{
        greetingText.innerHTML = 'Hello there'
    }
}

ChangeGreeting()