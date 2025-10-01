let year = Number(prompt("Nhập một năm (ví dụ: 2024):"));
if (year > 0) {

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year + " là năm nhuận");
    } else {
        console.log(year + " không phải là năm nhuận");
    }
} else {
    console.log("Năm không hợp lệ! Vui lòng nhập số > 0.");
}
