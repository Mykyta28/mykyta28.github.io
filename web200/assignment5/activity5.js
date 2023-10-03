const btn = document.querySelector('.btn');
const sizeShooe = document.querySelector('.size');

// btn.addEventListener('click', () => {
//     if(sizeShooe.value > 0 && sizeShooe.value <= 4){
//         document.querySelector('.result').textContent = 'Extra small size of socks';
//     } else if (sizeShooe.value > 4 && sizeShooe.value <= 6){
//         document.querySelector('.result').textContent = 'Small size of socks';
//     } else if(sizeShooe.value > 6 && sizeShooe.value <= 9){
//         document.querySelector('.result').textContent = 'Medium size of socks';
//     } else if (sizeShooe.value > 9 && sizeShooe.value <= 12) {
//         document.querySelector('.result').textContent = 'Large size of socks';
//     } else if (sizeShooe.value >= 13) {
//         document.querySelector('.result').textContent = 'Extra large size of socks';
//     } else {
//         document.querySelector('.result').textContent = 'There is no size like that';
//     }
// });

btn.addEventListener('click', () => {
    const size = parseFloat(sizeShooe.value); // Convert the input value to a number
    let sizeCategory;

    switch (true) {
        case size > 0 && size <= 4:
            sizeCategory = 'Extra small size of socks';
            break;
        case size > 4 && size <= 6:
            sizeCategory = 'Small size of socks';
            break;
        case size > 6 && size <= 9:
            sizeCategory = 'Medium size of socks';
            break;
        case size > 9 && size <= 12:
            sizeCategory = 'Large size of socks';
            break;
        case size >= 13:
            sizeCategory = 'Extra large size of socks';
            break;
        default:
            sizeCategory = 'There is no size like that';
    }

    document.querySelector('.result').textContent = sizeCategory;
    console.log(sizeShooe.value);
});

