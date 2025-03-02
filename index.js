// Write your code here!
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const yourName = "Peter Wainaina";  // You can change this to whatever name you want
const newHeader = document.createElement('h1');
newHeader.id = 'victory';  // Make sure the id is set to 'victory'
newHeader.textContent = `${yourName} is the champion`;  // Ensure the text matches the format
document.body.appendChild(newHeader);
