
// Select the form element
const form = document.querySelector('.contact-form');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent default form submission

    const formData = new FormData(form);

    // Send the form data using fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showMessage('Thank you! Your message has been sent.', 'success');
            form.reset();
        } else {
            showMessage('Oops! Something went wrong. Please try again later.', 'error');
        }
    }).catch(error => {
        showMessage('Oops! Something went wrong. Please check your connection.', 'error');
    });
});

// Function to display success or error message
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    document.body.appendChild(messageDiv);

    // Remove the message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
