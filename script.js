
document.addEventListener('DOMContentLoaded', function () {
    var skipButton = document.getElementById('skip');
    var messagesContainer = document.getElementById('messages');

    function addHyperlinkMessage(url, displayText) {
        var messageElement = document.createElement('p');
        var linkElement = document.createElement('a');
        linkElement.href = url; // Set the hyperlink URL
        linkElement.textContent = displayText; // Set the display text for the link
        linkElement.target = "_blank"; // Open in a new tab/window
      
        // Create the prefix span and set its contents
        var prefixSpan = document.createElement('span');
        prefixSpan.className = "cat-prefix";
        prefixSpan.textContent = "Cat: ";
      
        // Append the prefix span and the link element to the message element
        messageElement.appendChild(prefixSpan);
        messageElement.appendChild(linkElement);
      
        // Finally, append the message element to the container
        messagesContainer.appendChild(messageElement);
      }
      

      var timeouts = []; // Array to hold timeout IDs

      function addWelcomeMessage() {
        // Clear existing messages
        messagesContainer.innerHTML = '';
        
        // Cancel any pending timeouts
        timeouts.forEach(clearTimeout);
        timeouts = []; // Reset the timeouts array
      
        // Add the new message about chatting with a random cat
        var newMessage = document.createElement('p');
        newMessage.textContent = "You're now chatting with a random cat. Say meow!";
        newMessage.style.color = 'grey';
        newMessage.style.fontWeight = 'bold';
        messagesContainer.appendChild(newMessage);
      
        // Function to schedule a hyperlinked message
        function scheduleMessage(url, displayText, delay) {
          var timeoutId = setTimeout(function() {
            addHyperlinkMessage(url, displayText);
          }, delay);
          timeouts.push(timeoutId); // Store the timeout ID
        }
      
        // Schedule hyperlinked messages
        scheduleMessage('https://t.me/+M2RmpWO39Aw2ODlh', 'telegram', 5000 + Math.random() * 2000);
        scheduleMessage('https://twitter.com/OmeowgleOnSol', 'twitter', 5000 + Math.random() * 2000);
        scheduleMessage('https://pump.fun', 'pump.fun', 5000 + Math.random() * 2000);
      }
      

    // Add an event listener for the "click" event on the "Skip" button
    skipButton.addEventListener('click', addWelcomeMessage);

    // Display the welcome message on initial load
    addWelcomeMessage();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.getElementById('send');
    var chatBox = document.getElementById('chat-box');
    var messagesContainer = document.getElementById('messages');
  
    sendButton.addEventListener('click', function () {
      sendMessage();
    });
  
    // Event listener for the Enter key in the chat box
    chatBox.addEventListener('keydown', function (event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault(); // Prevent the default form submission action
        sendMessage();
      }
    });
  
    function sendMessage() {
      var messageText = chatBox.value.trim();
      if (messageText) { // Only proceed if there's text entered
        // User's message
        appendMessage('You:', messageText, 'you-prefix');
  
        // Clear the chat box after sending
        chatBox.value = '';
  
        // Generate and append cat's response with a slight delay
        setTimeout(function() { // Simulate typing delay for cat's response
            var meowCount = getRandomInt(1, 8); // Random number of meows between 1 and 8
            var endings = ['.', '?', '!', '']; // Array of possible endings
            var randomEnding = endings[Math.floor(Math.random() * endings.length)]; // Select a random ending
            var meowText = 'meow '.repeat(meowCount).trim() + randomEnding; // Append the ending to the meow text
            appendMessage('Cat:', meowText, 'cat-prefix');
          }, 500);
      }
    }
  
    // Function to append messages to the chat, with styling based on the prefix
    function appendMessage(prefix, text, className) {
      var messageElement = document.createElement('p');
      messageElement.innerHTML = '<span class="' + className + '">' + prefix + '</span> ' + text;
      messagesContainer.appendChild(messageElement);
    }
  
    // Function to generate a random integer between min and max, inclusive
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    var skipButton = document.getElementById('skip');
    var catCamImage = document.getElementById('catcam');
  
    // Array of .webp cat images
    var catImages = [
        'cats/meow1.webp',
        'cats/meow2.webp',
        'cats/meow3.webp',
        'cats/meow4.webp',
        'cats/meow5.webp',
        'cats/meow6.webp',
        'cats/meow7.webp',
        'cats/meow8.webp',
        'cats/meow9.webp',
        'cats/meow10.webp',
        'cats/meow11.webp',
        'cats/meow12.webp',
        'cats/meow13.webp',
        'cats/meow14.webp',
        'cats/meow15.webp',
        'cats/meow16.webp',
        'cats/meow17.webp',
        'cats/meow18.webp',
        'cats/meow20.webp',
        'cats/meow21.webp',
        'cats/meow22.webp',
        'cats/meow23.webp',
        'cats/meow24.webp',
        'cats/meow25.webp',
        'cats/meow26.webp'
      // Add as many .webp paths as you have
    ];
  
    // Function to shuffle the array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }
  
    // Shuffle the catImages array initially
    shuffleArray(catImages);
  
    function displayRandomCatImage() {
        // Hide the current image
        catCamImage.style.display = "none";
      
        // Set the background color to hide the image and the logo
        catCamImage.style.backgroundColor = "#555555";
      
        // Optionally, if you have a text element to show messages to the user, you can update it
        // For example, if you have an element with the ID 'loadingMessage'
        var loadingMessage = document.getElementById('loadingMessage');
        if (loadingMessage) {
          loadingMessage.textContent = "Looking for a cat...";
          loadingMessage.style.display = 'block'; // Make the message visible
        }
      
        setTimeout(() => {
          // Check if the images array needs to be reset and reshuffled
          if (catImages.length === 0) {
            catImages = [
                'cats/meow1.webp',
                'cats/meow2.webp',
                'cats/meow3.webp',
                'cats/meow4.webp',
                'cats/meow5.webp',
                'cats/meow6.webp',
                'cats/meow7.webp',
                'cats/meow8.webp',
                'cats/meow9.webp',
                'cats/meow10.webp',
                'cats/meow11.webp',
                'cats/meow12.webp',
                'cats/meow13.webp',
                'cats/meow14.webp',
                'cats/meow15.webp',
                'cats/meow16.webp',
                'cats/meow17.webp',
                'cats/meow18.webp',
                'cats/meow20.webp',
                'cats/meow21.webp',
                'cats/meow22.webp',
                'cats/meow23.webp',
                'cats/meow24.webp',
                'cats/meow25.webp',
                'cats/meow26.webp'
            ]
          }
      
          // Preload the next image
          var nextImage = catImages.shift();
          var img = new Image();
          img.onload = function() {
            // When the image is loaded, reset the catCamImage to show the new image
            catCamImage.src = nextImage;
            catCamImage.style.display = "block"; // Show the catCamImage
            catCamImage.style.backgroundColor = ""; // Clear the placeholder background color
            
            // Also hide the loading message now that the image is ready
            if (loadingMessage) {
              loadingMessage.style.display = 'none';
            }
          };
          img.src = nextImage;
        }, 4000); // 4-second delay
      }
      
      // Make sure to add an element with the ID 'loadingMessage' to your HTML to show this text
      

  
    // Display a random cat image when the page loads
    displayRandomCatImage();
  
    // Add an event listener for the "click" event on the "Skip" button
    skipButton.addEventListener('click', function () {
      displayRandomCatImage(); // Display a new random cat image
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var webcamElement = document.getElementById('webcam');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Constraints for the video stream
      var constraints = { video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false };

      // Request access to the webcam
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          // Set the source of the video element to the stream from the webcam
          webcamElement.srcObject = stream;
        })
        .catch(function(error) {
          console.error("Error accessing the webcam", error);
          // Handle the error, e.g., display a message to the user
        });
    } else {
      console.log("getUserMedia not supported by this browser.");
      // Inform the user that webcam access is not supported
    }
  });