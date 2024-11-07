// Tab switching functionality for Customer and Hospital login forms
const customerTab = document.getElementById('customer-tab');
const hospitalTab = document.getElementById('hospital-tab');
const customerForm = document.getElementById('customer-form');
const hospitalForm = document.getElementById('hospital-form');

// Function to handle the tab animation
function switchTab(showForm, hideForm, activeTab, inactiveTab) {
    hideForm.classList.remove('active');
    activeTab.classList.add('active');
    inactiveTab.classList.remove('active');

    // Use anime.js to animate the form
    anime({
        targets: showForm,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        begin: function() {
            showForm.classList.add('active');
        }
    });
}

customerTab.addEventListener('click', () => {
    switchTab(customerForm, hospitalForm, customerTab, hospitalTab);
});

hospitalTab.addEventListener('click', () => {
    switchTab(hospitalForm, customerForm, hospitalTab, customerTab);
});

// Zoom In and Zoom Out
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

zoomInButton.addEventListener('click', () => {
    anime({
        targets: document.body,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad'
    });
});

zoomOutButton.addEventListener('click', () => {
    anime({
        targets: document.body,
        scale: 0.9,
        duration: 300,
        easing: 'easeInOutQuad'
    });
});
