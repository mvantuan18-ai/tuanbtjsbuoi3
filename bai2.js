const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập một số: ', (numberInput) => {
    const number = parseInt(numberInput);
    if (number % 2 === 0) {
        console.log('Chẵn');
    } else {
        console.log('Lẻ');
    }
    readline.close();
});
