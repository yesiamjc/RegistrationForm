document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Get input field values
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phone-number").value;
  
      // Create an object with the form data
      const formData = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        phoneNumber: phoneNumber,
      };
  
      // Send a POST request to your server as JSON
      fetch("http://localhost:3000/api/create", {
        method: "POST",
        body: JSON.stringify(formData), // Convert the object to JSON
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          if (data.success) {
            alert("Data Entered Successfully!");
            window.location.href = "./client/thankYou.html";
          } else {
            console.error(data);
            alert("Error Occurred: " + data.message);
          }
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while submitting the form.");
        });
    });
  });
  