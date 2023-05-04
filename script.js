let grid_container = document.querySelector('.container');

let row = 16;
let column = 16;
let color = "red";

for (let i = 0; i < row; i++) {

    let container_row = document.createElement("div");


    for (let j = 0; j < column; j++) {

        let divs = document.createElement("div");
        divs.className = "square";
        container_row.appendChild(divs);

    }
    grid_container.appendChild(container_row);
}


function changeColor(e) {

    if (e.target.className != "square") return;

    e.target.style.backgroundColor = color;


}

document.addEventListener('mouseover', changeColor);

