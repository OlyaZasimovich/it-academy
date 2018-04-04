{
  function eventForInputs() {
    let arrayInputs = document.getElementsByClassName('field');
    for (let i = 0; i < arrayInputs.length; i++) {
      arrayInputs[i].addEventListener('change', validation, false);
    }
  }
  eventForInputs();

  function showError( container, element, message) {
    const errorText = document.createElement('span');
    errorText.innerText = `${message}`;
    errorText.className = 'error-text';
    errorText.style.color = 'red';
    container.appendChild(errorText);
  }
  
  function paintBorder(element, color) {
    if (element.type !== 'radio' || element.type !== 'checkbox'){
      element.style.borderColor = `${color}`;
    }
  }

  function deleteError(container, element) {
    const deletedElement = container.getElementsByClassName('error-text');
    for (let i=0; i<deletedElement.length; i++) {
      container.removeChild(deletedElement[i]);
    }
  }

  function validation() {
    const wrappper = this.parentNode;
    const regexpEmail = /\w+@\w+\.\w+/gim;


    if ( this.value == '' || (this.type == 'checkbox' && !this.checked ) ) {
      showError( wrappper, this, 'Заполните поле ');
      paintBorder(this, 'red');
    }else if (this.value !== '' ) {
      deleteError(wrappper, this);
      paintBorder(this, 'green');
    }


    if ( this.type == 'email' && this.value !== '' && this.value.search(regexpEmail) === -1 ) {
      showError( wrappper, this, 'Введите существующий email ');
      paintBorder(this, 'red');
    } else if ( (this.type == 'email' && this.value !== '') || this.value.search(regexpEmail) !== -1 ) {
      deleteError(wrappper, this);
      paintBorder(this, 'green');
    }

    // console.log(this.value.search(regexpEmail) !== -1);
    // if (this.value.search(regexpEmail) !== -1 && this.type == 'email' && this.value !== '') {
    //   console.log(this.value.search(regexpEmail));
    //   deleteError(wrappper, this);
    // }
  }

  // function showError(container, message) {
  //   const errorText = document.createElement('span');
  //   errorText.innerText = `${message}`;
  //   container.appendChild(errorText);
  //   if (this.type == 'text' || this.type == 'email') {
  //     this.style.borderColor = 'red';
  //   }}
  // }
  //
  // function removeError(container) {
  //   this.parentNode.removeChild(errorText);
  // }
  //
  // function validation() {
  //   let father = this.parentNode;
  //   if (this.value == '') {
  //     showError(father,'Введите данные');
  //   }
  //   console.log(this);
  //   if (this.parentNode.querySelector('span')) {
  //     this.parentNode.removeChild(errorText);
  //   }
  //   if (this.type == 'text' || this.type == 'email') {
  //     this.style.borderColor = 'green';
  //   }
  // }
}



