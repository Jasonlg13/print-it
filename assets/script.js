document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let index = 0
    const imgElement = document.querySelector(".banner-img")
    const textElement = document.querySelector(".banner-text")
    const dotsContainer = document.querySelector(".dots")
    const leftBtn = document.querySelector(".arrow_left")
    const rightBtn = document.querySelector(".arrow_right")

    for (let dotindex = 0; dotindex < slides.length; dotindex++) {
        let dot = document.createElement("div")
        dot.className = "dot"
        dot.addEventListener("click", function () {
            index = dotindex
            dotslide()
        })
        if (dotindex == 0) {
            dot.classList.add("dot_selected")
        } 
        dotsContainer.appendChild(dot)
    }

    function dotslide() {
        let slide = slides[index]
        imgElement.src = "/assets/images/slideshow/" + slide.image
        textElement.innerHTML = slide.tagLine
    
        let dots = document.querySelectorAll(".dot")
        for (let dotindex = 0; dotindex < dots.length; dotindex++) {
            dots[dotindex].classList.remove("dot_selected")
        }
        dots[index].classList.add("dot_selected")
    }

    leftBtn.addEventListener("click", function () {
        index = index - 1
        if (index < 0) {
            index = slides.length - 1
        }
        dotslide()
    })
    
    rightBtn.addEventListener("click", function () {
        index = index + 1
        if (index > slides.length - 1) {
            index = 0;
        }
        dotslide()
    })

    function autoslide() {
        rightBtn.click()
    }
    
    setInterval(autoslide, 5000)

})