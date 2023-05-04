let grid_container = document.querySelector('.grid');
let color = "red";

let boxSize = document.querySelector("#myRange");
let boxValue = document.querySelector("#sizeBox");
let boxValue2 = document.querySelector("#sizeBox1");

boxValue.innerHTML = boxSize.value;
boxValue2.innerHTML = boxSize.value;
// Update the current slider value (each time you drag the slider handle)
let size = boxSize.value;
let height = 700 / size;
let width = 700 / size;

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
boxSize.oninput = function () {
    boxValue.innerHTML = this.value;
    boxValue2.innerHTML = this.value;

    grid_container.innerHTML = "";

    let size = boxSize.value;
    let height = 700 / size;
    let width = 700 / size;

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
}


function changeColor(e) {

    if (e.target.className != "square") return;

    e.target.style.backgroundColor = color;


}


document.addEventListener('mouseover', changeColor);
