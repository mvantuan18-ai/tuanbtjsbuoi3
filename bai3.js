let weight = Number(prompt("Nhập cân nặng (kg):"));  
let height = Number(prompt("Nhập chiều cao (m):"));
let bmi = weight / (height * height);
console.log(bmi < 18.5 ? "Gầy" : (bmi >= 25 ? "Béo" : "Bình thường"));