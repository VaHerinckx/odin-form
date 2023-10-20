function onChange() {
  let password = document.querySelector('#password');
  let confirm = document.querySelector('#password-cfrm');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
  confirm.reportValidity();
}
