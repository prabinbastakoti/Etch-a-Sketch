let grid_container = document.querySelector('.grid');

let size = 16;
let height = 700 / size;
let width = 700 / size;
let color = "red";

for (let i = 0; i < size; i++) {

    let container_row = document.createElement("div");
    container_row.className = "row";


    for (let j = 0; j < size; j++) {

        let divs = document.createElement("div");
        divs.className = "square";
        
        // size of each individual square divs
        divs.style.height = `${height}px`;
        divs.style.width = `${width}px`;

        container_row.appendChild(divs);

    }
    grid_container.appendChild(container_row);
}



function changeColor(e) {

    if (e.target.className != "square") return;

    e.target.style.backgroundColor = color;


}
document.addEventListener('mouseover', changeColor);
