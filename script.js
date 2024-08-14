const box = document.querySelector(".box");
const input = document.getElementById('dimensions');
const button = document.getElementById('sizeButton');
const rainbow = document.getElementById('rainbowButton');
const rainbowText = document.getElementById('rainbowButtonText');

let dim;

button.addEventListener("click", () =>{
    dim = input.value;
    box.replaceChildren();
    boxCreator(dim);
});


function boxCreator(dim){
    for(let i = 0; i < dim; i++){
        for(let j = 0; j < dim; j++){
            var cell = document.createElement("div");
            cell.classList.add("cell");
    
            cell.style.maxHeight =600/dim + "px"; 
            cell.style.minHeight =600/dim + "px"; 
            cell.style.maxWidth =600/dim + "px";  
            cell.style.minWidth =600/dim + "px"; 
            
            box.appendChild(cell);
    
        }
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) =>{
        let isPressed = 0;

        box.addEventListener("mousedown", function(event){
            isPressed++;
        });
        box.addEventListener("mouseup", function(event){
            isPressed++;
        });

        cell.addEventListener("mouseenter", () =>{
            if(isPressed%2 == 1)
            {
                if(buttonPressed % 2 == 1)
                {
                    cell.style.backgroundColor = randomColor();
                    cell.style.border = "0px";  
                }
                else
                {
                    cell.style.backgroundColor = "red";
                    cell.style.border = "0px"; 
                }
            }
              
        });
    })

}

function randomColor()
{
    const letters = "ABCDEF0123456789";
    let color = "#";

    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let buttonPressed = 0;

rainbow.addEventListener("click", () =>{
    buttonPressed++;
    if(buttonPressed % 2 == 1)
        rainbowText.textContent = "Rainbow Mode On";
    else
        rainbowText.textContent = "Rainbow Mode Off";
});


