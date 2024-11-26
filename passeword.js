// Importer le module generate-password
const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        
    });

    console.log(password);
}

generateRandomPassword();
