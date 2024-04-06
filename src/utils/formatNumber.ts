// A function that formats a number with commas as thousands separators

interface Prop {
    number: number
}
export function formatNumberWithCommas({number}: Prop) {
    // If the number is undefined or null, return "0"
    if (number === undefined || number === null) {
        return "0";
    }

    // Convert the number to a string using toLocaleString() function
    // This function formats the number according to the user's locale
    return number.toLocaleString('en-US');
}

// // Example usage:
// const price = 250500; // The number you want to display
//
// // Using the function to display the number with commas as thousands separators
// const formattedPrice = formatNumberWithCommas(price);
// console.log(formattedPrice); // Output: "250,500"
