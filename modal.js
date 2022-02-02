/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const portfolioContainer = document.querySelector('#works');

portfolioContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const modalToggle = e.target.closest('.project-view');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode;
  const modalParent = modal.parentNode.previousElementSibling;
  console.log(modalParent);
  const closeButton = modalParent.querySelector('.closebox');

  modalParent.classList.add('is-open');

  closeButton.addEventListener('click', (_) => {
    modalParent.classList.remove('is-open');
  });
});