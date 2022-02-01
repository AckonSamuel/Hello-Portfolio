/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
let toggleNavStatus = false;

function toggleNav() {
  const getSpace = document.querySelector('.space');
  const getContainer = document.querySelector('.container');
  const getMenubar = document.querySelector('.firstmobile-nav');
  const getImages = document.querySelector('.images');
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
    // getSpace.style.background = "url('./assets/image_geometry_3.png') no-repeat";
    getSpace.style = document.querySelector('.footspace').sytle;
    getSpace.style.backgroundPosition = 'center center';
    getMenubar.style.display = 'none';
    getContainer.style.marginTop = 'inherit';
    toggleNavStatus = false;
  }
}
document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);