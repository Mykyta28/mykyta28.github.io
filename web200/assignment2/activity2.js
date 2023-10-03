//my variables
const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const divRes = document.getElementById('res');

//event by clicking button
btn.addEventListener('click', () => {
    
    //parse in float
    const inp = parseFloat(document.getElementById('inp').value); 

    //checking if it's not NaN and value > 0
    if(!isNaN(inp) && inp > 0){
        // Convert to yards, feet, and inches
        const yards = inp * 1760;
        const feet = yards * 3;
        const inches = feet * 12;

        // Convert to kilometers, meters, and centimeters
        const kilometers = inp * 1.60934;
        const meters = kilometers * 1000;
        const centimeters = meters * 100;

        // put paragraph with values in div element
        divRes.innerHTML = `
        <p>Distance in yards: ${yards} yards</p>
        <p>Distance in feet: ${feet} feet</p>
        <p>Distance in inches: ${inches} inches</p>
        <p>Distance in kilometers: ${kilometers} kilometers</p>
        <p>Distance in meters: ${meters} meters</p>
        <p>Distance in centimeters: ${centimeters} centimeters</p>
    `;
    }else{
        // get error paragraph and put some text in there if our condition failed
        document.getElementById('err').textContent = "You have to enter the right amont";
    }
});

// event by changing value inside input
inp.addEventListener('change', () => {
    if(inp.value > 0){
        // clear the error paragraph if value > 0
        document.getElementById('err').textContent = "";
    } else {
        // if value <= 0 then clear the div with the results
        divRes.innerHTML  = ""
    }
})
