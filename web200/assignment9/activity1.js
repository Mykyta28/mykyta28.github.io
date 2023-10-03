const outputDate = document.querySelector('.date');
const outputTime = document.querySelector('.time');

const dateTime = () => {
    const date = new Date();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    outputDate.textContent = `Today's date is: ${month}/${day}/${year}`;
    outputTime.textContent = `Time: ${hours}:${minutes}:${seconds}`;
};

// Pass the reference to dateTime, don't call it immediately
setInterval(dateTime, 1000);
