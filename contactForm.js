// Get form elements
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

// Function to validate form fields
function validateForm() {
    if (phoneInput.value) {
        sendButton.classList.remove('inactive btn');
        sendButton.classList.add('btn btn-primary');
        sendButton.style.pointerEvents = 'auto'; // Enable the button
    } else {
        sendButton.classList.remove('btn btn-primary');
        sendButton.classList.add('inactive btn');
        sendButton.style.pointerEvents = 'none'; // Disable the button
    }
}

function clearForm() {
    nameInput.value = ''
    phoneInput.value = ''
    messageInput.value = ''
    validateForm()
}

phoneInput.addEventListener('input', validateForm);


document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        to_name: 'NSLF',
        from_name: nameInput.value || 'Anonymous',
        phone_number: phoneInput.value || '000000000',
        message: messageInput.value || 'Details btayi nhi inhone.',
    };

    console.log("Form Data:", formData); // For debugging

    emailjs.init({
        publicKey: 'T5E9PvEEiQazoflut',
    });

    emailjs.send('service_xv7mxx9', 'template_bi40z4z', formData).then(
        function (response) {
            alert('Thanks for Informing, We will get in touch with you shortly.');
            clearForm();
        },
        function (err) {
            console.log('FAILED...', err);
        },
    );

});
