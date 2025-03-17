let contacts = [];
let choice, check = true;
const regex = /^0[1-9]{9}$/;

do {
    do {
        choice = +prompt("1. Thêm đối tượng Contact vào danh sách liên hệ. \n2. Hiển thị danh sách danh bạ. \n3. Tìm kiếm thông tin Contact theo số điện thoại. \n4. Cập nhật thông tin Contact theo id. \n5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id. \n6. Thoát");
        check = Number.isInteger(choice) && choice >= 0 && choice <= 6 ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            let name1 = prompt("Nhập tên liên hệ: ").trim();
            let email1;
            let phone1;

            do {
                email1 = prompt("Nhập email: ").trim();
                check = email1.includes("@") && (email1.endsWith(".com") || email1.endsWith(".edu.vn")) ? false : true;
            } while (check);
            do {
                phone1 = prompt("Nhập số điện thoại: ").trim();
                check = regex.test(phone1) ? false : true;
            } while (check);

            let newContact = new Object();
            contacts.length === 0 ? newContact.id = 1 : newContact.id = contacts.length + 1;
            newContact.name = name1;
            newContact.email = email1;
            newContact.phone = phone1;

            contacts.push(newContact);
            alert("Thêm liên hệ thành công!");
            break;
        }
        case 2: {
            contacts.length === 0 ? alert("Danh sách rỗng!") : console.table(contacts);
            break;
        }
        case 3: {
            if (contacts.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }
            let searchPhone;
            do {
                searchPhone = prompt("Nhập sđt của liên hệ tìm kiếm: ").trim();
                check = regex.test(searchPhone) ? false : true;
            } while (check);
            let result = contacts.filter(item => item.phone === searchPhone);

            result.length === 0 ? console.log(`Không tồn tại sđt ${searchPhone} trong liên hệ`) : console.table(result);
            break;
        }
        case 4: {
            if (contacts.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }

            let idInput;
            do {
                idInput = +prompt("Nhập id liên hệ cần chỉnh sửa: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);

            let index = contacts.findIndex(item => item.id === idInput);
            if (index === -1) {
                console.log(`Không tồn tại liên hệ có id ${idInput}`);

            } else {
                let name1 = prompt("Nhập tên liên hệ: ").trim();
                let email1;
                let phone1;

                do {
                    email1 = prompt("Nhập email: ").trim();
                    check = email1.includes("@") && (email1.endsWith(".com") || email1.endsWith(".edu.vn")) ? false : true;
                } while (check);
                do {
                    phone1 = prompt("Nhập số điện thoại: ").trim();
                    check = regex.test(phone1) ? false : true;
                } while (check);

                contacts[index].name = name1;
                contacts[index].email = email1;
                contacts[index].phone = phone1;
                console.log("Cập nhật liên hệ thành công!");
                console.table(contacts);

            }
            break;
        }
        case 5: {
            if (contacts.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }

            let idInput;
            do {
                idInput = +prompt("Nhập id liên hệ cần xóa: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);

            let index = contacts.findIndex(item => item.id === idInput);
            if (index === -1) {
                console.log(`Không tồn tại liên hệ có id ${idInput}`);

            } else {
                let test = confirm(`Có chắc chắn xóa không?`);

                if (test) {
                    contacts.splice(index, 1);
                    console.log("Xóa liên hệ thành công!");
                    console.table(contacts);
                }
            }
            break;
        }
        case 6: {
            alert("Bạn chọn thoát!");
            break;
        }
    }
} while (choice !== 6);


