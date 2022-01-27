const name = document.getElementById('name');
const surname = document.getElementById('surname');
const address = document.getElementById('address');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-input error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-input success';
}

function isValidName(name) {
  const regex = /^[A-Z{1}]+[a-z]{2,29}$/;
  return regex.test(name);
}

function isValidAddress(address) {
  const regex = /^(.+)(\s\w+\w{0,3})+( [0-9]{2})(-[0-9]{3})?$/;
  return regex.test(address);
}

function OnClick(){

    if (name.value === '') {
      showError(name, 'Imię jest wymagane');
    } else if (!isValidName(name.value)) {
      showError(name, 'Podane imię jest niepoprawne');
    } else {
      showSuccess(name);
    }
    if (surname.value === '') {
      showError(surname, 'Nazwisko jest wymagane');
    } else if (!isValidName(surname.value)) {
      showError(surname, 'Podane nazwisko jest niepoprawne');
    } else {
      showSuccess(surname);
    }
    if (address.value === '') {
      showError(address, 'Adres jest wymagany');
    } else if (!isValidAddress(address.value)) {
      showError(address, 'Podany adres jest niepoprawny');
    } else {
      showSuccess(address);
    }
}

