const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập giá sản phẩm: ', (priceInput) => {
    readline.question('Nhập số lượng: ', (quantityInput) => {
        const price = parseFloat(priceInput);
        const quantity = parseInt(quantityInput);
        let total = price * quantity;
        total -= total * 0.1; // giảm giá 10%
        total += total * 0.05; // cộng VAT 5%
        console.log(`Tổng hóa đơn sau giảm giá và VAT: ${total.toFixed(2)}`);
        readline.close();
    });
});
