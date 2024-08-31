const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Usage Example: 
const testEmail = "example@example.com";
if (validateEmail(testEmail)) {
    console.log("The email is valid");
} else {
    console.log("The email is invalid");
};

