let products = [];
let choice, check = true;

do {
    do {
        choice = +prompt("1. Thêm sản phẩm vào danh sách sản phẩm. \n2. Hiển thị tất cả sản phẩm. \n3. Hiển thị chi tiết sản phẩm theo id. \n4.Cập nhật thông tin sản phẩm theo id. \n5. Xóa sản phẩm theo id. \n6. Lọc sản phẩm theo khoảng giá. \n7. Thoát");
        check = Number.isInteger(choice) && choice >= 0 && choice <= 7 ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            let name1 = prompt("Nhập tên sản phẩm: ").trim();
            let category1 = prompt("Nhập danh mục sản phẩm: ").trim();
            let price1;
            let quantity1;

            do {
                price1 = +prompt("Nhập giá sản phẩm: ").trim();
                check = Number.isInteger(price1) && price1 > 0 ? false : true;
            } while (check);
            do {
                quantity1 = +prompt("Nhập số lượng sản phẩm: ").trim();
                check = Number.isInteger(quantity1) && quantity1 > 0 ? false : true;
            } while (check);

            let newProduct = new Object();
            products.length === 0 ? newProduct.id = 1 : newProduct.id = products.length + 1;
            newProduct.name = name1;
            newProduct.price = price1;
            newProduct.category = category1;
            newProduct.quantity = quantity1;

            products.push(newProduct);
            alert("Thêm sản phẩm thành công!");
            break;
        }
        case 2: {
            products.length === 0 ? alert("Danh sách rỗng!") : console.table(products);
            break;
        }
        case 3: {
            if (products.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }
            let idInput;
            do {
                idInput = +prompt("Nhập id sản phẩm muốn xem chi tiết: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);
            let result = products.filter(item => item.id === idInput);

            result.length === 0 ? console.log(`Không tồn tại sản phẩm có ${idInput}`) : console.table(result);
            break;
        }
        case 4: {
            if (products.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }

            let idInput;
            do {
                idInput = +prompt("Nhập id sản phẩm cần chỉnh sửa: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);

            let index = products.findIndex(item => item.id === idInput);
            if (index === -1) {
                console.log(`Không tồn tại sản phẩm có id ${idInput}`);

            } else {
                let name1 = prompt("Nhập tên sản phẩm: ").trim();
                let category1 = prompt("Nhập danh mục sản phẩm: ").trim();
                let price1;
                let quantity1;

                do {
                    price1 = +prompt("Nhập giá sản phẩm: ").trim();
                    check = Number.isInteger(price1) && price1 > 0 ? false : true;
                } while (check);
                do {
                    quantity1 = +prompt("Nhập số lượng sản phẩm: ").trim();
                    check = Number.isInteger(quantity1) && quantity1 > 0 ? false : true;
                } while (check);

                products[index].name = name1;
                products[index].category = category1;
                products[index].price = price1;
                products[index].quantity = quantity1;
                console.log("Cập nhật sản phẩm thành công!");
                console.table(products);
            }
            break;
        }
        case 5: {
            if (products.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }

            let idInput;
            do {
                idInput = +prompt("Nhập id sản phẩm cần xóa: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);

            let index = products.findIndex(item => item.id === idInput);
            if (index === -1) {
                console.log(`Không tồn tại sản phẩm có id ${idInput}`);

            } else {
                let test = confirm(`Có chắc chắn xóa không?`);

                if (test) {
                    products.splice(index, 1);
                    console.log("Xóa sản phẩm thành công!");
                    console.table(products);
                }
            }
            break;
        }
        case 6: {
            if (products.length === 0) {
                alert("Danh sách rỗng!");
                break;
            }
            let minPrice, maxprice;
            do {
                minPrice = +prompt("Nhập giá min: ").trim();
                check = Number.isInteger(minPrice) && minPrice > 0 ? false : true;
            } while (check);
            do {
                maxprice = +prompt("Nhập giá max: ").trim();
                check = Number.isInteger(maxprice) && maxprice > 0 ? false : true;
            } while (check);

            if (minPrice > maxprice) {
                let temp = minPrice;
                minPrice = maxprice;
                maxprice = temp;
            }

            let result = products.filter(item => item.price >= minPrice && item.price <= maxprice);
            result.length === 0 ? console.log(`Không có sản phẩm trong khoảng giá ${minPrice} - ${maxprice}`) : console.table(result);
            break;
        }
        case 7: {
            alert("Bạn chọn thoát!");
            break;
        }
    }
} while (choice !== 7);


