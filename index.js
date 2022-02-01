/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
let toggleNavStatus = false;
const getSpace = document.querySelector('.space');
const getContainer = document.querySelector('.container');
const getMenubar = document.querySelector('.firstmobile-nav');
const getImages = document.querySelector('.images');
const menuLinks = document.querySelectorAll('.firstmobile a');

function bb() {
  getMenubar.style.display = 'none';
}

function iterat() {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', bb);
  }
}

function toggleNav() {
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', toggleNavStatus = true);
  }
  if (toggleNavStatus === false) {
    getSpace.style.background = "url('./assets/menu/Group_98.png') 100% 100% no-repeat";
    getContainer.style.marginTop = '75vh';
    getImages.style.background = '#fff';
    getMenubar.style.position = 'absolute';
    getMenubar.style.display = 'flex';
    getMenubar.style.width = '100%';
    toggleNavStatus = true;
  } else {
    getImages.style.background = '#fff';
    getSpace.style = document.querySelector('.footspace').sytle;
    getSpace.style.backgroundPosition = 'center center';
    getMenubar.style.display = 'none';
    getContainer.style.marginTop = 'inherit';
    toggleNavStatus = false;
  }

  iterat();
}

// function myFunction() {
//   const x = document.getElementById('myDIV');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }

document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);