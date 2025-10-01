let price = Number(prompt("nhap gia san pham"));   
let quantity = Number(prompt("nhap so luong san pham"));     
let total = price * quantity;
total -= total * 0.1;  
total += total * 0.05;  
console.log("Tổng hóa đơn sau giảm giá và VAT: " + total + " VND");
