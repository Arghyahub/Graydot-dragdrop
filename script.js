const drag = document.querySelectorAll(".drag") ;

const left = document.getElementById("left") ;
const right = document.getElementById("right") ;

drag.forEach((elem) => {
    elem.addEventListener("dragstart", () => {
        elem.classList.add("opac") ;
    })

    elem.addEventListener("dragend", () => {
        elem.classList.remove("opac") ;
    })
});

left.addEventListener('dragover' , e => {
    e.preventDefault() ;
});

left.addEventListener('drop', e => {
    e.preventDefault();
    const dragged = document.querySelector('.opac');
    left.appendChild(dragged);
});

right.addEventListener('dragover' , e => {
    e.preventDefault() ;
});

right.addEventListener('drop', e => {
    e.preventDefault();
    const dragged = document.querySelector('.opac');
    right.appendChild(dragged);
});

const reset = () => {
    console.log("working") ;
    const drag = document.querySelectorAll(".drag") ;
    drag.forEach((elem) => {
        left.appendChild(elem) ;
    })
}