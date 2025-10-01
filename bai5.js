let year = parseInt(prompt("Nhập năm:"));

(year > 0 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) && console.log(year + " là năm nhuận");
