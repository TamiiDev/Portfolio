// Proyectos
const listProjects = [
    {
        name: "Heladería Capricci",
        image: "./img/projects/project_1.jpg",
        description: "Página web estática para una heladería ficticia, utilizando los conocimientos que adquirí durante mi curso en Coderhouse.",
        technologies: ["html", "css", "sass", "bootstrap"],
        link: "https://heladeria-capricci.netlify.app",
        deploy: true
    },
    {
        name: "Free Games",
        image: "./img/projects/project_2.jpg",
        description: "Aplicación web que muestra juegos free-to-play, consumiendo la API pública de FreeToGame ",
        technologies: ["c_sharp", "css", "bootstrap", "asp.net"],
        link: "https://github.com/TamiiDev/FreeGames",
        deploy: false
    },
    {
        name: "Dashboard Ventas",
        image: "./img/projects/project_3.jpg",
        description: "Dashboard interactivo para analizar datos relevantes de ventas, productos y desempeño de empleados.",
        technologies: ["c_sharp", "net_core", "entity_framework_core", "sql_server","bootstrap"],
        link: "https://github.com/TamiiDev/Dashboard_Ventas",
        deploy: false
    }
];

const container = document.getElementById("projects-container");

// Recorrer el array y agregar los proyectos al DOM
listProjects.forEach(project => {

const projectCard = document.createElement("div");
projectCard.classList.add("project_card");

const projectTitle = document.createElement("div");
projectTitle.classList.add("project_title");
projectTitle.textContent = project.name;

const projectImage = document.createElement("div");
projectImage.classList.add("project_image");

const img = document.createElement("img");
img.src = project.image;
img.alt = project.name;

projectImage.appendChild(img);

const projectDescription = document.createElement("div");
projectDescription.classList.add("project_description");
projectDescription.textContent = project.description;

const projectTechnologies = document.createElement("div");
projectTechnologies.classList.add("project_technologies");

const technologiesTitle = document.createElement("p");
technologiesTitle.textContent = "Tecnologías:";

const technologies = document.createElement("div");
technologies.classList.add("technologies");

project.technologies.forEach(technology => {
    const img = document.createElement("img");
    img.classList.add("img_technology");
    img.src = `./img/technologies/${technology}.png`;
    img.alt = technology.toUpperCase();
    technologies.appendChild(img);
});

projectTechnologies.appendChild(technologiesTitle);
projectTechnologies.appendChild(technologies);

const projectLink = document.createElement("div");
projectLink.classList.add("project_link");

const btnLink = document.createElement("a");
btnLink.classList.add("btn_link");
btnLink.href = project.link;
btnLink.textContent = project.deploy ? "Ver proyecto" : "Ver repositorio";
btnLink.target = "_blank";

projectLink.appendChild(btnLink);

projectCard.appendChild(projectTitle);
projectCard.appendChild(projectImage);
projectCard.appendChild(projectDescription);
projectCard.appendChild(projectTechnologies);
projectCard.appendChild(projectLink);

container.appendChild(projectCard);
});