import library from "../assets/library page.png";
import TicTacToe from "../assets/tic-tac-toe.png";
import todo from "../assets/todo.png";
import weather from "../assets/weather app.png";
import kanban from "../assets/kanban.png";

const array = [
  "library",
  "weather",
  "todo",
  "tic-tac-toe",
  "kanban-task-management",
];
let outerdiv;
let innerElements1, innerElements2, header;
let link;

function startProcess() {
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    createDivs(array[i]);
  }
}
function createDivs(varB) {
  outerdiv = document.createElement("div");
  link = document.createElement("a");
  innerElements1 = document.createElement("img");
  innerElements2 = document.createElement("div");
  header = document.createElement("div");
  outerdiv.id = "project-content";
  innerElements2.id = "project-content-text";

  if (varB == "tic-tac-toe") {
    link.href = "https://adleenalobo.github.io/tic_tac_toe/dist/index.html";
    innerElements1.setAttribute("src", TicTacToe);
    innerElements2.textContent = `- The classic tic tac toe game that can be played against a computer or a human.
- The purpose of building this game was to challenge myself to build an interactive web application using Figma designs provided by Frontend mentor.`;
    header.textContent = "TIC-TAC-TOE";
    header.classList.add("projects-header");
    addElemToHtml(link, outerdiv, innerElements1, innerElements2, header);
  } else if (varB == "weather") {
    link.href = "https://adleenalobo.github.io/weather_app/dist/index";
    innerElements1.setAttribute("src", weather);
    innerElements2.textContent = `- A simple web application to display current weather information of any city in the world.
      - The purpose of this appplication was to test my web development skills and to learn more about webpack and the storage APIs provided by browsers.`;
    header.textContent = "WEATHER";
    header.classList.add("projects-header");
    addElemToHtml(link, outerdiv, innerElements1, innerElements2, header);
  } else if (varB == "library") {
    link.href = "https://adleenalobo.github.io/Odin-Library/";
    innerElements1.setAttribute("src", library);
    innerElements2.textContent =
      "A library page , it has a feature of adding books, once clicked on  + a form will pop up to fill in the details, one can delete the books too";
    header.textContent = "LIBRARY";
    header.classList.add("projects-header");
    addElemToHtml(link, outerdiv, innerElements1, innerElements2, header);
  } else if (varB == "todo") {
    link.href = "https://adleenalobo.github.io/todo_list/dist/index.html";
    innerElements1.setAttribute("src", todo);
    innerElements2.textContent =
      "A ToDo list website , here we have 2 main pages : About , Home. When clicked on home we get the list of the todo's that we have entered,  we can add todo's by clicking on + symbol . This project has been built using date-fns . It also has toggle option for theme and saves the todo's and the state even after a reload .";
    header.textContent = "TODO";
    header.classList.add("projects-header");
    addElemToHtml(link, outerdiv, innerElements1, innerElements2, header);
  } else if (varB == "kanban-task-management") {
    link.href = "https://kanban-phi-lovat.vercel.app/";
    innerElements1.setAttribute("src", kanban);
    innerElements2.textContent =
      "A note taking and managining app which includes the authentication page, features like calender to add a particular tasks , bookmarks, notes and kanban(customizable todo app). I have built this project using react , tailwind , nextjs and supabase.";
    header.textContent = "Kanban - task and workflow management system";
    header.classList.add("projects-header");
    addElemToHtml(link, outerdiv, innerElements1, innerElements2, header);
  }
}

function addElemToHtml(link, outerdiv, innerElements1, innerElements2, header) {
  let project = document.getElementById("projects");
  link.appendChild(innerElements1);
  link.appendChild(header);
  outerdiv.appendChild(link);
  outerdiv.appendChild(innerElements2);
  project.appendChild(outerdiv);
}

export { startProcess };
