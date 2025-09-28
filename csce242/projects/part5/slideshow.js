// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slideshow every 5 seconds
const slideInterval = setInterval(nextSlide, 5000);

// Add click functionality to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        
        // Reset the interval when user manually changes slide
        clearInterval(slideInterval);
        setTimeout(() => {
            setInterval(nextSlide, 5000);
        }, 5000);
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const locationInput = document.querySelector('.location-input');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const location = locationInput.value;
            if (location.trim()) {
                alert(`Searching for properties in: ${location}`);
                // Here you would typically redirect to a search results page
                // window.location.href = `listings.html?location=${encodeURIComponent(location)}`;
            } else {
                alert('Please enter a location to search');
            }
        });
    }

    // Allow Enter key to trigger search
    if (locationInput) {
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Add hover effects to listing cards
    const listingCards = document.querySelectorAll('.listing-card');
    listingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Pause slideshow when user hovers over the slideshow area
const slideshowContainer = document.querySelector('.slideshow-container');
let isPaused = false;

if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', function() {
        isPaused = true;
    });

    slideshowContainer.addEventListener('mouseleave', function() {
        isPaused = false;
    });
}

// Modified nextSlide function to respect pause state
function nextSlide() {
    if (!isPaused) {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
}