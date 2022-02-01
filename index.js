/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
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
  for (let i = 0; i < linkTags.length; i++) {
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
document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);