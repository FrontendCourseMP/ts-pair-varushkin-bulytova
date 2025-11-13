const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const patronymicInput = document.getElementById('patronymic');
const output = document.getElementById('output');
export function getFIO() {
    const name = nameInput.value;
    const lastname = lastnameInput.value;
    const patronymic = patronymicInput.value;
    if (name && lastname && patronymic) {
        const FIO = `${lastname} ${name[0]}. ${patronymic[0]}.`;
        if (output)
            output.textContent = FIO;
    }
    else {
        if (output)
            output.textContent = 'Заполните все поля';
    }
}
//# sourceMappingURL=task1.js.map