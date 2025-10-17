// Contact Form Handling
document.getElementById("contactForm").onsubmit = (event) => 
{
    event.preventDefault();
    
    const result = document.getElementById('responseMessage');
    const submitBtn = event.currentTarget.querySelector('.submit-btn');
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    // disable button 
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // wait amessage
    result.className = 'message show';
    result.style.color = '#f0a500';
    result.innerHTML = "Please wait...";
    
    fetch('https://api.web3forms.com/submit', 
    {
            method: 'POST',
            headers: 
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            body: json
    })
        .then(async (response) => 
        {
            let json = await response.json();
            if (response.status == 200) 
            {
                result.className = 'message success show';
                result.innerHTML = "Thank you! Your message has been sent successfully. We'll get back to you soon.";
                event.currentTarget.reset();
            } 
            else 
            {
                console.log(response);
                result.className = 'message error show';
                result.innerHTML = json.message || "Something went wrong. Please try again.";
            }
        })
        .catch(error => 
        {
            console.log(error);
            result.className = 'message error show';
            result.innerHTML = "Sorry, there was an error sending your message. Please try again or contact us directly at MBFRealty@email.com";
        })
        .then(function() 
        {
            // re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // hide message after 5 seconds
            setTimeout(() => 
            {
                result.classList.remove('show');
            }, 5000);
        });
};

// input validation feedback
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input[required], textarea[required]');
inputs.forEach(input => 
{
    input.addEventListener('invalid', (e) =>
    {
        e.preventDefault();
        input.style.borderColor = '#f44336';
    });

    input.addEventListener('input', () => 
    {
        input.style.borderColor = 'rgba(240, 165, 0, 0.3)';
    });
});