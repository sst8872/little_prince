// Get the button element
var downloadButton = document.getElementById("downloadButton");

// Define the URL of the download site
var downloadSiteURL = "https://example.com/download-contact-list";

// Add a click event listener to the button
downloadButton.addEventListener("click", function () {
    // Redirect the user to the download site
    window.location.href = downloadSiteURL;
});
