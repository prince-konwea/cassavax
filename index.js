// Get references to HTML elements
const imageUpload = document.getElementById('imageUpload');
const imageCanvas = document.getElementById('imageCanvas');
const detectButton = document.getElementById('detectButton');
const resultSection = document.getElementById('resultSection');
const resultText = document.getElementById('resultText');

imageUpload.addEventListener('change', handleImageUpload);
detectButton.addEventListener('click', detectCassavaLeaf);

function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
        // Load and display the selected image on the canvas
        const image = new Image();
        image.onload = () => {
            imageCanvas.width = image.width;
            imageCanvas.height = image.height;
            const ctx = imageCanvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);
            // Enable the "Detect" button
            detectButton.removeAttribute('disabled');
        };
        image.src = URL.createObjectURL(file);
    }
}

function detectCassavaLeaf() {
    // Simulate a hardcoded response (you can customize this)
    const response = {
        detected: true,
        confidence: 0.85,
        message: "Cassava leaf detected with high confidence."
    };

    // Display the results
    displayResults(response);
}

function displayResults(response) {
    resultText.textContent = response.message;
    resultSection.style.display = 'block';

    // Optionally, you can style the result based on the response
    if (response.detected) {
        resultText.style.color = '#27ae60'; // Green color for success
    } else {
        resultText.style.color = '#e74c3c'; // Red color for failure
    }
}
