(()=>{"use strict";var e="./";const t=e+"c074ff2a7cbabc744c03.png",a=e+"284bcfd5c35073fba6c4.png",o=e+"82e5eca37b3666807fa9.png",n=e+"676e2fc0de14375d0a3f.png",i=["library","weather","todo","tic-tac-toe"];let d,s,c,r,h;function l(e,t,a,o,n){let i=document.getElementById("projects");e.appendChild(a),e.appendChild(n),t.appendChild(e),t.appendChild(o),i.appendChild(t)}!function(){for(let p=0;p<i.length;p++)e=i[p],d=document.createElement("div"),h=document.createElement("a"),s=document.createElement("img"),c=document.createElement("div"),r=document.createElement("div"),d.id="project-content",c.id="project-content-text","tic-tac-toe"==e?(h.href="https://adleenalobo.github.io/tic_tac_toe/dist/index.html",s.setAttribute("src",a),c.textContent="tic tac toe game website built. In this game the user has 2 options , 1.To play with a human opponent and 2.To play with an AI.",r.textContent="TIC-TAC-TOE",r.classList.add("projects-header"),l(h,d,s,c,r)):"weather"==e?(h.href="https://adleenalobo.github.io/weather_app/dist/index",s.setAttribute("src",n),c.textContent="A weather forecasting app  , here one can search a city and the  current weather will be displayed.One can toggle the temperature to farenhiet or celsius and that state saved so even when one reloads the page it will be on the last toggled mode.This website has been built using weather api.",r.textContent="WEATHER",r.classList.add("projects-header"),l(h,d,s,c,r)):"library"==e?(h.href="https://adleenalobo.github.io/Odin-Library/",s.setAttribute("src",t),c.textContent="A library page , it has a feature of adding books, once clicked on  + a form will pop up to fill in the details, one can delete the books too",r.textContent="LIBRARY",r.classList.add("projects-header"),l(h,d,s,c,r)):"todo"==e&&(h.href="https://adleenalobo.github.io/todo_list/dist/index.html",s.setAttribute("src",o),c.textContent="A ToDo list website , here we have 2 main pages : About , Home. When clicked on home we get the list of the todo's that we have entered,  we can add todo's by clicking on + symbol . This project has been built using date-fns . It also has toggle option for theme and saves the todo's and the state even after a reload .",r.textContent="TODO",r.classList.add("projects-header"),l(h,d,s,c,r));var e}()})();