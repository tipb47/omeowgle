document.addEventListener('DOMContentLoaded', function () {
    var skipButton = document.getElementById('skip');
    var messagesContainer = document.getElementById('messages');
    var sendButton = document.getElementById('send');
    var chatBox = document.getElementById('chat-box');
    var catCamImage = document.getElementById('catcam');
    var webcamElement = document.getElementById('webcam');
    var loadingMessage = document.getElementById('loadingMessage');
    var timeouts = []; // Array to hold timeout IDs

    // Shuffle function for the cat images
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Array of .webp cat images
    var catImages = [
        'cats/meow1.webp', 'cats/meow2.webp', 'cats/meow3.webp', 'cats/meow4.webp',
        'cats/meow5.webp', 'cats/meow6.webp', 'cats/meow7.webp', 'cats/meow8.webp',
        'cats/meow9.webp', 'cats/meow10.webp', 'cats/meow11.webp', 'cats/meow12.webp',
        'cats/meow13.webp', 'cats/meow14.webp', 'cats/meow15.webp', 'cats/meow16.webp',
        'cats/meow17.webp', 'cats/meow18.webp', 'cats/meow20.webp', 'cats/meow21.webp',
        'cats/meow22.webp', 'cats/meow23.webp', 'cats/meow24.webp', 'cats/meow25.webp',
        'cats/meow26.webp'
    ];

    shuffleArray(catImages); // Shuffle the images initially

    // Function to display a random cat image
    function displayRandomCatImage() {
        catCamImage.style.display = "none";
        catCamImage.style.backgroundColor = "#555555";
        if (loadingMessage) {
            loadingMessage.textContent = "Looking for a cat...";
            loadingMessage.style.display = 'block';
        }
        
        setTimeout(() => {
            if (catImages.length === 0) {
                shuffleArray(catImages);
            }
            var nextImage = catImages.shift();
            var img = new Image();
            img.onload = function() {
                catCamImage.src = nextImage;
                catCamImage.style.display = "block";
                catCamImage.style.backgroundColor = "";
                if (loadingMessage) {
                    loadingMessage.style.display = 'none';
                }
            };
            img.src = nextImage;
        }, 4000);
    }

    function addWelcomeMessage() {
        messagesContainer.innerHTML = '';
        timeouts.forEach(clearTimeout);
        timeouts = [];
        
        var newMessage = document.createElement('p');
        newMessage.textContent = "You're now chatting with a random cat. Say meow!";
        newMessage.style.color = 'grey';
        newMessage.style.fontWeight = 'bold';
        messagesContainer.appendChild(newMessage);
    }

    function sendMessage() {
        var messageText = chatBox.value.trim();
        if (messageText) {
            appendMessage('You:', messageText, 'you-prefix');
            chatBox.value = '';
            setTimeout(function() {
                var meowCount = getRandomInt(1, 8);
                var endings = ['.', '?', '!', ''];
                var randomEnding = endings[Math.floor(Math.random() * endings.length)];
                var meowText = 'meow '.repeat(meowCount).trim() + randomEnding;
                appendMessage('Cat:', meowText, 'cat-prefix');
            }, 500);
        }
    }

    function appendMessage(prefix, text, className) {
        var messageElement = document.createElement('p');
        messageElement.innerHTML = '<span class="' + className + '">' + prefix + '</span> ' + text;
        messagesContainer.appendChild(messageElement);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Event Listeners
    skipButton.addEventListener('click', function () {
        addWelcomeMessage();
        displayRandomCatImage();
    });

    sendButton.addEventListener('click', sendMessage);

    chatBox.addEventListener('keydown', function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    });

    // Display a random cat image on initial load
    displayRandomCatImage();
    addWelcomeMessage();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        var constraints = { video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                webcamElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error("Error accessing the webcam", error);
            });
    } else {
        console.log("getUserMedia not supported by this browser.");
    }
});
