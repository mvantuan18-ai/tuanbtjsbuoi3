const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập cân nặng (kg): ', (weightInput) => {
    readline.question('Nhập chiều cao (m): ', (heightInput) => {
        const weight = parseFloat(weightInput);
        const height = parseFloat(heightInput);
        const bmi = weight / (height * height);
        if (bmi < 18.5) {
            console.log('Gầy');
        } else if (bmi >= 25) {
            console.log('Béo');
        } else {
            console.log('Bình thường');
        }
        readline.close();
    });
});
