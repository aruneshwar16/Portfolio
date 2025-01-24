const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aruneshwar.em2023it@sece.ac.in',
        pass: 'seceit@2023',  // Use an app-specific password if 2FA is enabled
    },
});

const mailOptions = {
    from: 'aruneshwar.em2023it@sece.ac.in',  // Your email
    to: 'your-email@gmail.com',  // Your recipient email address
    subject: 'Test Email',
    text: 'This is a test email.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error); // Log error details
    } else {
        console.log('Email sent: ' + info.response);  // Log success response
    }
});
