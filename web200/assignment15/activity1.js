window.addEventListener("DOMContentLoaded", () => {
    const btnAdvantages = document.querySelector('.btn-advantages');
    const btnDisadvantages = document.querySelector('.btn-disadvantages');
    const advantagesList = document.querySelector('.advantages-list');
    const disadvantagesList = document.querySelector('.disadvantages-list');

    btnAdvantages.addEventListener('click', () => {
        if (advantagesList.style.display === 'none' || advantagesList.style.display === '') {
            advantagesList.style.display = 'block';
            btnAdvantages.textContent = 'Hide Advantages';
        } else {
            advantagesList.style.display = 'none';
            btnAdvantages.textContent = 'Show Advantages';
        }
    });

    

    btnDisadvantages.addEventListener('click', () => {
        if (disadvantagesList.style.display === 'none' || disadvantagesList.style.display === '') {
            disadvantagesList.style.display = 'block';
            btnDisadvantages.textContent = 'Hide Disadvantages';
        } else {
            disadvantagesList.style.display = 'none';
            btnDisadvantages.textContent = 'Show Disadvantages';
        }
    });
});
