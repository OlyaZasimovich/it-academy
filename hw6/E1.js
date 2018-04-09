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
         !field.value ||
         (field.type === 'checkbox' && !field.checked)
       )
    {
      showError(field, ' Заполните поле ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || (field.type === 'checkbox' && field.checked)) {
      paintBorder(field, 'green');
      deleteError(field);
      return true;
    }
  }

  function checkEmailValue(field) {
    const regexpEmail = /\w+@\w+\.\w+/gim;
    // deleteError(field);
    if (field.value && field.value.search(regexpEmail) === -1) {
      showError(field, ' Введите существующий email ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || field.value.search(regexpEmail) !== -1) {
      paintBorder(field, 'green');
      return true;
    }
  }

  function checkUrlValue(field) {
    // deleteError(field);
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (field.value && field.value.search(regex) === -1) {
      showError(field, ' Введите корректный URL ');
      paintBorder(field, 'red');
      return false;
    } else if (field.value || field.value.search(regex) !== -1) {
      paintBorder(field, 'green');
      return true;
    }
  }

  function checkRadioValue(radioElement) {
    let flag = false;
    for (let i = 0; i < radioElement.length; i++) {
      if (radioElement[i].checked){
        flag = true;
      }
    }
    if (!flag) {
      showError(radioElement[0], ' Заполните поле ');
    }
    alert(flag);
    return flag;
  }


  function validation(e) {
    let element = e.target;
    deleteError(element);
    checkEmptyValue(element);
    if (element.type === 'email') {
      checkEmailValue(element);
    }
    if (element.type === 'url') {
      checkUrlValue(element);
    }
  }
  function validationSubmit(e) {
    let myform = e.currentTarget;
    let elements = myform.elements;
    let radioArray = [];
    let errorElement;
    for (let i = 0; i < myform.length; i++) {
      deleteError(elements[i]);
      checkEmptyValue(elements[i]);
      if (elements[i].type === 'email') {
        checkEmailValue(elements[i])
      }
      if (elements[i].type === 'url') {
        checkUrlValue(elements[i])
      }
      if (elements[i].type === 'radio' && elements[i].name === 'payment') {
        radioArray.push(elements[i]);
      }
    }
    checkRadioValue(radioArray);

    errorElement = document.querySelector('.error-text').parentNode;
    let focusedElement = errorElement.querySelector('input');
    console.log(focusedElement);
    focusedElement.focus();
    focusedElement.scrollIntoView();

    if (focusedElement) {
      event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    }



  }

  function eventForForm() {
    const myForm = document.querySelector('form');
    myForm.addEventListener('change', validation, true);
    myForm.addEventListener('submit', validationSubmit, false);
  }
  eventForForm();
}



