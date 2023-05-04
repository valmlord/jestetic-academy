function subscribe() {
  let email = document.getElementById('email').value;
  if (email == '') {
    alert('Введите адрес электронной почты!');
    return false;
  } else {
    alert('Вы подписались на нашу рассылку!');
    return true;
  }
}
