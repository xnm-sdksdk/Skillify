let number = document.getElementById('number');
let counter = 0;

setInterval (() => {
    if(counter == 65){
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%"; 
    }
}, 20);

const go_up = document.getElementById('go_up');


go_up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

