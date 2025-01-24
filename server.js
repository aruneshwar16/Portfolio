const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a POST route to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter (set up with your email provider details)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or other services like Yahoo, Outlook, etc.
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password', // Be careful with credentials!
        },
    });

    // Define the email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Your email
        subject: `Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending message');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
