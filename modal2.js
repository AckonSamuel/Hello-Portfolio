/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const projects = [
  {
    title: 'Project name goes here',
    src: 'assets/work/work_one.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_two.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_three.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_four.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_five.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Project name goes here',
    src: 'assets/work/work_six.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
];

const AllButtons = document.getElementsByClassName('project-view');
const work = document.querySelector('body');
const popUp = document.createElement('section');
popUp.classList.add('modal');
function popUpMobile(cardNumber) {
  popUp.style.display = 'block';
  work.appendChild(popUp);
  popUp.innerHTML = `
    <div class="modal" id="modal">
    <div class="modal-header">
  <div id="close-popUp"><img src="assets/menu/Union.png" alt="close"></div> 
        <h3>${projects[cardNumber].title}</h3>
      </div>
      <div class="modal-body">
      <ul class="model-tech">
      <li>${projects[cardNumber].technologies[0]}</li>
      <li>${projects[cardNumber].technologies[1]}</li>
      <li>${projects[cardNumber].technologies[2]}</li>
  </ul>
  <div class="project photo">
        <img src=${projects[cardNumber].src} alt="App Image">
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
    if (event.target.id === 'close-popUp') {
      popUp.style.display = 'none';
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