window.addEventListener('DOMContentLoaded', () => {
    const allTags = document.getElementsByTagName("*")
    const output = document.querySelector('.output');

    let list = [];

    for(let i = 0; i < allTags.length; i++){
        list.push(allTags[i].tagName)
    }

    output.innerHTML = list.join('<br>')
})
