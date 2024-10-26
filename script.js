const images = document.querySelector('[data-js-gridContainer-images]');

function activeLeft()
{
    reset();
    let img = images.querySelector('[data-js-images-rightColumn]');
    img.classList.add('hidden');

    images.classList.add('activeLeft');
}

function activeRight()
{
    reset();
    let img = images.querySelector('[data-js-images-leftColumn]');
    img.classList.add('hidden');

    images.classList.add('activeRight');
}


function reset()
{
    Array.from(images.children).forEach((elem) =>{
        elem.classList.remove('hidden');
    })

    images.classList.remove('activeRight');
    images.classList.remove('activeLeft');
}

document.querySelector('[data-js-buttons-rightButton]').addEventListener("click", activeRight);
document.querySelector('[data-js-buttons-middleButton]').addEventListener("click", reset);
document.querySelector('[data-js-buttons-leftButton]').addEventListener("click", activeLeft);
