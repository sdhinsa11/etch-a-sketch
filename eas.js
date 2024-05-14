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

