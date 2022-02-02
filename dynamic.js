/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
let toggleNavStatus = false;
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

function popupWindow() {
  const body = document.querySelector('body');

  const modalParent = document.createElement('div');
  modalParent.classList.add('container', 'modalParent');
  body.appendChild(modalParent);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', travailUno.id);
  modalParent.appendChild(modal);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modal.appendChild(modalHeader);

  const h3 = document.createElement('h3');
  h3.textContent = travailUno.title;
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

  travailUno.tags.forEach((tag) => {
    const litag = document.createElement('li');
    litag.textContent = tag;
    ultags.appendChild(litag);
  });

  const modalGrid = document.createElement('div');
  modalGrid.classList.add('modal-grid');
  modalBody.appendChild(modalGrid);

  const projectImg1 = document.createElement('div');
  projectImg1.classList.add('projectImg');
  modalGrid.appendChild(projectImg1);

  //   const projectImg2 = document.createElement('div');
  //   projectImg2.classList.add('projectImg');
  //   modalGrid.appendChild(projectImg2);

  //   const projectImg3 = document.createElement('div');
  //   projectImg3.classList.add('projectImg');
  //   modalGrid.appendChild(projectImg3);

  //   const projectImg4 = document.createElement('div');
  //   projectImg4.classList.add('projectImg');
  //   modalGrid.appendChild(projectImg4);

  //   const projectImg5 = document.createElement('div');
  //   projectImg5.classList.add('projectImg');
  //   modalGrid.appendChild(projectImg5);

  const image1 = document.createElement('img');
  image1.setAttribute('src', travailUno.image1);
  image1.setAttribute('alt', '');
  projectImg1.appendChild(image1);

  //   const image2 = document.createElement('img');
  //   image2.setAttribute('src', travailUno.image2);
  //   image2.setAttribute('alt', '');
  //   projectImg2.appendChild(image2);

  //   const image3 = document.createElement('img');
  //   image3.setAttribute('src', travailUno.image3);
  //   image3.setAttribute('alt', '');
  //   projectImg1.appendChild(image3);

  //   const image4 = document.createElement('img');
  //   image1.setAttribute('src', travailUno.image4);
  //   image1.setAttribute('alt', '');
  //   projectImg1.appendChild(image4);

  //   const image5 = document.createElement('img');
  //   image1.setAttribute('src', travailUno.image5);
  //   image1.setAttribute('alt', '');
  //   projectImg1.appendChild(image5);

  const p = document.createElement('p');
  p.textContent = travailUno.Description;
  modalBody.appendChild(p);

  const modalbtns = document.createElement('div');
  modalbtns.classList.add('modalbtns');
  modalBody.appendChild(modalbtns);

  const live = document.createElement('button');
  live.classList.add('modal-btn');
  live.textContent = 'See Live';
  modalbtns.appendChild(live);

  const btnImg = document.createElement('img');
  btnImg.setAttribute('src', 'assets/modal/Union.png');
  live.appendChild(btnImg);

  const source = document.createElement('button');
  live.classList.add('modal-btn');
  live.textContent = 'See source';
  modalbtns.appendChild(live);

  const btnImg2 = document.createElement('img');
  btnImg2.setAttribute('src', 'assets/modal/Vector.png');
  source.appendChild(btnImg2);
  


}
