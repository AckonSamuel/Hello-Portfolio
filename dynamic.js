/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const cards = [];
let counter = 0;

const gridContainer = document.querySelector('.gridContainer');

function createCard(title, tags, images, subimages,
  Description, linkLive, linkSource, desktop) {
  counter += 1;
  return {
    id: `card-${counter}`,
    title,
    tags,
    images,
    subimages,
    Description,
    linkLive,
    linkSource,
    desktop,
  };
}

const travailUno = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_one.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailUno);

const travailDeux = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_two.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailDeux);

const travailTrois = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_three.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailTrois);

const travailQuatre = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_four.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailQuatre);

const travailCinq = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_five.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailCinq);

const travailSeize = createCard('Project name goes here', ['HTML/CSS', 'ruby on Rails', 'JavaScript'],
  'assets/assets/work/work_one.png',
  ['assets/assets/work/work_one.png', 'assets/assets/work/work_one.png', 'assets/assets/work/work_six.png',
    'assets/assets/work/work_one.png'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  'ackonsamuel.github.io/Hello-Portfolio', 'https://github.com/AckonSamuel/Hello-Portfolio', false);
cards.push(travailSeize);

// Modal window

function popupWindow(cardObj) {
  const body = document.querySelector('body');

  const modalParent = document.createElement('div');
  modalParent.classList.add('container', 'modalParent');
  body.appendChild(modalParent);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', cardObj.id);
  modalParent.appendChild(modal);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modal.appendChild(modalHeader);

  const h3 = document.createElement('h3');
  h3.textContent = cardObj.title;
  modalHeader.appendChild(h3);

  const closeButton = document.createElement('img');
  closeButton.setAttribute('src', 'assets/menu/Union.png');
  closeButton.setAttribute('alt', 'close button');
  modalHeader.appendChild(closeButton);
  closeButton.addEventListener('click', () => {
    body.removeChild(modalParent);
  });

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modal.appendChild(modalBody);

  const ultags = document.createElement('ul');
  ultags.classList.add('model-tech');
  modalBody.appendChild(ultags);

  cardObj.tags.forEach((tag) => {
    const litag = document.createElement('li');
    litag.textContent = tag;
    ultags.appendChild(litag);
  });

  const modalGrid = document.createElement('div');
  modalGrid.classList.add('modal-grid');
  modalBody.appendChild(modalGrid);

  const projectImg = document.createElement('div');
  projectImg.classList.add('projectImg');
  modalGrid.appendChild(projectImg);

  const projectImg = document.createElement('div');
  projectImg.classList.add('projectImg');
  modalGrid.appendChild(projectImg);

  const projectImg = document.createElement('div');
  projectImg.classList.add('projectImg');
  modalGrid.appendChild(projectImg);

  const projectImg = document.createElement('div');
  projectImg.classList.add('projectImg');
  modalGrid.appendChild(projectImg);
  
  const projectImg = document.createElement('div');
  projectImg.classList.add('projectImg');
  modalGrid.appendChild(projectImg);

  const image = document.createElement('img');
  image.setAttribute('src', cardObj.image);
  image.setAttribute('alt', '');
  projectImg.appendChild(image);

  const modalInfo = document.createElement('div');
  modalInfo.classList.add('modal-info');
  modalGrid.appendChild(modalInfo);

  const p = document.createElement('p');
  p.textContent = cardObj.longDescription;
  modalInfo.appendChild(p);

  const popupbtn = document.createElement('div');
  popupbtn.classList.add('popUpButtons');
  modalInfo.appendChild(popupbtn);

  const live = document.createElement('a');
  live.setAttribute('rel', 'noopener noreferrer');
  live.setAttribute('href', cardObj.linkLive);
  live.setAttribute('aria-label', 'See Live');
  live.setAttribute('target', '_blank');
  live.classList.add('interaction');
  live.textContent = 'See Live';
  popupbtn.appendChild(live);

  const source = document.createElement('a');
  source.setAttribute('rel', 'noopener noreferrer');
  source.setAttribute('href', cardObj.linkSource);
  source.setAttribute('aria-label', 'See Source');
  source.setAttribute('target', '_blank');
  source.classList.add('interaction');
  source.textContent = 'See Source';
  popupbtn.appendChild(source);
}