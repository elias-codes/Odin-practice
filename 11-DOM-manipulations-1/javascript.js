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

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(title);