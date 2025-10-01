const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nhập username: ', (username) => {
    readline.question('Nhập password: ', (password) => {
        if (username === "admin" && password === "123") {
            console.log('Đăng nhập thành công');
        }
        readline.close();
    });
});
