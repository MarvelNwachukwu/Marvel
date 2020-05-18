function ChangeGreeting() {

    let greetingText = document.querySelector('span');
    var TodayDate = new Date();
    var CurrentHour = TodayDate.getHours();
    console.log(CurrentHour);

    if (CurrentHour > 0 && CurrentHour < 12) {
        greetingText.innerHTML = 'Good Morning'
    } else if (CurrentHour > 12 && CurrentHour < 16) {
        greetingText.innerHTML = 'Good Afternoon'
    } else if (CurrentHour > 16 && CurrentHour < 24) {
        greetingText.innerHTML = 'Good Evening'
    } else {
        greetingText.innerHTML = 'Hello there'
    }
}

ChangeGreeting();


    const MenuButton = document.querySelector('.MenuIcon');
    const Menu = document.querySelector('#Menu');
    const Content = document.querySelector('.Content')

    MenuButton.addEventListener('click', removeAttribute(hidden));