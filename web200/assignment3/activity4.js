//creating button and shape and making access to DOM elements over th classes
const btn = document.querySelector('.btn');
const shape = document.querySelector('.shape');

//creating input elements
const radius = document.createElement('input');
const length = document.createElement('input');
const width = document.createElement('input');
const base = document.createElement('input');
const height = document.createElement('input');

// calc circle area func
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// calc rect area func
function calculateRectangleArea(length, width) {
    return length * width;
}

//calc triangle area func
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

//event for changing input
shape.addEventListener('change', () => {

    //accesing to Dom element through a class
    const shape = document.querySelector('.shape').value;

    //removing all created inputs by changing main input with ".shape" class 
    radius.remove();
    length.remove();
    width.remove();
    base.remove();
    height.remove();

    //conditions
    if(shape === "circle"){
        //clearing existing element 'p'
        document.querySelector('.p').textContent = '';

        //setting attribute, placeholder and class to input
        radius.setAttribute('type', 'number');
        radius.placeholder = 'Radius...';
        radius.className = 'radius'
        const parent = document.querySelector('.parentDiv');
        parent.appendChild(radius);

        //event by clicking a button
        btn.addEventListener('click', () => {
            if(radius.value > 0){
                document.querySelector('.p').textContent = `Area of the circle is: ${calculateCircleArea(radius.value).toFixed(2)}`   
            } else {
                document.querySelector('.p').textContent = 'Radius must be > 0';
            }
        });

    } else if(shape === 'rectangle'){
        document.querySelector('.p').textContent = '';
        
        length.setAttribute('type', 'number');
        width.setAttribute('type', 'number');
        length.placeholder = 'Length...';
        length.className = 'length';
        width.placeholder = 'Width...';
        width.className = 'width';
        const parent = document.querySelector('.parentDiv');
        parent.appendChild(length);
        parent.appendChild(width);

        btn.addEventListener('click', () => {
            if(length.value > 0 && width.value > 0){
                document.querySelector('.p').textContent = `Area of the rectangle is: ${calculateRectangleArea(length.value, width.value).toFixed(2)}`   
            } else {
                document.querySelector('.p').textContent = 'Lenght and Width must be > 0';
            }
        });

    } else if (shape === 'triangle'){
        document.querySelector('.p').textContent = '';
        
        base.setAttribute('type', 'number');
        height.setAttribute('type', 'number');
        base.placeholder = 'Base...';
        base.className = 'base';
        height.placeholder = 'Height...';
        height.className = 'height';
        const parent = document.querySelector('.parentDiv');
        parent.appendChild(base);
        parent.appendChild(height);

        btn.addEventListener('click', () => {
            if(base.value > 0 && height.value > 0){
                document.querySelector('.p').textContent = `Area of the rectangle is: ${calculateTriangleArea(base.value, height.value).toFixed(2)}`   
            } else {
                document.querySelector('.p').textContent = 'Base and Height must be > 0';
            }
        });
        
    } else {
        document.querySelector('.p').textContent = 'Unrecognized shape';
    }
})