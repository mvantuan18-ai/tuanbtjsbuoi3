let year = prompt("Nhập năm:");

year > 0  && console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? year + " là năm nhuận" : year + " không phải là năm nhuận");

