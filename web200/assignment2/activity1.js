const rate = 20;
const hours = 8;

// calculation salary
const weekly = 20 * 8 * 5;
const monthly = weekly * 4;
const annual = monthly * 12;

// salary formating 
function formatNumber(number) {
    const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formattedNumber;
}

//creating header for activity 1
const activity1Header = document.createElement('h1');
activity1Header.innerText = 'Activity 1';
document.body.appendChild(activity1Header);

// creating paragraph for weekly pay
const weeklyP = document.createElement('p');
weeklyP.innerText = `Weekly - ${formatNumber(weekly)}$`;
document.body.appendChild(weeklyP);

// creating paragraph for monthly pay
const monthlyP = document.createElement('p');
monthlyP.innerText = `Monthly - ${formatNumber(monthly)}$`;
document.body.appendChild(monthlyP);

// creating paragraph for annual pay
const annualP = document.createElement('p');
annualP.innerText = `Annual - ${formatNumber(annual)}$`;
document.body.appendChild(annualP);

//creating link to activity 2
const a = document.createElement('a');
const link = document.createTextNode("Activity 2");
a.appendChild(link);
a.href = "activity2.html";
document.body.appendChild(a);