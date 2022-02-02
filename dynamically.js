/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const portfolioContainer = document.querySelector('body');
const modalBody = document.querySelector('.modal');
const getchange = document.querySelector('.projetd');
const getrool = document.getElementById('rool');
const getProjectView = document.querySelector('.project-view');
const cards = {
  img2: './assets/work/work_two.png',
  img3: 'assets/work/work_thee.png',
  img4: 'assets/work/work_four.png',
  img5: 'assets/work/work_five.png',
  img6: 'assets/work/work_six.png',
};
getrool.innerHTML = '<img src="assets/work/work_two.png" class="work-one letgo" alt="first project image">';
portfolioContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const modalToggle = e.target.closest('.project-view');

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.parentNode;

  const modalParent = modal.parentNode.parentNode.parentNode.firstChild;

  const closeButton = modalParent.querySelector('.closebox');
  modalParent.classList.add('is-open');

  closeButton.addEventListener('click', (_) => {
    modalParent.classList.remove('is-open');
  });
});
