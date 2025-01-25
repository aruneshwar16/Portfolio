const { JSDOM } = require('jsdom');
const fetch = require('node-fetch'); // Ensure you have this installed
const { URLSearchParams } = require('url');

// Simulate an HTML document with JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body><form id="contactForm" action="https://api.web3forms.com/submit"></form></body></html>');
const document = dom.window.document; // This will give you the 'document' object

const contactForm = document.getElementById('contactForm');

// Simulating form submission event
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page (or submitting in the traditional way)

    // Creating a mock FormData (since FormData is available only in the browser)
    const formData = new URLSearchParams();
    formData.append('name', 'John Doe'); // Example form data
    formData.append('email', 'john.doe@example.com'); // Example form data
    formData.append('message', 'Hello, this is a test message.');

    try {
        // Sending form data to the backend via fetch
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // Handling response
        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.log('Failed to send the message');
        }

    } catch (error) {
        console.error('Error:', error);
    }
});
