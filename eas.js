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


//Hover Effect
//1. get the element(s)
//2. add event listener mouse over 
// - change the colour 
//3. add event listener mouse under 
//- back to og colour 

//Generate random colours for each grid 
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function getCharacter(index) {
	return hexCharacters[index]
}
function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	return hexColorRep
}



const gc = document.querySelectorAll('.grid');
gc.forEach(cell => {

    cell.addEventListener('mouseover', ()=>{
        cell.style.backgroundColor = generateNewColor();
    });
    cell.addEventListener('mouseout', () => {
        setTimeout(() => {
            cell.style.backgroundColor='';
        },500);
    });
});




