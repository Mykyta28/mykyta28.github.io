"use strict";
// Simply Bank App

//my accounts
const account1 = {
    id: 1,
    userName: "Cecil Ireland",
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
    email: "cecil-i@gmail.com",
    tel: "+1 (224)-345-1121",
    transactionsDates: [
        '2023-12-10T14:43:31.074Z',
        '2023-12-13T11:24:19.761Z',
        '2023-12-14T10:45:23.907Z',
        '2023-01-22T12:17:46.255Z',
        '2023-02-12T15:14:06.486Z',
        '2023-03-09T11:42:26.371Z',
        '2023-10-09T07:43:59.331Z',
        '2023-10-11T15:21:20.814Z',
      ],
      currency: 'USD',
      locale: 'en-US',
};

const account2 = {
    id: 2,
    userName: "Amani Salt",
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
    email: "amani-s@gmail.com",
    tel: "+1 (530)-235-1723",
    transactionsDates: [
        '2023-10-02T14:43:31.074Z',
        '2023-10-29T11:24:19.761Z',
        '2023-11-15T10:45:23.907Z',
        '2023-01-22T12:17:46.255Z',
        '2023-02-12T15:14:06.486Z',
        '2023-03-09T11:42:26.371Z',
        '2023-05-21T07:43:59.331Z',
        '2023-06-22T15:21:20.814Z',
      ],
      currency: 'UAH',
      locale: 'uk-UA',
};

const account3 = {
    id: 3,
    userName: "Corey Martinez",
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
    email: "corey-m@hotmail.com",
    tel: "+1 (847)-903-7465",
    transactionsDates: [
        '2023-10-02T14:43:31.074Z',
        '2023-10-29T11:24:19.761Z',
        '2023-11-15T10:45:23.907Z',
        '2023-01-22T12:17:46.255Z',
        '2023-02-12T15:14:06.486Z',
        '2023-03-09T11:42:26.371Z',
        '2023-05-21T07:43:59.331Z',
        '2023-06-22T15:21:20.814Z',
      ],
      currency: 'RUB',
      locale: 'ru-RU',
};

const account4 = {
    id: 4,
    userName: "Kamile Searle",
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
    email: "kamile-s@gmail.com",
    tel: "+1 (847)-000-1234",
    transactionsDates: [
        '2023-10-02T14:43:31.074Z',
        '2023-10-29T11:24:19.761Z',
        '2023-11-15T10:45:23.907Z',
        '2023-01-22T12:17:46.255Z',
        '2023-02-12T15:14:06.486Z',
      ],
      currency: 'EUR',
      locale: 'fr-CA',
};

const account5 = {
    id: 5,
    userName: "Oliver Avila",
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
    email: "oliver-a@gmail.com",
    tel: "+1 (224)-475-7632",
    transactionsDates: [
        '2023-10-02T14:43:31.074Z',
        '2023-10-29T11:24:19.761Z',
        '2023-11-15T10:45:23.907Z',
        '2023-01-22T12:17:46.255Z',
        '2023-02-12T15:14:06.486Z',
      ],
      currency: 'USD',
      locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];
//----------------------------------------------------------------

// All elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".total__value--in");
const labelSumOut = document.querySelector(".total__value--out");
const labelSumInterest = document.querySelector(".total__value--interest");
const labelTimer = document.querySelector(".timer");

const formLogIn = document.querySelector(".login"); //log in form

const containerApp = document.querySelector(".app"); //main container of the app
const containerRegister = document.querySelector(".register"); // registration container
const containerTransactions = document.querySelector(".transactions"); //transaction container

const btnRegister = document.querySelector(".btn-register"); // button to register new user
const btnLogout = document.querySelector(".log-out"); // button to log out from the app
const btnSignup = document.querySelector(".sign-up"); // button to open/display registration form
const logSignButtons = document.querySelector(".login-buttons"); // group of log in and sign up buttons
const buttonLogin = document.querySelector(".log-in"); // button to open/display lof in form
const btnLogin = document.querySelector(".login__btn"); // button to enter to the app
const btnTransfer = document.querySelector(".form__btn--transfer"); //button to transfer the money from user to user
const btnLoan = document.querySelector(".form__btn--loan"); // button to take a loan from the bank
const btnClose = document.querySelector(".form__btn--close"); // button to close account
const btnSort = document.querySelector(".btn--sort"); // button to sort transactions

const inputLoginUsername = document.querySelector(".login__input--user"); //input for user which is first letter of the first and last name
const inputLoginPin = document.querySelector(".login__input--pin"); // input for the pin code to enter the account
const inputTransferTo = document.querySelector(".form__input--to"); // input for transfer money to user
const inputTransferAmount = document.querySelector(".form__input--amount"); // input anount of the transferred money
const inputLoanAmount = document.querySelector(".form__input--loan-amount"); //input for taking loan from the bank
const inputCloseUsername = document.querySelector(".form__input--user"); // input for close account -> username
const inputClosePin = document.querySelector(".form__input--pin"); //input for close account -> pin code

//const transactionDate = document.querySelector(".transactions__date"); // transaction date

const registrationContainer = document.querySelector('.register'); // registration section
const formRegistration = document.querySelector(".registration-form"); // my registration form
const inputs = formRegistration.querySelectorAll("input"); // my registration inputs form

const greeting = document.querySelector("h1"); // greetings when you open the app

const infoButton = document.querySelector(".info-button"); // info button let you know information of the user
const infoModalWindow = document.querySelector(".info-modal"); // modal window for user infomation
const successModalWindow = document.querySelector(".success-modal"); // modal window for user infomation
const closeInfoSpan = document.querySelector(".info-close"); // X for close modal window
const closeSuccessSpan = document.querySelector(".success-close"); // X for close modal window

//additional vars for operations with properties to display the information of the user
const firstName = document.querySelector(".name");
const lastName = document.querySelector(".lastName");
const userInterest = document.querySelector(".interest");
const userEmail = document.querySelector(".email");
const userTel = document.querySelector(".tel");
const success = document.querySelector('.success');


//All my functions

//create nicknames to login, logout, delete account and different munipulations
const createNickNames = (accs) => {
    accs.forEach((acc) => {
        acc.nickname = acc.userName
            .toLowerCase()
            .split(" ")
            .map((word) => word[0])
            .join("");
    });
};
createNickNames(accounts);
//---------------------------------------------------------------------------

//Date
const formattedDate = (date, locale) => {
    
    const getAmountOfDayTransactions = (date1, date2) => {
        return Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)))
    }

    const dayPassed = getAmountOfDayTransactions(new Date(), date);

    if(dayPassed === 0){
        return 'Today'
    }
    if(dayPassed === 1){
        return 'Yestarday'
    }
    if(dayPassed <= 5){
        return `${dayPassed} days ago`
    }

    return Intl.DateTimeFormat(locale).format(date)
}
//---------------------------------------------------------------------------

//displaying transactions
const displayTransactions = (account, sort = false) => {

    containerTransactions.innerHTML = "";

    const transacs = sort
        ? account.transactions.slice().sort((x, y) => x - y)
        : account.transactions;

    transacs.forEach((trans, index) => {
        const transType = trans > 0 ? "deposit" : "withdrawal";

        const date = new Date(account.transactionsDates[index])
        
        const tansDate = formattedDate(date, account.locale)

        const transactionRow = `
        <div class="transactions__row">
          <div class="transactions__type transactions__type--${transType}">
            ${index + 1} ${transType}
          </div>
          <div class="transactions__date">${tansDate}</div>
          
          <div class="transactions__value">${trans}$</div>
        </div>
    `;

        containerTransactions.insertAdjacentHTML("afterbegin", transactionRow);
    });
};
//----------------------------------------------------------------------------

//displayig balance
const displayBalance = (account) => {
    const balance = account.transactions.reduce((acc, current) => {
        return acc + current;
    }, 0);
    account.balance = balance;
    labelBalance.textContent = `${balance}$`;
};
//----------------------------------------------------------------------------

//displaying total amount
const displayTotal = (account) => {
    const deposits = account.transactions
        .filter((trans) => trans > 0)
        .reduce((acc, current) => acc + current, 0);
    labelSumIn.textContent = `${deposits}$`;

    const withdrawals = account.transactions
        .filter((trans) => trans < 0)
        .reduce((acc, current) => acc + current, 0);
    labelSumOut.textContent = `${withdrawals}$`;

    const interest = account.transactions
        .filter((trans) => trans > 0)
        .map((deposit) => (deposit * account.interest) / 100)
        .filter((interest) => interest >= 5)
        .reduce((acc, current) => acc + current);
    labelSumInterest.textContent = `${interest}$`;
};
//-----------------------------------------------------------------------------

const transferMoney = () => {
    const transferAmount = Number(inputTransferAmount.value);
    const recipientNickname = inputTransferTo.value;
    const recipientAccount = accounts.find(
        (account) => account.nickname === recipientNickname
    );

    if (
        transferAmount > 0 &&
        currentAccount.balance >= transferAmount &&
        recipientAccount &&
        currentAccount.nickname !== recipientAccount.nickname
    ) {
        currentAccount.transactions.push(-transferAmount);
        recipientAccount.transactions.push(transferAmount);

        currentAccount.transactionsDates.push(new Date().toISOString());
        recipientAccount.transactionsDates.push(new Date().toISOString());

        // Update the transactions in localStorage for both accounts
        localStorage.setItem("loggedInUser", JSON.stringify(currentAccount));

        const recipientAccountIndex = accounts.findIndex(
            (account) => account.nickname === recipientAccount.nickname
        );
        accounts[recipientAccountIndex] = recipientAccount;
        localStorage.setItem(
            `user_${recipientAccount.id}`,
            JSON.stringify(recipientAccount)
        );

        updateUI(currentAccount);
    }

    inputTransferTo.value = "";
    inputTransferAmount.value = "";
};

//Taking loan func
const takeLoan = () => {
    const loanAmount = Number(inputLoanAmount.value);

    if (
        loanAmount > 0 &&
        currentAccount.transactions.some((trans) => trans >= loanAmount * 0.1)
    ) {
        currentAccount.transactions.push(loanAmount);
        currentAccount.transactionsDates.push(new Date().toISOString())

        // Update the transactions in localStorage for the current account
        localStorage.setItem("loggedInUser", JSON.stringify(currentAccount));

        updateUI(currentAccount);
    }

    inputLoanAmount.value = "";
};

//Updating UI
const updateUI = (account) => {
    displayTransactions(account);
    displayBalance(account);
    displayTotal(account);
};
//-----------------------------------------------------------------------------

// authorization
function auth() {
    containerApp.style.display = "grid";
    formLogIn.style.display = "none";
    logSignButtons.style.display = "none";
    btnLogout.style.display = "flex";

    labelWelcome.textContent = `Welcome, ${
        currentAccount.userName.split(" ")[0]
    }! Glad to see you again!`;
    labelWelcome.style.width = "auto";
    labelWelcome.style.backgroundImage = "none";
    labelWelcome.style.fontFamily = "auto";
    labelWelcome.style.border = "none";

    labelBalance.style.color = "white";
    greeting.style.display = "none";
}

//global var to get access to current account
let currentAccount = JSON.parse(localStorage.getItem("loggedInUser"));
if (currentAccount) {
    auth();
    displayTransactions(currentAccount);
    displayBalance(currentAccount);
    displayTotal(currentAccount);
    takeLoan();
    transferMoney();
}

// Getting regEx
const getRegExPattern = (inputID) => {
    const regExPatterns = {
        firstName: /^[a-zA-Z]{2,30}$/,
        lastName: /^[a-zA-Z]{2,30}$/,
        dob: /^\d{2}-\d{2}-\d{4}$/,
        city: /^[a-zA-Z\s]{2,50}$/,
        address: /^[a-zA-Z0-9\s]{5,100}$/,
        phone: /^\+?[1-9]\d{1,14}$/,
        email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
        password:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
    };
    return regExPatterns[inputID] || "";
};

// Function to add green border for valid input fields
const addGreenBorder = (input) => {
    input.style.border = "1px solid green";
};

// Function to remove any applied border styles
const removeBorder = (input) => {
    input.style.border = "";
};

// creating error for invalid fields
const errorMessage = (input, message) => {
    const formInput = input.parentElement;
    const errMessage = formInput.querySelector(".error-message");
    errMessage.textContent = message;
    errMessage.style.color = "red";
    errMessage.style.display = "block";
};

//const upper case for first letter
const upperCaseLetter = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// close info modal window
const closeInfoModal = () => {
    infoModalWindow.style.display = "none";
};

// close info modal window
const closeSuccessModal = () => {
    successModalWindow.style.display = "none";
};

// My events

// On click "Log In" button open log in form
buttonLogin.addEventListener("click", () => {
    formLogIn.style.display = "flex";
    inputLoginUsername.focus()
});

// Enter to the app
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.nickname === inputLoginUsername.value
    );
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        localStorage.setItem("loggedInUser", JSON.stringify(currentAccount));
        auth();

        inputLoginUsername.value = "";
        inputLoginPin.value = "";
        inputLoginPin.blur();

        //Getting today's date
        const todayDate = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }
        
        labelDate.textContent = Intl.DateTimeFormat(currentAccount.locale, options).format(todayDate);

        updateUI(currentAccount);

        document.querySelector(".login__input--user").style.border = "";
        document.querySelector(".login__input--pin").style.border = "";
    } else if (currentAccount) {
        // Correct username but wrong password
        document.querySelector(".login__input--pin").style.border =
            "solid 1px red";
        document.querySelector(".login__input--user").style.border = "none"; // Clear potential border on username input
    } else {
        // Incorrect username
        document.querySelector(".login__input--user").style.border =
            "solid 1px red";
        document.querySelector(".login__input--pin").style.border = "none"; // Clear potential border on pin input
    }
});
//----------------------------------------------------------------------------

// On click "Log Out" hide everything and delete account from local storage
btnLogout.addEventListener("click", () => {
    btnLogout.style.display = "none";
    containerApp.style.display = "none";
    labelWelcome.textContent = "Simple";
    labelWelcome.style.border = "solid 1px white"
    labelWelcome.style.backgroundImage =
        "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)";
    labelWelcome.style.width = "150px";
    labelWelcome.style.fontFamily = "cursive";
    logSignButtons.style.display = "flex";
    greeting.style.display = "block";
    currentAccount = null;
    localStorage.removeItem("loggedInUser");
});
//------------------------------------------------------------------

//Transfer functionalety button
btnTransfer.addEventListener("click", (e) => {
    e.preventDefault();
    transferMoney();
});
//----------------------------------------------------------------------------

//Taking Loan button
btnLoan.addEventListener("click", (e) => {
    e.preventDefault();
    takeLoan();
});
//--------------------------------------------------------------------------

//Close account, delede account
btnClose.addEventListener("click", (e) => {
    e.preventDefault();

    const nicknameConfirmation = inputCloseUsername.value;
    const pinConfirmation = Number(inputClosePin.value);
    if (
        currentAccount.nickname === nicknameConfirmation &&
        currentAccount.pin === pinConfirmation
    ) {
        const currentAccountIndex = accounts.findIndex(
            (account) => account.nickname === currentAccount.nickname
        );
        accounts.splice(currentAccountIndex, 1);
        containerApp.style.display = "none";
        labelWelcome.textContent = "Simple";
        labelWelcome.style.border = "solid 1px white"
        labelWelcome.style.backgroundImage =
        "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)";
        labelWelcome.style.width = "150px";
        labelWelcome.style.fontFamily = "cursive";
        btnLogout.style.display = "none";
        logSignButtons.style.display = "flex";
        greeting.style.display = "block";
        inputCloseUsername.value = "";
        inputClosePin.value = "";
    }
});
//---------------------------------------------------------------------------

// sort transactions
let sorted = false;
btnSort.addEventListener("click", (e) => {
    e.preventDefault();

    sorted = !sorted;
    displayTransactions(currentAccount, !sorted);
});
//--------------------------------------------------------------------------

//registration form
btnSignup.addEventListener("click", (e) => {
    e.preventDefault();

    containerRegister.style.display = "block";
    formLogIn.style.display = "none";
    greeting.style.display = "none";
});
//-----------------------------------------------------------------------------

//On click "Log in" button hide registration form and open log in form
buttonLogin.addEventListener("click", () => {
    containerRegister.style.display = "none";
});


// const userRegistration = () => {
//     const formInputs = inputs;
//     let formFilled = true;

//     formInputs.forEach((input) => {
//         if (input.value.trim() === '') {
//             formFilled = false;
//         }
//     });

//     if (formFilled) {
//         const url = "http://localhost/api/users";

//         fetch(url, {
//             method: "POST",
//             body: new URLSearchParams(new FormData(formRegistration)),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not okay");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             console.log("successful registration!");
//             // Display success message or modal here
//             successModalWindow.style.display = "block";
//             registrationContainer.style.display = 'none';
//         })
//         .catch((error) => {
//             console.error("There was a problem with the fetch operation: ", error);
//         });
//     } else {
//         // Display a message indicating that all fields need to be filled out
//         console.log("Please fill out all fields");
//     }
// };

// /**
//  * User registration via AJAX
//  * @param {number} id
//  * @param {number} summ
//  */
// const userTransferMoney = (id, summ) => {
//     const url = `http://localhost/transaction/${id}`;

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ summ }),
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not okay");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             console.log("successful registration!");
//         })
//         .catch((error) => {
//             console.error(
//                 "There was a problem with the fetch operation: ",
//                 error
//             );
//         });
// };

formRegistration.addEventListener("submit", (e) => {
    e.preventDefault();

    let formFilled = true; 

    inputs.forEach((input) => {
        const value = input.value.trim();
        const regExPattern = getRegExPattern(input.id);

        if (value === "") {
            input.style.border = "1px solid red";
            errorMessage(input, `${upperCaseLetter(input)} cannot be empty`);
            formFilled = false; // If any field is empty, set formFilled to false
        } else if (regExPattern) {
            const regex = new RegExp(regExPattern);
            if (!regex.test(value)) {
                input.style.border = "1px solid red";
                errorMessage(input, `${upperCaseLetter(input)} is invalid`);
                formFilled = false; // If any field fails validation, set formFilled to false
            } else {
                removeBorder(input);
            }
        }
    });

    if (formFilled) {
        // If form is completely filled and valid, show the success modal and reset the form
        containerRegister.style.display = 'none';
        successModalWindow.style.display = 'block';
        formRegistration.reset();
    } else {
        // If form is not completely filled or has errors, do not show the success modal
        console.log("Form has errors or is incomplete. Please check all fields.");
    }

    // User registration logic (if applicable) can be placed here
});


//Check validation by clicking on register button
// formRegistration.addEventListener("submit", (e) => {
//     e.preventDefault();

//     inputs.forEach((input) => {
//         const value = input.value.trim();
//         const regExPattern = getRegExPattern(input.id);

//         let valid = false;

//         if (value === "") {
//             input.style.border = "1px solid red";
//             errorMessage(input, `${upperCaseLetter(input)} cannot be empty`);
//             valid = false;
//         } else if (regExPattern) {
//             const regex = new RegExp(regExPattern);
//             if (!regex.test(value)) {
//                 input.style.border = "1px solid red";
//                 errorMessage(input, `${upperCaseLetter(input)} is invalid`);
//                 valid = false;
//             } else {
//                 input.style.border = "";
//                 if (
//                     document.getElementById("password").value ===
//                     document.getElementById("confirmPassword").value
//                 ) {
//                     input.style.border = "1px solid green";
//                     console.log("matches");
//                 } else {
//                     console.log("do not matches");
//                     input.style.border = "1px solid red";
//                 }
//             }
//         } else {
//             removeBorder(input);
//         }
//     });
//     //userRegistration();
//     formRegistration.reset();
// });

// Event listeners for input fields
inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        e.preventDefault();
        const value = input.value.trim();
        const regExPattern = getRegExPattern(input.id);

        if (input.type === "checkbox") {
            if (!input.checked) {
                input.style.outline = "1px solid red";
                errorMessage(input, `Please accept ${upperCaseLetter(input)}`);
            } else {
                input.style.outline = "";
                errorMessage(input, "");
            }
        } else if (value === "") {
            input.style.border = "";
            removeBorder(input);
            errorMessage(input, `${upperCaseLetter(input)} cannot be empty`);
        } else if (input.id === "birthdate" || input.id === "phoneNumber") {
            const regex = new RegExp(regExPattern);
            if (regex.test(value)) {
                input.style.border = "";
                removeBorder(input);
                errorMessage(input, ""); // Clear error message for valid input
            } else {
                input.style.border = "1px solid red";
                errorMessage(input, `${upperCaseLetter(input)} is invalid`);
            }
        } else if (input.id === "confirmPassword") {
            if (
                document.getElementById("password").value ===
                document.getElementById("confirmPassword").value
            ) {
                input.style.border = "";
                removeBorder(input);
                errorMessage(input, ""); // Clear error message for valid input
            } else {
                input.style.border = "1px solid red";
                errorMessage(input, `Passwords do not match`);
            }
        } else if (regExPattern) {
            const regex = new RegExp(regExPattern);
            if (regex.test(value)) {
                input.style.border = "";
                removeBorder(input);
                errorMessage(input, "");
            } else {
                input.style.border = "1px solid red";
                errorMessage(input, `${upperCaseLetter(input)} is invalid`);
            }
        }
    });
});

//btn info
infoButton.addEventListener("click", () => {
    infoModalWindow.style.display = "block";

    let first = `First Name: ${currentAccount.userName.split(" ").slice(0, 1)}`;
    let last = `Last Name: ${currentAccount.userName.split(" ").slice(1, 2)}`;
    let email = `Email: ${currentAccount.email}`;
    let tel = `Tel: ${currentAccount.tel}`;
    let interest = `Interest: ${currentAccount.interest}`;
    firstName.textContent = first;
    lastName.textContent = last;
    userEmail.textContent = email;
    userTel.textContent = tel;
    userInterest.textContent = interest;
    success.style.display = 'none';
});

// On click "X" close modal window
closeInfoSpan.addEventListener("click", () => {
    closeInfoModal();
});

// On click "X" close modal window
closeSuccessSpan.addEventListener("click", () => {
    closeSuccessModal();
});

//On clicking outside the modal window it close the modal window
window.addEventListener("click", (e) => {
    if (e.target === infoModalWindow) {
        closeInfoModal();
    }

    if (e.target === successModalWindow) {
        closeSuccessModal();
    }
});
