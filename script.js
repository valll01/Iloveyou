window.onload = function() {
    const overlay = document.getElementById('overlay');
    
    // Trigger the fade-out after a short delay
    setTimeout(() => {
        overlay.style.transition = 'opacity 1s ease';  // Apply transition here
        overlay.style.opacity = '0';  // Set opacity to 0 to trigger the fade

        // Once the transition ends, remove the overlay from view
        overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none';
        });
    }, 1000);  // Start fading out after 1 second
};