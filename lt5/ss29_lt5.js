let accounts = [];
let choice, check = true;

const regexEmail = /^[\w.-]+@[\w.-]+\.(com|vn)$/;
const regexPass = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

const checkEmail = (email) => {
    let check;
    email === "" || !regexEmail.test(email) ? check = true : check = false;
    return check;
}

const checkEmailExist = (arr, email) => {
    for (const element of arr) {
        if (element.email === email) return true;
    }
    return false;
}

const checkPass = (pass) => {
    let check;
    pass === "" || !regexPass.test(pass) ? check = true : check = false;
    return check;
}

do {
    do {
        choice = +prompt("1. Đăng ký người dùng mới. \n2. Đăng nhập người dùng. \n3. Thoát");
        check = Number.isInteger(choice) && choice >= 0 && choice <= 3 ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            let name1, email1, pass1;
            do {
                name1 = prompt("Nhập tên: ").trim();
                check = name1 !== "" ? false : true;
            } while (check);
            do {
                email1 = prompt("Nhập email: ").trim();
                if (!checkEmail(email1)) {
                    if (checkEmailExist(accounts, email1)) {
                        alert("Email đã tồn tại");
                        check = true;
                    } else {
                        check = false;
                    }
                } else {
                    check = true;
                }
            } while (check);

            do {
                pass1 = prompt("Nhập pass: ").trim();
                check = checkPass(pass1);
            } while (check);

            let newAcc = new Object();
            accounts.length === 0 ? newAcc.id = 1 : newAcc.id = accounts.length + 1;
            newAcc.name = name1;
            newAcc.email = email1;
            newAcc.pass = pass1;

            accounts.push(newAcc);
            alert("Đăng kí thành công!");
            console.table(accounts);
            break;
        }
        case 2: {
            if (accounts.length === 0) {
                alert("Danh sách tài khoản rỗng!");
            } else {
                let emailInput, passInput;
                do {
                    emailInput = prompt("Nhập email: ").trim();
                    check = checkEmail(emailInput);
                } while (check);

                do {
                    passInput = prompt("Nhập pass: ").trim();
                    check = checkPass(passInput);
                } while (check);

                let result = accounts.find(item => item.email === emailInput && item.pass === passInput);
                result ? console.table(result) : console.log(`Đăng nhập thất bại!`);
            }
            break;
        }
        case 3: {
            alert("Bạn chọn thoát!");
            break;
        }
    }
} while (choice !== 3);
