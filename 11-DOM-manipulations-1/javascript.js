// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('ptext');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const title = document.createElement('h3');
title.classList.add('titleText');
title.textContent = "I'm a blue h3";
title.style.color = "blue";

const div1 = document.createElement('div');
div1.classList.add('div');
div1.style.cssText = 'background: pink', 'border-width: thick', 'border-color: black';

const titleDiv = document.createElement('h1');
titleDiv.classList.add('divText');
titleDiv.textContent = "I'm in a div";

const paragraph2 = document.createElement('p');
paragraph2.classList.add('ptext2');
paragraph2.textContent = "ME TOO!";
 


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(title);
div1.appendChild(titleDiv);
div1.appendChild(paragraph2);
container.appendChild(div1);