"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

//alert(`siema, udało Ci się`);

console.log('siema!');


const name = 'Paweł';
const age = 35;
let Pawel = null;

console.log(`Nazywam się ${name} i mam ${age} lat`);


/*const about_test = document.querySelector('.about__test--js');

console.log(about_test.innerHTML);


const variable = document.querySelector('.about__paragraph--js');

variable.innerHTML = "zmiana treści za pomoca JS";

console.log(variable.innerHTML); */





if (age > 35){
    console.log("Mam wiecej niz 34 lata");
} else if(age < 35) {
    console.log(" Mam mniej niz 34 lata");
} else if((age == 35) && (name == 'Pawel')){
    console.log("mam 35 lat i jestem Paweł");
} else {
    console.log("brak polskich liter");
}


switch (age) {
    case 36:
        console.log("mam 36 lat");
        break;
    case 37:
        console.log("mam 37lat");
        break;
    case 38:
        console.log("mam 38 lat");
        break;
    default:
        console.log(`masz ${age} lat!`);
        break;

    }

    const amIold = (age > 70) ? 'yes' : 'no';
    console.log(amIold);



/*




function calculate(x) {
    x = x +3;
    console.log(x)
    return x *7;
}

const score = calculate(2);
console.log(score);

const scoreFat = x => (x+3)*7;
console.log(scoreFat(1));       //pamietaj o wpisaniu wartości, a nie tylko zmiennej!!!!

*/



const button = document.querySelector('.diary__button--js');
console.log(button);


button.addEventListener('click', (e) =>{
const header = document.querySelector('.main__header--js');
header.innerHTML = "click click";
header.classList.toggle('main__header--red');
if (header.classList.contains('main__header--red')){
    console.log('jest klasa');
} else {
    console.log("nie ma klasy"); 
}

//alert('alert');
})

const navigationBurger = document.querySelector('.navigation__burger--js');

navigationBurger.addEventListener('click', (e) => {
const navigationList = document.querySelector('.navigation__list--js');
navigationList.classList.toggle('navigation__list--visible');
});





 















