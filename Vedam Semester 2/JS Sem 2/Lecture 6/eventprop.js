// document.querySelector('#grandparent').addEventListener("click",()=>{
//     console.log("Grandparent Clicked")
// }, false) // Bubbling Phase

// document.querySelector('#parent').addEventListener("click",()=>{
//     console.log("Parent Clicked")
// }, false) // Capturing Phase

// document.querySelector('#child').addEventListener("click",()=>{
//     console.log("Child Clicked")
// }, false) // Bubbling Phase

document.querySelector('#grandparent').addEventListener("click",(e)=>{
    console.log(" Grandparent Clicked!");
}, false) // Capturing Phase

document.querySelector('#parent').addEventListener("click",(e)=>{
    console.log(" Parent Clicked!");
    e.stopPropagation();    
}, false) // Capturing Phase

document.querySelector('#child').addEventListener("click",(e)=>{
    console.log(" Child Clicked!-1");
    e.stopImmediatePropagation();
}, false) // Bubbling Phase

document.querySelector('#child').addEventListener("click",(e)=>{
    console.log(" Child Clicked!-2");
}, false) // Bubbling Phase