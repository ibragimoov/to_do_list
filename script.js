'use_strict';

let btn = document.querySelector('#btn'),
    input = document.querySelector('#add'),
    list = document.querySelector('#list'),
    element = document.getElementsByTagName('li');

btn.addEventListener('click', function() {
    let text = input.value;

    if (text == '') {
        alert('Вы не ввели задание');
    } else {
        let newTask = document.createElement('li');

        newTask.innerHTML = text;
        list.insertBefore(newTask, list.childNodes[0]);
        input.value = '';
    }
});

list.addEventListener('click', function(event) {
    if (event.target.tagName == 'LI') {
        console.log('target');
        list.removeChild(event.target);
        // event.target.classList.toggle('closed'); 
    }
});