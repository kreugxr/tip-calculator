// Initialize currency and set default placeholder for bill input
let actualCurrency = '$';
document.getElementById('inputBill').placeholder = actualCurrency;

// Event listener for currency selector
document.getElementById('currencySelector').addEventListener('change', function(){
    // Update actualCurrency to the selected currency value
    actualCurrency = this.value;
    console.log(`The actual currency has been changed to ${actualCurrency}`);
    // Update the placeholder of inputBill to reflect the selected currency
    document.getElementById('inputBill').placeholder = actualCurrency;
});

// Function to calculate tip based on user input
function CalculateTip(){
    // Retrieve numeric values from input fields
    let bill = Number(document.getElementById('inputBill').value);
    let tipPercentage = Number(document.getElementById('inputTip').value) / 100;
    let div = Number(document.getElementById('inputDiv').value);

    // Calculate total bill, tip amount, and amount per person
    let totalBill = (tipPercentage * bill) + bill;
    let tipAmount = tipPercentage * bill;
    let amountPerPerson = totalBill / div;

    // Format calculated values to two decimal places
    const formattedTotalBill = totalBill.toFixed(2);
    const formattedTip = tipAmount.toFixed(2);
    const formattedAPP = amountPerPerson.toFixed(2);

    // Update the tip calculation table in the HTML
    const table = document.getElementById('tip_table_body');
    const newRow = table.insertRow();

    // Insert cells and populate them with formatted values
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Display currency symbol followed by formatted values in each cell
    cell1.textContent = `${actualCurrency} ${formattedTotalBill}`;
    cell2.textContent = `${actualCurrency} ${formattedTip}`;
    cell3.textContent = `${actualCurrency} ${formattedAPP}`;
}