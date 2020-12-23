const firstTestimonial = document.querySelector(".tanya")
const secondTestimonial = document.querySelector(".john")
const prevBtns = document.querySelectorAll(".prev")
const nextBtns = document.querySelectorAll(".next")

nextBtns.forEach(next => {
    next.addEventListener("click", () => {
        if (secondTestimonial.classList.contains("inactive")) {
            firstTestimonial.classList.add("inactive")
            secondTestimonial.classList.remove("inactive")
        } else {
            firstTestimonial.classList.remove("inactive")
            secondTestimonial.classList.add("inactive")
        }
    })
})

prevBtns.forEach(prev => {
    prev.addEventListener("click", () => {
        if (firstTestimonial.classList.contains("inactive")) {
            firstTestimonial.classList.remove("inactive")
            secondTestimonial.classList.add("inactive")
        } else {
            firstTestimonial.classList.add("inactive")
            secondTestimonial.classList.remove("inactive")
        }
    })
})