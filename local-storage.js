/* eslint-disable linebreak-style */

let userData = {
  fullname: '',
  email: '',
  comment: '',
};

const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

const form = document.querySelector('form');

if (localStorage.getItem('userData') != null) {
  userData = JSON.parse(localStorage.getItem('userData'));
  fullname.value = userData.fullname;
  email.value = userData.email;
  comment.value = userData.comment;
}

form.addEventListener('input', () => {
  userData.fullname = fullname.value;
  userData.email = email.value;
  userData.comment = comment.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
