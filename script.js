const radios = document.querySelectorAll('input[name="unit"]');
const totalAmountElement = document.querySelector('#totalAmount'); // Element to display the total amount

// Function to update the total price
function updateTotal() {
    let totalPrice = 0; // Initialize total price

    radios.forEach(radio => {
        if (radio.checked) {
            const priceValue = radio.value; // This will give you the value attribute
            totalPrice = priceValue; // Extract the numeric value
        }
    });

    totalAmountElement.textContent = totalPrice; // Update the displayed total price
}

// Add event listener to each radio button
radios.forEach(radio => {
    radio.addEventListener('change', updateTotal);
});

// Initialize the total price on page load
updateTotal();

document.querySelectorAll('.box input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove highlight from all boxes
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('highlight');
        });
        
        // Add highlight to the parent box of the checked radio
        this.closest('.box').classList.add('highlight');
    });
});


