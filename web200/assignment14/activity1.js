window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.form');
    const btn = document.querySelector('.btn');
    const userList = document.getElementById('userList');

    // my fetch dunc which usig GET method to retrieve data
    const fatchData = (e) => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/users';
        
        fetch(url).then(response => {
            if(!response.ok){
                throw new Error('Network response was not okay');
            }
            return response.json();
        }).then(data => {
            console.log(data)
            //userList.innerHTML = JSON.stringify(data, null, 2);  // using div for output retrieved data
        }).then(error => {
            console.error('There was a problem with the fetch operation: ', error)
        }).catch(error => {
            console.error('There was a problem with the fetch operation: ', error);
        });
    } 

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const lastName = document.getElementById('last').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const postalCode = document.getElementById('postal').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const birth = document.getElementById('birth').value;

        const users = {
            name: name,
            lastName: lastName,
            address: address,
            city: city,
            state: state,
            postal: postalCode,
            email: email,
            phone: phone,
            birth: birth
        };

        const url = 'https://jsonplaceholder.typicode.com/users';

        // using fetch with POST method to send data which I put into the form
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users)
        }).then(response => {
            if(!response.ok){
                throw new Error('Network response was not okay');
            }
            return response.json()
        }).then(data => {
            console.log(data)
            fatchData();
        }).catch(error => {
            console.error('There was a problem with the fetch operation: ', error)
        })

        form.reset()
        
    })

    //initialize func whe page os loading
    fatchData();

});