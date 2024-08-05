import library from "../assets/library page.png";
import TicTacToe from "../assets/tic-tac-toe.png";
import todo from "../assets/todo.png";
import weather from "../assets/weather app.png";

const array = ["library", "weather", "todo", "tic-tac-toe"];
let outerdiv;
let innerElements1, innerElements2, header;
let link;

function startProcess() {
  for (let i = 0; i < array.length; i++) {
    createDivs( array[i]);
  }
}
function createDivs(varB) {
  outerdiv = document.createElement("div");
  link = document.createElement("a");
  innerElements1 = document.createElement("img");
  innerElements2 = document.createElement("div");
  header = document.createElement("div");
  outerdiv.id = "project-content";
  innerElements2.id="project-content-text";

    if (varB == "tic-tac-toe") {
      link.href = "https://adleenalobo.github.io/tic_tac_toe/dist/index.html";
      innerElements1.setAttribute("src", TicTacToe);
      innerElements2.textContent =
        "tic tac toe game website built. In this game the user has 2 options , 1.To play with a human opponent and 2.To play with an AI.";
      header.textContent = "TIC-TAC-TOE";
      header.classList.add("projects-header");
      addElemToHtml(link, outerdiv, innerElements1, innerElements2,header);

    } else if (varB == "weather") {
      link.href = "https://adleenalobo.github.io/weather_app/dist/index";
      innerElements1.setAttribute("src", weather);
      innerElements2.textContent =
        "A weather forecasting app  , here one can search a city and the  current weather will be displayed.One can toggle the temperature to farenhiet or celsius and that state saved so even when one reloads the page it will be on the last toggled mode.This website has been built using weather api.";
        header.textContent = "WEATHER";
        header.classList.add("projects-header");
      addElemToHtml(link, outerdiv, innerElements1, innerElements2,header);

    }
    else if (varB == "library") {
      link.href = "https://adleenalobo.github.io/Odin-Library/";
      innerElements1.setAttribute("src", library);
      innerElements2.textContent =
        "A library page , it has a feature of adding books, once clicked on  + a form will pop up to fill in the details, one can delete the books too";
        header.textContent = "LIBRARY";
        header.classList.add("projects-header");
      addElemToHtml(link, outerdiv, innerElements1, innerElements2,header);

    } else if (varB == "todo") {
      link.href = "https://adleenalobo.github.io/todo_list/dist/index.html";
      innerElements1.setAttribute("src", todo);
      innerElements2.textContent =
        "A ToDo list website , here we have 2 main pages : About , Home. When clicked on home we get the list of the todo's that we have entered,  we can add todo's by clicking on + symbol . This project has been built using date-fns . It also has toggle option for theme and saves the todo's and the state even after a reload .";
        header.textContent = "TODO";
        header.classList.add("projects-header");
      addElemToHtml(link, outerdiv, innerElements1, innerElements2,header);
    }  
}

function addElemToHtml(
  link,
  outerdiv,
  innerElements1,
  innerElements2,
  header
) {
  let project = document.getElementById("projects");
  link.appendChild(innerElements1);
  link.appendChild(header);
  outerdiv.appendChild(link);
  outerdiv.appendChild(innerElements2);
  project.appendChild(outerdiv);
}

export { startProcess };
