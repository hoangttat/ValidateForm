 var username = document.querySelector('#username')
 var email = document.querySelector('#email')
 var password = document.querySelector('#password')
 var confirmPassword = document.querySelector('#confirm-password')
 var form = document.querySelector('form')
 

function showError(input,message) {
   let parent = input.parentElement;
   let small = parent.querySelector('small')
   parent.classList.add('error')
   small.innerHTML = message
}
function showSuccess(input,message) {
  let parent = input.parentElement;
  let small = parent.querySelector('small')
  parent.classList.add('error')
  small.innerHTML = message
}
function checkKhonghople(listInput){
    let isEmptyError = false;
    listInput.forEach(input =>{
      input.value =input.value.trim()

      if(input.value ==''){
        isEmptyError =true;
        showError(input,'Khong duoc de trong')
      }else{
        showSuccess(input)

      }
    });
    return isEmptyError;
}

function checkEmailError(){
  const regexEmail = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  input.value =input.value.trim();
  let isEmalError = !regexEmail.test(input.value)

  if(regexEmail.test(input.value)){
    showSuccess()
  }else{
    showError(input, 'Email Error')
  }
  return isEmalError;
}

function checkLengthError(input,min , max){
  input.value = input.value.trim();

  if(input.value.length < min){
    showError(input,`Phai co it nhat ${min} ky tu`)
    return true;
  }
  if(input.value.length < max){
    showError(input,`Khong duoc qua  ${max} ky tu`)
    return true;
  }

  return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
  if(passwordInput.value !== cfPasswordInput.value){
    showError(cfPasswordInput,'MK khong trung khop')
    return true;
  }
  return false;

}

form.addEventListener('submit',function(e){
  e.preventDefault()

  let isEmptyError = checkKhonghople([username,email,password,confirmPassword]);
  let isEmailError = checkLengthError(email)

  let isUsernameError = checkLengthError(username,3,10)
  let isPasswordError = checkLengthError(password,3,10)
  let isCheckPasswordError = checkMatchPassword(password,confirmPassword)

  
  if(isEmptyError || isEmailError || isUsernameError || isPasswordError ||isCheckPasswordError){
    //do nothing
  }else{
    //logic,  call API
  }
})
