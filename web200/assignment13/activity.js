document.addEventListener('DOMContentLoaded', function () {
    // Get references to form elements
    const form = document.querySelector('.form');
    const submitButton = document.querySelector('.btn');

    // Regular expressions for validation
    const nameReg = /^[A-Za-z\s'-]+$/;
    const cityReg = /^[A-Za-z\s'-]+$/;
    const zipReg = /^\d{4,9}$/;
    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneReg = /^\d{10}$/;
    
    // Function to create error message
    const createError = (input, text) => {
        const parent = input.parentNode;
    
        // Check if an error label already exists
        const existingError = parent.querySelector('.labelErr');
        
        if (existingError) {
            // Update the existing error label's text content
            existingError.textContent = text;
        } else {
            // Create a new error label
            const labelErr = document.createElement('label');
            labelErr.textContent = text;
            labelErr.classList.add('labelErr');
            input.classList.add('err');
            parent.append(labelErr);
        }
    }

    // Function to remove error message
    const removeError = (input) => {
        const parent = input.closest('.form-group');
        const labelErr = parent.querySelector('.labelErr');
        if (labelErr) {
            labelErr.remove();
            input.classList.remove('err');
        }
    }

    // Function to validate each input field
    const validateInput = () => {
        let isValid = true;
    
        const fields = [
            { input: document.getElementById('name'), regex: nameReg, errorMessage: 'Invalid name!' },
            { input: document.getElementById('last'), regex: nameReg, errorMessage: 'Invalid last name!' },
            { input: document.getElementById('address'), regex: /.+/, errorMessage: 'Invalid address!' },
            { input: document.getElementById('city'), regex: cityReg, errorMessage: 'Invalid city!' },
            { input: document.getElementById('state'), regex: cityReg, errorMessage: 'Invalid state!' },
            { input: document.getElementById('postal'), regex: zipReg, errorMessage: 'Invalid zip code!' },
            { input: document.getElementById('email'), regex: emailReg, errorMessage: 'Invalid email!' },
            { input: document.getElementById('phone'), regex: phoneReg, errorMessage: 'Invalid phone number!' },
        ];

        fields.forEach(({ input, regex, errorMessage }) => {
            if (!regex.test(input.value)) {
                createError(input, errorMessage);
                isValid = false;
            } else {
                removeError(input);
            }
        });

        return isValid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateInput()) {
            alert('Form submitted successfully!');
            form.reset();
            form.querySelectorAll('input').forEach(input => {
                removeError(input);
            });
        }
    });
});
