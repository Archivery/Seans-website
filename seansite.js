function adjustH3FontSizeOnScroll() {
    // Get all h3 elements
    const h3Elements = document.querySelectorAll('h3');

    // Determine the viewport's height
    const viewportHeight = window.innerHeight;

    // Calculate the thresholds for the first 10% and the last 10% of the viewport height
    const shrinkStartTop = viewportHeight * 0.1;
    const shrinkStartBottom = viewportHeight * 0.9;

    // Iterate over each h3 element
    h3Elements.forEach((h3) => {
        // Get the bounding rectangle of the element
        const rect = h3.getBoundingClientRect();
        // Calculate the element's top and bottom position relative to the viewport
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // Determine the default and minimum font sizes
        const defaultFontSize = 4; // Adjust the default (larger) font size as needed
        const minFontSize = 2; // Adjust the minimum (smaller) font size as needed

        let fontSize = defaultFontSize; // Start with the default font size

        // Check if the element is within the first 10% of the viewport
        if (elementTop < shrinkStartTop) {
            let ratio = elementTop / shrinkStartTop;
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        } 
        // Check if the element is within the last 10% of the viewport
        else if (elementBottom > shrinkStartBottom) {
            let ratio = (viewportHeight - elementBottom) / (viewportHeight - shrinkStartBottom);
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        }

        // Apply the calculated font size to the h3 element
        h3.style.fontSize = `${fontSize}vw`;
    });
}

function adjusth4FontSizeOnScroll() {
    // Get all h3 elements
    const h4Elements = document.querySelectorAll('h4');

    // Determine the viewport's height
    const viewportHeight = window.innerHeight;

    // Calculate the thresholds for the first 10% and the last 10% of the viewport height
    const shrinkStartTop = viewportHeight * 0.1;
    const shrinkStartBottom = viewportHeight * 0.9;

    // Iterate over each h3 element
    h4Elements.forEach((h4) => {
        // Get the bounding rectangle of the element
        const rect = h4.getBoundingClientRect();
        // Calculate the element's top and bottom position relative to the viewport
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // Determine the default and minimum font sizes
        const defaultFontSize = 2.5; // Adjust the default (larger) font size as needed
        const minFontSize = 1.6; // Adjust the minimum (smaller) font size as needed

        let fontSize = defaultFontSize; // Start with the default font size

        // Check if the element is within the first 10% of the viewport
        if (elementTop < shrinkStartTop) {
            let ratio = elementTop / shrinkStartTop;
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        } 
        // Check if the element is within the last 10% of the viewport
        else if (elementBottom > shrinkStartBottom) {
            let ratio = (viewportHeight - elementBottom) / (viewportHeight - shrinkStartBottom);
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        }

        // Apply the calculated font size to the h3 element
        h4.style.fontSize = `${fontSize}vw`;
    });
}

function adjustp1FontSizeOnScroll() {
    // Get all h3 elements
    const p1Elements = document.querySelectorAll('p1');

    // Determine the viewport's height
    const viewportHeight = window.innerHeight;

    // Calculate the thresholds for the first 10% and the last 10% of the viewport height
    const shrinkStartTop = viewportHeight * 0.1;
    const shrinkStartBottom = viewportHeight * 0.9;

    // Iterate over each h3 element
    h3Elements.forEach((p1) => {
        // Get the bounding rectangle of the element
        const rect = p1.getBoundingClientRect();
        // Calculate the element's top and bottom position relative to the viewport
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // Determine the default and minimum font sizes
        const defaultFontSize = 4; // Adjust the default (larger) font size as needed
        const minFontSize = 2; // Adjust the minimum (smaller) font size as needed

        let fontSize = defaultFontSize; // Start with the default font size

        // Check if the element is within the first 10% of the viewport
        if (elementTop < shrinkStartTop) {
            let ratio = elementTop / shrinkStartTop;
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        } 
        // Check if the element is within the last 10% of the viewport
        else if (elementBottom > shrinkStartBottom) {
            let ratio = (viewportHeight - elementBottom) / (viewportHeight - shrinkStartBottom);
            fontSize = minFontSize + ratio * (defaultFontSize - minFontSize);
        }

        // Apply the calculated font size to the h3 element
        p1.style.fontSize = `${fontSize}vw`;
    });
}

function adjustFontSizeForP1() {
    // Get the p1 element
    const p1Element = document.getElementById('p1');

    // Increase the font size after 3 seconds
    setTimeout(() => {
        p1Element.style.fontSize = '1.5vw'; // Increase the font size to 20 pixels (adjust as needed)
    }, 2500); // 3000 milliseconds = 3 seconds
}

// Call adjustFontSizeForP1 to start the font size adjustment process
adjustFontSizeForP1();


// Listen for scroll events
window.addEventListener('scroll', adjustH3FontSizeOnScroll);

// Also adjust font size on initial load
window.addEventListener('load', adjustH3FontSizeOnScroll);

// Listen for scroll events
window.addEventListener('scroll', adjustp1FontSizeOnScroll);

// Also adjust font size on initial load
window.addEventListener('load', adjustp1FontSizeOnScroll);

// Listen for scroll events
window.addEventListener('scroll', adjusth4FontSizeOnScroll);

// Also adjust font size on initial load
window.addEventListener('load', adjusth4FontSizeOnScroll);


document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    video.play();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('videoPlayer');
    if (video) {
        video.play().catch(error => console.error("Video play failed:", error));
    }
});


