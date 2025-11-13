const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const patronymicInput = document.getElementById('patronymic');
const button = document.getElementById('button');
const output = document.getElementById('output');
function getFIO() {
    const name = nameInput.value;
    const lastname = lastnameInput.value;
    const patronymic = patronymicInput.value;
    if (name && lastname && patronymic) {
        const FIO = `${lastname} ${name[0]}. ${patronymic[0]}.`;
        if (output) {
            output.textContent = FIO;
        }
    }
    else {
        if (output) {
            output.textContent = 'Заполните все поля';
        }
    }
}
button?.addEventListener('click', getFIO);
export {};
//# sourceMappingURL=task1.js.map