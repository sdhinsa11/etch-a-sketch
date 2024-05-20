const gridContainer = document.querySelector('.gridcontainer');

for(let i = 0; i <= 15; i++){
    const row_div = document.createElement("div");
    row_div.classList.add("row");

    for (let j = 0; j <= 15; j++)
    {
        const col_div = document.createElement("div");
        col_div.classList.add("grid");
        row_div.appendChild(col_div);
    }
    gridContainer.append(row_div);
}

// create a singular square representing each grid square in css
// use a double for loop and in the first one make the row it belongs to and the second one add the box 
// create a div and then append it to the main one in js 



const gc = document.querySelectorAll('.grid');

gc.forEach(cell => {

    cell.addEventListener('mouseover', ()=>{
        cell.style.backgroundColor = 'blue';
    });
    cell.addEventListener('mouseout', () => {
        setTimeout(() => {
            cell.style.backgroundColor='';
        },500);
    });
});





//Hover Effect
//1. get the element(s)
//2. add event listener mouse over 
// - change the colour 
//3. add event listener mouse under 
//- back to og colour 