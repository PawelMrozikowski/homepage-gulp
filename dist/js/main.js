!function(n){var e={};function c(l){if(e[l])return e[l].exports;var t=e[l]={i:l,l:!1,exports:{}};return n[l].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=e,c.d=function(n,e,l){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)c.d(l,t,function(e){return n[e]}.bind(null,t));return l},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconsole.log(`Hello world!`);\n\n//alert(`siema, udało Ci się`);\n\nconsole.log('siema!');\n\n\nconst name = 'Paweł';\nconst age = 35;\nlet Pawel = null;\n\nconsole.log(`Nazywam się ${name} i mam ${age} lat`);\n\n\n/*const about_test = document.querySelector('.about__test--js');\n\nconsole.log(about_test.innerHTML);\n\n\nconst variable = document.querySelector('.about__paragraph--js');\n\nvariable.innerHTML = \"zmiana treści za pomoca JS\";\n\nconsole.log(variable.innerHTML); */\n\n\n\n\n\nif (age > 35){\n    console.log(\"Mam wiecej niz 34 lata\");\n} else if(age < 35) {\n    console.log(\" Mam mniej niz 34 lata\");\n} else if((age == 35) && (name == 'Pawel')){\n    console.log(\"mam 35 lat i jestem Paweł\");\n} else {\n    console.log(\"brak polskich liter\");\n}\n\n\nswitch (age) {\n    case 36:\n        console.log(\"mam 36 lat\");\n        break;\n    case 37:\n        console.log(\"mam 37lat\");\n        break;\n    case 38:\n        console.log(\"mam 38 lat\");\n        break;\n    default:\n        console.log(`masz ${age} lat!`);\n        break;\n\n    }\n\n    const amIold = (age > 70) ? 'yes' : 'no';\n    console.log(amIold);\n\n\n\n/*\n\n\n\n\nfunction calculate(x) {\n    x = x +3;\n    console.log(x)\n    return x *7;\n}\n\nconst score = calculate(2);\nconsole.log(score);\n\nconst scoreFat = x => (x+3)*7;\nconsole.log(scoreFat(1));       //pamietaj o wpisaniu wartości, a nie tylko zmiennej!!!!\n\n*/\n\n\n\nconst button = document.querySelector('.diary__button--js');\nconsole.log(button);\n\n\nbutton.addEventListener('click', (e) =>{\nconst header = document.querySelector('.main__header--js');\nheader.innerHTML = \"click click\";\nheader.classList.toggle('main__header--red');\nif (header.classList.contains('main__header--red')){\n    console.log('jest klasa');\n} else {\n    console.log(\"nie ma klasy\"); \n}\n\n//alert('alert');\n})\n\nconst navigationBurger = document.querySelector('.navigation__burger--js');\n\nnavigationBurger.addEventListener('click', (e) => {\nconst navigationList = document.querySelector('.navigation__list--js');\nnavigationList.classList.toggle('navigation__list--visible');\n});\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLEtBQUssU0FBUyxJQUFJOzs7QUFHN0M7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLGdDQUFnQzs7Ozs7O0FBTWhDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdDO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cblxuY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xuXG4vL2FsZXJ0KGBzaWVtYSwgdWRhxYJvIENpIHNpxJlgKTtcblxuY29uc29sZS5sb2coJ3NpZW1hIScpO1xuXG5cbmNvbnN0IG5hbWUgPSAnUGF3ZcWCJztcbmNvbnN0IGFnZSA9IDM1O1xubGV0IFBhd2VsID0gbnVsbDtcblxuY29uc29sZS5sb2coYE5henl3YW0gc2nEmSAke25hbWV9IGkgbWFtICR7YWdlfSBsYXRgKTtcblxuXG4vKmNvbnN0IGFib3V0X3Rlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX3Rlc3QtLWpzJyk7XG5cbmNvbnNvbGUubG9nKGFib3V0X3Rlc3QuaW5uZXJIVE1MKTtcblxuXG5jb25zdCB2YXJpYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fcGFyYWdyYXBoLS1qcycpO1xuXG52YXJpYWJsZS5pbm5lckhUTUwgPSBcInptaWFuYSB0cmXFm2NpIHphIHBvbW9jYSBKU1wiO1xuXG5jb25zb2xlLmxvZyh2YXJpYWJsZS5pbm5lckhUTUwpOyAqL1xuXG5cblxuXG5cbmlmIChhZ2UgPiAzNSl7XG4gICAgY29uc29sZS5sb2coXCJNYW0gd2llY2VqIG5peiAzNCBsYXRhXCIpO1xufSBlbHNlIGlmKGFnZSA8IDM1KSB7XG4gICAgY29uc29sZS5sb2coXCIgTWFtIG1uaWVqIG5peiAzNCBsYXRhXCIpO1xufSBlbHNlIGlmKChhZ2UgPT0gMzUpICYmIChuYW1lID09ICdQYXdlbCcpKXtcbiAgICBjb25zb2xlLmxvZyhcIm1hbSAzNSBsYXQgaSBqZXN0ZW0gUGF3ZcWCXCIpO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImJyYWsgcG9sc2tpY2ggbGl0ZXJcIik7XG59XG5cblxuc3dpdGNoIChhZ2UpIHtcbiAgICBjYXNlIDM2OlxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hbSAzNiBsYXRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzc6XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFtIDM3bGF0XCIpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDM4OlxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hbSAzOCBsYXRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKGBtYXN6ICR7YWdlfSBsYXQhYCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYW1Jb2xkID0gKGFnZSA+IDcwKSA/ICd5ZXMnIDogJ25vJztcbiAgICBjb25zb2xlLmxvZyhhbUlvbGQpO1xuXG5cblxuLypcblxuXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlKHgpIHtcbiAgICB4ID0geCArMztcbiAgICBjb25zb2xlLmxvZyh4KVxuICAgIHJldHVybiB4ICo3O1xufVxuXG5jb25zdCBzY29yZSA9IGNhbGN1bGF0ZSgyKTtcbmNvbnNvbGUubG9nKHNjb3JlKTtcblxuY29uc3Qgc2NvcmVGYXQgPSB4ID0+ICh4KzMpKjc7XG5jb25zb2xlLmxvZyhzY29yZUZhdCgxKSk7ICAgICAgIC8vcGFtaWV0YWogbyB3cGlzYW5pdSB3YXJ0b8WbY2ksIGEgbmllIHR5bGtvIHptaWVubmVqISEhIVxuXG4qL1xuXG5cblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYXJ5X19idXR0b24tLWpzJyk7XG5jb25zb2xlLmxvZyhidXR0b24pO1xuXG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19oZWFkZXItLWpzJyk7XG5oZWFkZXIuaW5uZXJIVE1MID0gXCJjbGljayBjbGlja1wiO1xuaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21haW5fX2hlYWRlci0tcmVkJyk7XG5pZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnbWFpbl9faGVhZGVyLS1yZWQnKSl7XG4gICAgY29uc29sZS5sb2coJ2plc3Qga2xhc2EnKTtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJuaWUgbWEga2xhc3lcIik7IFxufVxuXG4vL2FsZXJ0KCdhbGVydCcpO1xufSlcblxuY29uc3QgbmF2aWdhdGlvbkJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19idXJnZXItLWpzJyk7XG5cbm5hdmlnYXRpb25CdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuY29uc3QgbmF2aWdhdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdC0tanMnKTtcbm5hdmlnYXRpb25MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX2xpc3QtLXZpc2libGUnKTtcbn0pO1xuXG5cblxuXG5cbiBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);