const bcrypt = require('bcrypt');

// Function to hash password
async function hashPassword(plainPassword) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
}

// Function to compare password
async function verifyPassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

// Example usage
(async () => {
    const myPassword = 'MySecret123!';
    
    // Hash password
    const hashed = await hashPassword(myPassword);
    console.log('Hashed Password:', hashed);

    // Check correct password
    const isCorrect = await verifyPassword('MySecret123!', hashed);
    console.log('Password Match:', isCorrect);

    // Check wrong password
    const isWrong = await verifyPassword('WrongPass', hashed);
    console.log('Wrong Password Match:', isWrong);
})();
