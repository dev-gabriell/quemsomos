//Animação de scroll
const observar = new IntersectionObserver((visual) =>{
    visual.forEach ((obser) =>{
        if(obser.isIntersecting){
            obser.target.classList.add('animacao')
        }
        else{
            obser.target.classList.remove('animacao')
        }
    })
})

let cards = document.querySelectorAll('.hidden');
cards.forEach((element) => observar.observe(element))

//Animação de scroll
const observar2 = new IntersectionObserver((visual) => {
    visual.forEach((obser) => {
        if (obser.isIntersecting) {
            obser.target.classList.add('animacao2');
        } else {
            obser.target.classList.remove('animacao2');
        }
    });
});

let cards2 = document.querySelectorAll('.hidden2');
cards2.forEach((element) => observar2.observe(element));