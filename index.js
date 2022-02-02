/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
let toggleNavStatus = false;
const getSpace = document.querySelector('.space');
const getContainer = document.querySelector('.container');
const getMenubar = document.querySelector('.firstmobile-nav');
const getImages = document.querySelector('.images');
const navIcon = document.querySelector('.ic-menu');
const linkTags = document.getElementsByTagName('a');

function openMenu() {
  getSpace.style.background = "url('./assets/menu/Group_98.png') 100% 100% no-repeat";
  getContainer.style.marginTop = '75vh';
  getImages.style.background = '#fff';
  getMenubar.style.position = 'absolute';
  getMenubar.style.display = 'flex';
  getMenubar.style.width = '100%';
  navIcon.src = 'assets/menu/Union.png';
  toggleNavStatus = true;
}

function closeMenu() {
  getImages.style.background = '#fff';
  getSpace.style = document.querySelector('.footspace').sytle;
  getSpace.style.backgroundPosition = 'center center';
  getMenubar.style.display = 'none';
  getContainer.style.marginTop = 'inherit';
  toggleNavStatus = false;
  navIcon.src = 'assets/ic_menu.svg';
}

function iterat() {
  for (let i = 0; i < linkTags.length; i += 1) {
    linkTags[i].addEventListener('click', closeMenu);
  }
}

function toggleNav() {
  if (toggleNavStatus === false) {
    openMenu();
    iterat();
  } else {
    closeMenu();
  }
}
// document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);
// function openPopup() {
//   getPop.style.position = 'fixed';
//   getPop.style.display = 'flex';
//   getPop.style.flexDirection = 'column';
//   getPop.style.width = '100%';
//   getPop.style.minHeight = '100vh';
//   toggleNavStatus = true;
// }

// function closePopup() {
//   getPop.style.display = 'none';
//   toggleNavStatus = false;
// }

// function popIt() {
//   if (toggleNavStatus === false) {
//     openPopup();
//   } else {
//     closePopup();
//   }
// }

// document.getElementsByClassName('.project-view').addEventListener('click', popIt);

// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// // const closeModalButtons = document.querySelectorAll('[data-close-button]');
// // const overlay = document.getElementById('overlay');
// // const button = document.getElementsByTagName('button');
// // // const buttonclass = document.querySelector('project-view');

// // function openModal(modal) {
// //   if (modal == null) return;
// //   modal.classList.add('active');
// //   overlay.classList.add('active');
// // }
// // function clickpen() {
// //   const modal = document.querySelector('project-view');
// //   openModal(modal);
// // }
// // function closeModal(modal) {
// //   if (modal == null) return;
// //   modal.classList.remove('active');
// //   overlay.classList.remove('active');
// // }

// // function clicklose() {
// //   const modal = button.closest('.modal');
// //   closeModal(modal);
// // }
// // function actionOpen() {
// //   openModalButtons.forEach((button) => {
// //     button.addEventListener('click', clickpen);
// //   });
// // }

// // function actionclose() {
// //   closeModalButtons.forEach((button) => {
// //     button.addEventListener('click', clicklose);
// //   });
// // }
