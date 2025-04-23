# Password Hashing and Salting with bcrypt in Node.js

This is a simple Node.js application that demonstrates how to securely hash and salt passwords using `bcrypt`. The application includes a basic implementation for hashing a password, verifying the hash, and storing it for future comparisons.

## Features

- Hash a password using `bcrypt`.
- Salt the password before hashing.
- Verify the hashed password against a plaintext password.
- Simple command-line interface for testing.

## Requirements

- Node.js (version 12.x or higher)
- npm (Node Package Manager)

## Installation

### Clone the repository:

git clone https://github.com/kmprasannakumar/password-hashing-example.git
Install dependencies:
Navigate to the project directory and install the required packages using npm:


cd password-hashing-example
npm install
Environment Setup:
Create a .env file in the root of the project.

Add the following key to the .env file for your session secret (optional but recommended for storing sensitive data securely):

env

SESSION_SECRET=your-secret-key
Usage
Hash a password: To hash a password, simply run the following command:

bash
node hashing.js
Verify password: To verify the hashed password, follow the instructions in hashing.js.

Example
Hashing a Password
bash
$ node hashing.js
Enter a password to hash: MySecurePassword
Hashed Password: $2b$10$6RLMGkN5cWa88s5dd0ssOZ.Er4Fw1X9zmnVqOjpSQwbLvQ8DBZX8O
Verifying a Password
bash
$ node verify.js
Enter the password to verify: MySecurePassword
Password is valid.
License
This project is licensed under the MIT License - see the LICENSE file for details.
