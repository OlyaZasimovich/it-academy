{
  function showError(element, message) {
    let container = element.parentNode;
    const errorText = document.createElement('span');
    errorText.innerText = `${message}`;
    errorText.className = 'error-text';
    errorText.style.color = 'red';
    container.appendChild(errorText);
  }
  
  function paintBorder(element, color) {
    if (element.type !== 'radio' || element.type !== 'checkbox' || element.type !== 'submit'){
      element.style.borderColor = `${color}`;
    }
  }

  function deleteError(element) {
    let container = element.parentNode;
    const deletedElement = container.getElementsByClassName('error-text');
    for (let i=0; i<deletedElement.length; i++) {
      container.removeChild(deletedElement[i]);
    }
  }

  function checkEmptyValue(field) {
    if ( field.type !== 'submit' &&
         !field.value  ||
         (field.type == 'checkbox' && !field.checked) ||
         (field.type == 'radio' && !field.checked)
       )
    {
      showError(field, 'Заполните поле ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || (field.type == 'checkbox' && field.checked)) {
      paintBorder(field, 'green');
      deleteError(field);
      return true;
    }
  }

  function checkEmailValue(field) {
    const regexpEmail = /\w+@\w+\.\w+/gim;
    deleteError(field);
    if (field.value && field.value.search(regexpEmail) === -1) {
      showError(field, 'Введите существующий email ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || field.value.search(regexpEmail) !== -1) {
      paintBorder(field, 'green');
      return true;
    }
  }

  function checkUrlValue(field) {
    deleteError(field);
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (field.value && field.value.search(regex) === -1) {
      showError(field, 'Введите корректный URL ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || field.value.search(regex) !== -1) {
      paintBorder(field, 'green');
      return true;
    }
  }

  // function checkRadioValue(radioArray) {
  //   for (let i = 0; i < radioArray.length; i++) {
  //     deleteError(field);
  //   }
  // }

  function validation(e) {
    let element = e.target;
    checkEmptyValue(element);
    if (element.type === 'email') {
      checkEmailValue(element);
    }
    if (element.type === 'url') {
      checkUrlValue(element);
    }
  }

  function validationSubmit(e) {
    event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    let myform = e.currentTarget;
    let elements = myform.elements;
    for (let i = 0; i < myform.length; i++) {
      deleteError(elements[i]);
      checkEmptyValue(elements[i]);
      if (elements[i].type === 'email') {
        checkEmailValue(elements[i]);
      }
      if (elements[i].type === 'url') {
        checkUrlValue(elements[i]);
      }
      // if (elements[i].type === 'radio' && elements[i].name === 'payment') {
      //   let arrayOfRadio = [];
      //   arrayOfRadio.push(elements[i]);
      //   checkRadioValue(arrayOfRadio);
      // }
    }
  }

  function eventForForm() {
    const myForm = document.querySelector('form');
    myForm.addEventListener('change', validation, true);
    myForm.addEventListener('submit', validationSubmit, false);
  }
  eventForForm();
}



