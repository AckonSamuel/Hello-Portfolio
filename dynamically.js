/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const projects = [
  {
    title: 'Project name goes here',
    src: 'assets/work/work_one.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velitcorrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi error utvoluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilisdignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsafacere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborumminus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserunttenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_two.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velit corrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi error ut voluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilis dignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsam facere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborum minus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserunt tenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_three.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velit corrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi error utvoluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilisdignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsam facere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborum minus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserunttenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_four.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velit corrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi error ut voluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilis dignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsam facere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborum minus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserunt tenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_five.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velit corrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi err voluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilis dignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsam facere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborum minus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserun tenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_six.png',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet velit corrupti saepe, in eos est corporis nihil excepturi magnam unde nisi eligendi error ut voluptatum odit rem? Fugiat nisi sed sapiente ullam asperiores omnis.', 'Eos facilis dignissimos hic saepe? Mollitia excepturi fugiat unde praesentium blanditiis! Illum ipsam facere nesciunt accusamus fugit officia perspiciatis et, eligendi in. Nobis aut non laborum minus est, cupiditate commodi ipsam debitis eius quis praesentium quam corrupti deserunt tenetur accusamus magni saepe ipsum quo.'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
];

const AllButtons = document.getElementsByClassName('project-view');
const work = document.querySelector('body');
const popUp = document.createElement('section');
popUp.classList.add('modal');
const getModal = document.querySelector('.modal');
function popUpMobile(cardNumber) {
  popUp.style.display = 'block';
  work.appendChild(popUp);
  popUp.innerHTML = `
      <div class="modal" id="modal">
      <div class="modal-header">
    <div id="closebox" ><img src="assets/menu/Union.png" id="closeup" alt="close"></div> 
          <h3 class="title">${projects[cardNumber].title}</h3>
      
        <div class="modal-body">
        <ul class="model-tech">
        <li>${projects[cardNumber].technologies[0]}</li>
        <li>${projects[cardNumber].technologies[1]}</li>
        <li>${projects[cardNumber].technologies[2]}</li>
    </ul>
    <div class="project photo">
          <img src=${projects[cardNumber].src}  class="work-one" alt="first project image">
        </div>
        <div class="modal-description">
          <p>${projects[cardNumber].description[0]}</p>
          <p>${projects[cardNumber].description[1]}</p>
        </div>
        <div class="modalbtns">
        <button class="modal-btn">
        See live
        <img src="assets/modal/Union.png" alt="see live">
    </button>
    <button class="modal-btn">
    See source
    <img src="assets/modal/Vector.png" alt="see source">
  </button>
        </div>
      </div>
      </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'closeup') {
      popUp.style.display = 'none';
      getModal.style.display = 'none';
    }
  });
}

for (let i = 0; i < AllButtons.length; i += 1) {
  //   AllButtons[i].addEventListener('click', () => {
  //     popUpDesktop(i);
  //   });
  AllButtons[i].addEventListener('click', () => {
    popUpMobile(i);
  });
}