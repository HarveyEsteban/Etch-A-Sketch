let container = document.querySelector('.container');
let btn = document.querySelector('.btn');



createGrid();




btn.addEventListener('click', ()=>{
    let userInputs = prompt("Enter Grid size");


    if(userInputs > 100)
    {
        alert('Please enter another number form 1 to 100 only!!!');
    }
    else{
        clearGrids();
    
        let newNum = Math.pow(userInputs, 2);
        
        createGrid(newNum, userInputs);
        
    }
});


container.addEventListener('mouseover', (e)=>{
    let target = e.target;
    let r = Math.floor(Math.random()* (255 + 1));
    let g = Math.floor(Math.random()* (255 + 1));
    let b = Math.floor(Math.random()* (255 + 1));

    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


function createGrid(numdivs = Math.pow(16,2), numGrids = 16)
{
    for(let i = 0; i < numdivs; i ++)
    {
        let div = document.createElement('div');
        div.classList.add('smaller-divs');
        div.style.flex = `0 10 calc(100% / ${numGrids})`;
        div.style.height = `calc(100% / ${numGrids})`;
        container.appendChild(div);
        // div.style.flex = `0 1 calc(100% / ${numGrids})`; // 0 flex-grow, 1 flex-shrink, and a calculated width (flex-basis)
        // div.style.height = `calc(100% / ${numGrids})`;   // This is fine for setting the height dynamically
    }
}

function clearGrids()
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}







  
