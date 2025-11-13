const nameInput = document.getElementById('name') as HTMLInputElement;
const lastnameInput = document.getElementById('lastname') as HTMLInputElement;
const patronymicInput = document.getElementById('patronymic') as HTMLInputElement;
const output = document.getElementById('output');

export function getFIO() {
  const name = nameInput.value;
  const lastname = lastnameInput.value;
  const patronymic = patronymicInput.value;

  if (name && lastname && patronymic) {
    const FIO = `${lastname} ${name[0]}. ${patronymic[0]}.`;
    if (output) output.textContent = FIO;
  } else {
    if (output) output.textContent = 'Заполните все поля';
  }
}
