const firstTestimonial = document.querySelector(".tanya")
const secondTestimonial = document.querySelector(".john")
const prevBtns = document.querySelectorAll(".prev")
const nextBtns = document.querySelectorAll(".next")

nextBtns.forEach(next => {
    next.addEventListener("click", () => {
        if (secondTestimonial.classList.contains("inactive")) {
            showSecondTestimonial()
        } else {
            showFirstTestimonial()
        }
    })
})

prevBtns.forEach(prev => {
    prev.addEventListener("click", () => {
        if (firstTestimonial.classList.contains("inactive")) {
            showFirstTestimonial()
        } else {
            showSecondTestimonial()
        }
    })
})

document.addEventListener("keydown", e => {
    const keyCode = e.keyCode

    switch (keyCode) {
        case 39:
            if (secondTestimonial.classList.contains("inactive")) {
                showSecondTestimonial()
            } else {
                showFirstTestimonial()
            }
            break;
        case 37:
            if (firstTestimonial.classList.contains("inactive")) {
                showFirstTestimonial()
            } else {
                showSecondTestimonial()
            }
    }
})

function showFirstTestimonial() {
    firstTestimonial.classList.remove("inactive")
    secondTestimonial.classList.add("inactive")
}

function showSecondTestimonial() {
    firstTestimonial.classList.add("inactive")
    secondTestimonial.classList.remove("inactive")
}