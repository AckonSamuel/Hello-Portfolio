/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const portfolioContainer = document.querySelector('#works');

portfolioContainer.addEventListener('click', (e) => {
  console.log(e);

  const modalToggle = e.target.closest('project-view');
  console.log(modalToggle);
});