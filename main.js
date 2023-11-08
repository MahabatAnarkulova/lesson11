// 1
// let galaxy = [
//     { title: "солнце", text: "луна" },

// ];
 
// let content = document.getElementById("content");

// galaxy.forEach(function(item){
//     let titleElement = document.createElement("h2");
//     let textElement = document.createElement("p");

//     titleElement.textContent = item.title;
//     textElement.textContent = item.text;

//     content.appendChild(titleElement);
//     content.appendChild(textElement);
// });




// 2
// let element = document.getElementById("element");

//         element.addEventListener("click", function(event) {
//             if (event.ctrlKey) {
//                 element.style.backgroundColor = "red";
//             }
//         });




// 3
// let element = document.getElementById("element");

// element.addEventListener("click", function(event) {
    
//     let textToInsert = "";

//     if (event.ctrlKey) {
//         textToInsert = "1";
//     } else if (event.altKey) {
//         textToInsert = "2";
//     } else if (event.shiftKey) {
//         textToInsert = "3";
//     }

   
//     element.textContent = textToInsert;
// });




// 4
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//     paragraph.addEventListener('click', function() {
//         const number = parseInt(paragraph.textContent, 10);
//         paragraph.textContent = number * number;
//     });
// });




// 5
// const images = document.querySelectorAll('img');
// images.forEach(image => {
//     image.addEventListener('click', function() {
//         console.log(image.src);
//     });
// });




// 6
// const links = document.querySelectorAll('a');
// links.forEach(link => {
//     link.addEventListener('mouseover', function() {
//         link.textContent = link.textContent +  (${link.href});
//     });

//     link.addEventListener('mouseout', function() {
//         link.textContent = link.textContent.replace(/ \(.+\)/, '');
//     });
// });