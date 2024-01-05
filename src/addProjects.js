import library from "../assets/library page.png";
import restraurant from "../assets/restraurant page.png";
import todo from "../assets/todo.png";
import weather from "../assets/weather app.png";

const array = ["restraurant", "library", "weather", "todo"];
const array1 = [1, 0, 1, 0];
let outerdiv;
let innerElements1, innerElements2;
let link;

function startProcess() {
  for (let i = 0; i < array1.length; i++) {
    createDivs(array1[i], array[i]);
  }
}
function createDivs(varA, varB) {
  outerdiv = document.createElement("div");
  link = document.createElement("a");
  outerdiv.id = "project-content";
  if (varA == 1) {
    innerElements1 = document.createElement("img");
    innerElements1.style.height = "200px";
    innerElements1.style.width = "400px";
    innerElements2 = document.createElement("div");
    if (varB == "restraurant") {
      link.href = "https://adleenalobo.github.io/Restaurant-Page/";
      innerElements1.src = restraurant;
      innerElements2.textContent =
        "A restraurant site which has 3 main pages : About us page , Menu and Contact information. Inside each page the content is in pluckcard format. ";
      addElemToHtml(link, outerdiv, innerElements1, innerElements2);
    } else if (varB == "weather") {
      link.href = "https://adleenalobo.github.io/weather_app/dist/index";
      innerElements1.setAttribute("src", weather);
      innerElements2.textContent =
        "A weather forecasting app  , here one can search a city and the  current weather will be displayed.One can toggle the temperature to farenhiet or celsius and that state saved so even when one reloads the page it will be on the last toggled mode.This website has been built using weather api.";
      addElemToHtml(link, outerdiv, innerElements1, innerElements2);
    }
  } else {
    innerElements2 = document.createElement("img");
    innerElements2.style.height = "200px";
    innerElements2.style.width = "400px";
    innerElements1 = document.createElement("div");
    if (varB == "library") {
      link.href = "https://adleenalobo.github.io/Odin-Library/";
      innerElements2.setAttribute("src", library);
      innerElements1.textContent =
        "A library page , it has a feature of adding books, once clicked on  + a form will pop up to fill in the details, one can delete the books too";
      addElemToHtml(link, outerdiv, innerElements1, innerElements2);
    } else if (varB == "todo") {
      link.href = "https://adleenalobo.github.io/todo_list/dist/index.html";
      innerElements2.setAttribute("src", todo);
      innerElements1.textContent =
        "A ToDo list website , here we have 2 main pages : About , Home. When clicked on home we get the list of the todo's that we have entered,  we can add todo's by clicking on + symbol . This project has been built using date-fns . It also has toggle option for theme and saves the todo's and the state even after a reload .";
      addElemToHtml(link, outerdiv, innerElements1, innerElements2);
    }
  }
}
function addElemToHtml(link, outerdiv, innerElements1, innerElements2) {
  let project = document.getElementById("projects");
  outerdiv.appendChild(innerElements1);
  outerdiv.appendChild(innerElements2);
  project.appendChild(link);
  link.appendChild(outerdiv);
}

export { startProcess };
