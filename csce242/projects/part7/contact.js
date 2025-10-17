// contact Form witht he help of W3Schools
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => 
{
    e.preventDefault();

    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = 
    {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try 
    {
        const response = await fetch('https://formsubmit.co/ajax/MBFRealty@email.com', 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) 
        {
            responseMessage.className = 'message success show';
            responseMessage.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
            form.reset();
        } 
        else 
        {
            throw new Error('Failed to send message');
        }
    } 
    catch (error) 
    {
        responseMessage.className = 'message error show';
        responseMessage.textContent = 'Sorry, there was an error sending your message. Please try again or contact us directly at MBFRealty@email.com';
    } 
    finally 
    {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // hide message adter 5 seconds
        setTimeout(() => 
        {
            responseMessage.classList.remove('show');
        }, 5000);
    }
});

// input valid feedback
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
        input.style.borderColor = 'rgba(255, 165, 0, 0.3)';
    });
});