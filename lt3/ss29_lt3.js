let dishes = [];
let categories = [];
let choice, check = true;

const checkOneOfArr = (arr, name) => {
    if (name === "") return true;
    for (const element of arr) {
        if (element.name === name) return true;
    }
    return false;
}

do {
    do {
        choice = +prompt("0. Thêm danh mục mới. \n1. Thêm món ăn vào danh mục. \n2. Xóa món ăn theo tên khỏi danh mục. \n3. Cập nhật thông tin theo tên của món ăn. \n4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn. \n5. Tìm kiếm món ăn theo tên trong toàn bộ menu. \n6. Thoát");
        check = Number.isInteger(choice) && choice >= 0 && choice <= 6 ? false : true;
    } while (check);

    switch (choice) {
        case 0: {
            let categoryName;
            do {
                categoryName = prompt("Nhập tên danh mục mới: ").trim();
                check = checkOneOfArr(categories, categoryName);
            } while (check);

            let newCate = new Object();
            categories.length === 0 ? newCate.id = 1 : newCate.id = categories.length + 1;
            newCate.name = categoryName;

            categories.push(newCate);
            alert("Thêm danh mục thành công");
            console.table(categories);

            break;
        }
        case 1: {
            if (categories.length === 0) {
                alert("Danh sách danh mục rỗng!");
                break;
            }
            let name1, price1, describe1;
            do {
                name1 = prompt("Nhập tên món ăn: ").trim();
                check = checkOneOfArr(dishes, name1);
            } while (check);

            do {
                price1 = +prompt("Nhập giá món ăn: ").trim();
                check = Number.isInteger(price1) && price1 > 1000 ? false : true;
            } while (check);
            do {
                describe1 = prompt("Nhập mô tả món ăn: ").trim();
                check = describe1 !== "" ? false : true;
            } while (check);

            let choiceCate;
            let nameCategories = categories.map((item) => `${item.id}: ${item.name}`).join("\n");
            do {
                choiceCate = +prompt(nameCategories);
                check = Number.isInteger(choiceCate) && choiceCate > 0 && choiceCate <= nameCategories.length ? false : true;
            } while (check);

            let newDish = new Object();
            dishes.length === 0 ? newDish.id = 1 : newDish.id = dishes.length + 1;
            newDish.name = name1;
            newDish.price = price1;
            newDish.describe = describe1;
            newDish.categoryId = choiceCate;

            dishes.push(newDish);
            alert("Thêm món ăn thành công!");
            console.table(dishes);
            break;
        }
        case 2: {
            if (dishes.length === 0) {
                alert("Danh sách món ăn rỗng!");
                break;
            }

            let nameInput;
            do {
                nameInput = prompt("Nhập tên món ăn cần xóa: ").trim();
                check = nameInput !== "" ? false : true;
            } while (check);

            let index = dishes.findIndex(item => item.name.toUpperCase() === nameInput.toUpperCase());
            if (index === -1) {
                console.log(`Không tồn tại món ăn có tên ${nameInput}`);

            } else {
                let test = confirm(`Có chắc chắn xóa món "${nameInput}" không?`);

                if (test) {
                    dishes.splice(index, 1);
                    console.log("Xóa món ăn thành công!");
                    console.table(dishes);
                }
            }

            break;
        }
        case 3: {
            if (dishes.length === 0) {
                alert("Danh sách món ăn rỗng!");
                break;
            }
            let nameInput;
            do {
                nameInput = prompt("Nhập tên món ăn cần chỉnh sửa: ").trim();
                check = nameInput !== "" ? false : true;
            } while (check);

            let index = dishes.findIndex(item => item.name.toUpperCase() === nameInput.toUpperCase());
            if (index === -1) {
                console.log(`Không tồn tại món ăn có tên ${nameInput}`);

            } else {
                let name1, price1, describe1;
                do {
                    name1 = prompt("Nhập tên mới: ").trim();
                    check = checkOneOfArr(dishes, name1);
                } while (check);

                do {
                    price1 = +prompt("Nhập giá mới: ").trim();
                    check = Number.isInteger(price1) && price1 > 1000 ? false : true;
                } while (check);
                do {
                    describe1 = prompt("Nhập mô tả mới: ").trim();
                    check = describe1 !== "" ? false : true;
                } while (check);

                dishes[index].name = name1;
                dishes[index].price = price1;
                dishes[index].describe = describe1;

                alert("Chỉnh sửa thành công!");
                console.table(dishes);
            }
            break;
        }
        case 4: {
            if (dishes.length === 0) {
                alert("Danh sách món ăn rỗng!");
                break;
            }

            console.log("Danh mục: ");
            console.table(categories);
            console.log("Món ăn: ");
            console.table(dishes);
            break;
        }
        case 5: {
            if (dishes.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }

            let nameInput;
            do {
                nameInput = prompt("Nhập tên món ăn cần tìm kiếm: ").trim();
                check = nameInput !== "" ? false : true;
            } while (check);

            let result = dishes.filter(item => item.name.toUpperCase().includes(nameInput.toUpperCase()));
            result.length === 0 ? console.log(`Không tồn tại món ăn có tên ${nameInput}`) : console.table(result);
            break;
        }
        case 6: {
            alert("Bạn chọn thoát!");
            break;
        }
    }
} while (choice !== 6);


