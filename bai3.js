let weight = Number(prompt("Nhập cân nặng (kg):"));  
let height = Number(prompt("Nhập chiều cao (m):"));
let bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log("Gầy");
} else if (bmi >= 25) {
    console.log("Béo");
} else {
    console.log("Bình thường");
}
