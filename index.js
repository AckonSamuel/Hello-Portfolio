/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
let toggleNavStatus = false;

function toggleNav() {
  const getBoxic = document.querySelector('.ic-menu');
  const getMenubar = document.querySelector('.firstmobile-nav');
  const getImages = document.querySelector('.images');
  if (toggleNavStatus === false) {
    getImages.style.background = '#e5e5e5';
    getMenubar.style.position = 'absolute';
    getMenubar.style.display = 'flex';
    getMenubar.style.width = '100%';
    document.querySelector('.container')

    toggleNavStatus = true;
  } else {
    getImages.style.background = '#fff';
    getMenubar.style.display = 'none';
    toggleNavStatus = false;
  }
}
document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);