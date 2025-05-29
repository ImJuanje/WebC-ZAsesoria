document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    const visibleSlides = 3;
    
    function updateSlider() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            slides.forEach(slide => {
                slide.style.minWidth = '100%';
            });
        } else if (width <= 992) {
            slides.forEach(slide => {
                slide.style.minWidth = '50%';
            });
        } else {
            slides.forEach(slide => {
                slide.style.minWidth = `calc(100% / ${visibleSlides})`;
            });
        }
        
        updateSliderPosition();
    }
    
    function updateSliderPosition() {
        const width = window.innerWidth;
        let slideWidth;
        
        if (width <= 768) {
            slideWidth = 100;
        } else if (width <= 992) {
            slideWidth = 50;
        } else {
            slideWidth = 100 / visibleSlides;
        }
        
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        updateDots();
    }
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slideCount - Math.min(visibleSlides, slideCount);
        } else if (index > slideCount - visibleSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        updateSliderPosition();
    }
    
    function nextSlide() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            goToSlide(currentIndex + 1);
        } else if (width <= 992) {
            goToSlide(currentIndex + 1);
        } else {
            if (currentIndex >= slideCount - visibleSlides) {
                goToSlide(0);
            } else {
                goToSlide(currentIndex + 1);
            }
        }
    }
    
    function prevSlide() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            goToSlide(currentIndex - 1);
        } else if (width <= 992) {
            goToSlide(currentIndex - 1);
        } else {
            if (currentIndex <= 0) {
                goToSlide(slideCount - visibleSlides);
            } else {
                goToSlide(currentIndex - 1);
            }
        }
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    window.addEventListener('resize', updateSlider);
    
    let autoSlide = setInterval(nextSlide, 5000);
    
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    sliderWrapper.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    updateSlider();
    
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'translateY(-10px)';
            slide.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'translateY(0)';
            slide.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});