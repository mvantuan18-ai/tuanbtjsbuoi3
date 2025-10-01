const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập năm: ', (yearInput) => {
    const year = parseInt(yearInput);
    if (year > 0) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            console.log('Năm nhuận');
        } else {
            console.log('Không phải năm nhuận');
        }
    } else {
        console.log('Năm không hợp lệ');
    }
    readline.close();
});
