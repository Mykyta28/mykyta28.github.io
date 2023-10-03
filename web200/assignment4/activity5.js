//creating vars for accessing to input elementsn in DOM
const btn = document.querySelector('.btn');
const lengthInp = document.querySelector('.length');
const widthInp = document.querySelector('.width');
const output = document.querySelector('.result');

//func that calc area of the room
function calculateArea(length, width) {

    // Convert feet to yards (1 yard = 3 feet)
    const lengthInYards = length / 3;
    const widthInYards = width / 3;
  
    // Calculate area in square yards
    const areaInSquareYards = lengthInYards * widthInYards;
  
    return areaInSquareYards;
  }

btn.addEventListener('click', () => {
    output.textContent = `The area of the room is ${calculateArea(lengthInp.value, widthInp.value).toFixed(2)} square yards.`;
});
  


