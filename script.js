document.getElementById("add-item-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    var itemName = document.getElementById("item-name").value;
    var itemTime = document.getElementById("item-time").value;
  
    // Create a new schedule item element
    var newItem = document.createElement("div");
    newItem.className = "schedule-item";
    newItem.innerHTML = `
      <div class="item-name">${itemName}</div>
      <div class="item-time">${itemTime}</div>
    `;
  
    // Append the new item to the schedule
    var schedule = document.getElementById("schedule");
    schedule.appendChild(newItem);
  
    // Clear input fields
    document.getElementById("item-name").value = "";
    document.getElementById("item-time").value = "";
  });

  // Check if the Cache API is supported by the browser
if ('caches' in window) {
  // Open or create a new cache
  caches.open('userDataCache').then(function(cache) {
    // Define the URL for the user data
    var userDataUrl = '/api/userdata';

    // Fetch the user data
    fetch(userDataUrl).then(function(response) {
      // Clone the response
      var clonedResponse = response.clone();

      // Cache the response
      cache.put(userDataUrl, clonedResponse);
    });
  });
}

// Check if the Cache API is supported by the browser
if ('caches' in window) {
  // Open the userDataCache
  caches.open('userDataCache').then(function(cache) {
    // Define the URL for the user data
    var userDataUrl = '/api/userdata';

    // Retrieve the cached response for the user data
    cache.match(userDataUrl).then(function(response) {
      if (response) {
        // User data is available in the cache
        response.json().then(function(data) {
          // Process the cached user data
          console.log(data);
        });
      } else {
        // User data is not available in the cache
        console.log('User data not found in cache.');
      }
    });
  });
}

function changeTextColor() {
  // Get the selected color from the color picker input
  var color = document.getElementById("colorPicker").value;

  // Get the text element by its ID
  var textElement = document.getElementById("text");

  // Set the color of the text element
  textElement.style.color = color;
}

    // Get the color picker input element
    var colorPicker = document.getElementById("colorPicker");

    // Attach an event listener to the color picker input
    colorPicker.addEventListener("input", changeTextColor);

    function changeTextColor() {
      // Get the selected color from the color picker
      var color = colorPicker.value;

      // Get all the text elements on the page
      var textElements = document.getElementsByTagName("p");

      // Iterate over each text element and update its color
      for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.color = color;
      }
    }

 // Get the color picker input element
 var colorPicker = document.getElementById("colorPicker");

 // Attach an event listener to the color picker input
 colorPicker.addEventListener("input", changeBackgroundColor);

 function changeBackgroundColor() {
   // Get the selected color from the color picker
   var color = colorPicker.value;

   // Get the element to change the background color (e.g., the body element)
   var element = document.body;

   // Set the background color of the element
   element.style.backgroundColor = color;
 }

 function setCookie(name, value, daysToExpire) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);
  var cookieValue = encodeURIComponent(value) + ((daysToExpire == null) ? '' : '; expires=' + expirationDate.toUTCString());
  document.cookie = name + '=' + cookieValue;
}