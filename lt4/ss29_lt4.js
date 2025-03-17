let notes = [];
let choice, check = true;

do {
    do {
        choice = +prompt("1. Thêm công việc mới. \n2. Hiển thị tất cả công việc. \n3. Cập nhật trạng thái công việc theo id. \n4. Lọc công việc theo trạng thái. \n5. Sắp xếp công việc theo trạng thái. \n6.Thoát");
        check = Number.isInteger(choice) && choice >= 0 && choice <= 6 ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            let name1, describe1, time1;
            do {
                name1 = prompt("Nhập tên công việc: ").trim();
                check = name1 !== "" ? false : true;
            } while (check);
            do {
                describe1 = prompt("Nhập mô tả công việc: ").trim();
                check = describe1 !== "" ? false : true;
            } while (check);
            do {
                time1 = prompt("Nhập thời gian bắt đầu(dd/mm/yyyy): ").trim();
                check = time1 !== "" ? false : true;
            } while (check);

            let newNote = new Object();
            notes.length === 0 ? newNote.id = 1 : newNote.id = notes.length + 1;
            newNote.name = name1;
            newNote.describe = describe1;
            newNote.time = time1;
            newNote.status = false; // true: đã hoàn thành ; false:  chưa hoàn thành

            notes.push(newNote);
            alert("Thêm công việc thành công!");
            break;
        }
        case 2: {
            notes.length === 0 ? alert("Danh sách công việc rỗng!") : console.table(notes);
            break;
        }
        case 3: {
            if (notes.length === 0) {
                alert("Danh sách công việc rỗng!");
                break;
            }
            let idInput;
            do {
                idInput = +prompt("Nhập id công việc cần cập nhật: ").trim();
                check = Number.isInteger(idInput) && idInput > 0 ? false : true;
            } while (check);
            let index = notes.findIndex(item => item.id === idInput);

            if (index === -1) {
                console.log(`Không tồn tại công việc có id: ${idInput}`);

            } else {
                let currentStatus = notes[index].status ? "Đã hoàn thành" : "Chưa hoàn thành";
                let test = confirm(`Trạng thái hiện tại là: ${currentStatus}. Có chắc chắn cập nhật trạng thái không?`);
                if (test) {
                    notes[index].status = !notes[index].status;
                    alert("Cập nhật trạng thái thành công!");
                }
            }
            break;
        }
        case 4: {
            if (notes.length === 0) {
                alert("Danh sách công việc rỗng!");
                break;
            }

            let listTrue = notes.filter(item => item.status === true);
            listTrue.length === 0 ? console.log("Không có công việc ở trạng thái: đã hoàn thành") : console.table(listTrue);

            let listFalse = notes.filter(item => item.status === false);
            listFalse.length === 0 ? console.log("Không có công việc ở trạng thái: chưa hoàn thành") : console.table(listFalse);

            break;
        }
        case 5: {
            if (notes.length === 0) {
                alert("Danh sách công việc rỗng!");
                break;
            }
            notes.sort((a, b) => a.status - b.status);
            console.table(notes);
            break;
        }
        case 6: {
            alert("Bạn chọn thoát!");
            break;
        }
    }
} while (choice !== 6);
