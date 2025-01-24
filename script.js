const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form data
    const formData = new FormData(contactForm);
    
    try {
        // Send data to the backend
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
        });

        // Check if the response is okay
        if (response.ok) {
            alert('Message sent successfully');
        } else {
            alert('Failed to send the message');
        }

        // Reset the form
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
});
