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
 