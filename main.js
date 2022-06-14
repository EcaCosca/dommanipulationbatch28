// console.log("first")

// document.getElementById('header')

// document.querySelector('#header').addEventListener('click', () => {
//     alert('clicked');
//  });

document.getElementsByTagName("h3")[1].innerHTML = "Come right in";

const clickHandler = () => {
    alert('header is clicked');
 }

document.querySelector('#header').addEventListener('click', clickHandler);

// QUERRY SELECTOR STYLE CHANGER EXAMPLE

document.querySelector('#subheader').addEventListener('click',()=>{
    document.querySelector('#subheader').style.fontFamily = 'Tahoma'
})

const sub = document.querySelector('#subheader')

sub.addEventListener('click', ()=>{
    sub.style.textDecoration = 'line-through'
})

document.querySelector('#button').addEventListener('click', ()=>alert("I said no"))
 
const handleButtonClick = () => {
    alert('STOP IT!')
}

// ADD ELEMENT - APPENDCHILD

// GET THE PARENT ELEMENT and store it in a variable for easy manipulation
const list = document.querySelector('#list')

const listItemCreator = () => {
    
    // CREATE A NEW LIST ITEM
    let newListItem = document.createElement('li');
    // change the item innerText
    newListItem.innerText = "Clean";
    // APPEND the new item (child) to the unordered list (parent)
    list.appendChild(newListItem)
}