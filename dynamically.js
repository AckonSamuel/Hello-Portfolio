/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable max-len */
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
popUp.classList.add('modalD');
const prosec = document.querySelector('#works');

const subzero = document.createElement('div');
subzero.classList.add('project-name');
subzero.style.display = 'block';
prosec.appendChild(subzero);

subzero.innerHTML = `
<div class="project-name">
<h2>Projects</h2>
</div>`;

const one = document.createElement('div');
one.classList.add('work', 'one');
one.style.display = 'block';
prosec.appendChild(one);

const two = document.createElement('div');
two.classList.add('work', 'two');
two.style.display = 'block';
prosec.appendChild(two);

const three = document.createElement('div');
three.classList.add('work', 'three');
three.style.display = 'block';
prosec.appendChild(three);

const four = document.createElement('div');
four.classList.add('work', 'four');
four.style.display = 'block';
prosec.appendChild(four);

const five = document.createElement('div');
five.classList.add('work', 'five');
five.style.display = 'block';
prosec.appendChild(five);

const six = document.createElement('div');
six.classList.add('work', 'six');
six.style.display = 'block';
prosec.appendChild(six);

const vreds = document.querySelector('.three');
const vreds1 = document.querySelector('.four');
const vreds2 = document.querySelector('.five');
const vreds4 = document.querySelector('.one');
const vreds5 = document.querySelector('.two');
const vreds6 = document.querySelector('.six');

vreds.style.display = 'inherit';
vreds1.style.display = 'inherit';
vreds2.style.display = 'inherit';

// vreds4.style.display = 'inherit';
vreds5.style.display = 'inherit';
vreds.style.display = 'inherit';

vreds.innerHTML = `
                <div class="project photo"><img src=${projects[3].src} class="work-one"
                        alt="project image three"></div>
                <div class="project summary">
                    <div class="namep">
                        <h3>Project name goes here</h3>
                    </div>
                    <div class="technology">
                        <ul class="hello">
                            <li class="maybe">HTML/CSS</li>
                            <li class="maybe">Ruby on rails</li>
                            <li class="maybe">JavaScript</li>
                        </ul>
                    </div>
                    <button class="project-view">
                        See this project
                        <img src="assets/work/Union.png" class="arrow" alt="#">
                    </button>

                </div>
            </div>`;

vreds1.innerHTML = `<div class="project photo"><img src=${projects[4].src} class="work-one"
alt="project image four"></div>
<div class="project summary">
<div class="namep">
<h3>Project name goes here</h3>
</div>
<div class="technology">
<ul class="hello">
    <li class="maybe">HTML/CSS</li>
    <li class="maybe">Ruby on rails</li>
    <li class="maybe">JavaScript</li>
</ul>
</div>
<button class="project-view" id="card-4">
See this project
<img src="assets/work/Union.png" class="arrow" alt="#">
</button>

</div>`;

vreds2.innerHTML = `
<div class="project photo"><img src=${projects[5].src} class="work-one"
                        alt="project image five"></div>
                <div class="project summary">
                    <div class="namep">
                        <h3>Project name goes here</h3>
                    </div>
                    <div class="technology">
                        <ul class="hello">
                            <li class="maybe">HTML/CSS</li>
                            <li class="maybe">Ruby on rails</li>
                            <li class="maybe">JavaScript</li>
                        </ul>
                    </div>
                    <button class="project-view" id="card-4">
                        See this project
                        <img src="assets/work/Union.png" class="arrow" alt="#">
                    </button>

                </div>`;

vreds4.innerHTML = `
<div class="project photo">
<img src="${projects[0].src}" class="work-one" alt="first project image">
</div>
<div class="project summary desksum">
<div class="namep namedesk">
    <h3>Project name goes here</h3>
</div>
<div class="technology techdesk">
    <ul class="hello hellodesk">
        <li class="maybe">HTML/CSS</li>
        <li class="maybe">Ruby on rails</li>
        <li class="maybe">JavaScript</li>
    </ul>
</div>
<button id="card-1" class="project-view viewdesk">
    See this project
    <img src="assets/work/Union.png" class="arrow arrowdesk" alt="#">
</button>
</div>
`;
vreds5.innerHTML = `
<div class="option left"></div>
                <div class="option middle"></div>
                <div class="option right">
                    <div class="man">
                        <h3>Project name goes...</h3>
                        <ul class="hellso">
                            <li class="maybe">HTML/CSS</li>
                            <li class="maybe">Ruby on rails</li>
                            <li class="maybe">+1</li>
                        </ul>
                        <div class="being">
                            <button id="card-2" class="project-view viewdesk">
                                See this project
                                <img src="assets/work/Union.png" class="arrow arrowdesk" alt="#">

                            </button>
                        </div>
                    </div>

                </div>
                <div class="option rightdown"></div>
                <div class="option leftdown"></div>
                <div class="option cornerback"></div>
                <div class="option lk"></div>
                <div class="option blowman"></div>

                <div class="project photo">
                    <img src=${projects[1].src} class="work-one" alt="second project image">
                </div>
                <div class="project summary">
                    <div class="namep">
                        <h3>Project name goes here</h3>
                    </div>
                    <div class="technology">
                        <ul class="hello">
                            <li class="maybe">HTML/CSS</li>
                            <li class="maybe">Ruby on rails</li>
                            <li class="maybe">JavaScript</li>
                        </ul>
                    </div>
                    <button class="project-view">
                        See this project
                        <img src="assets/work/Union.png" class="arrow" alt="#">

                    </button>
                </div>
`;

vreds6.innerHTML = `
<div class="project photo"><img src=${projects[6].src} class="work-one"
                        alt="project image five"></div>
                <div class="project summary">
                    <div class="namep">
                        <h3>Project name goes here</h3>
                    </div>
                    <div class="technology">
                        <ul class="hello">
                            <li class="maybe">HTML/CSS</li>
                            <li class="maybe">Ruby on rails</li>
                            <li class="maybe">JavaScript</li>
                        </ul>
                    </div>
                    <button class="project-view" id="card-4">
                        See this project
                        <img src="assets/work/Union.png" class="arrow" alt="#">
                    </button>

                </div>`;
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
    <button class="directPhoto linkupi desktt"><img src="assets/modal/vectorLeft.png" alt="previous"></button>
          <button class="directPhoto linkdowni desktt"><img src="assets/modal/vectorRight.png" alt="next"></button>
 <div class="project photo uilo">
          <img src=${projects[cardNumber].src}  class="work-one kli" alt="first project image">
          <img src=${projects[cardNumber].src}  class="work-one hy" alt="first project image">
          <img src=${projects[cardNumber].src}  class="work-one hi" alt="first project image">
          <img src=${projects[cardNumber].src}  class="work-one ji" alt="first project image">
          <img src=${projects[cardNumber].src}  class="work-one lp" alt="first project image">

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
        <div class="squad">
        
          <button class="lastLeft">
          <img class="toLeft" src="assets/modal/UnionPrevious.png">
        Previous project</button>
        <button class="lastRight">
        Next project
        <img class="toLeft" src="assets/modal/UnionNext.png">
        </button>

      </div>
      </div>
      <div class="backcontainer"></div>
      </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'closeup') {
      popUp.style.display = 'none';
    }
  });

  document.querySelector('.lastRight').addEventListener('click', () => {
    cardNumber += 1;
    if (cardNumber === 2) {
      cardNumber += 1;
    }
    if (cardNumber > 7) { cardNumber = 0; }
    popUpMobile(cardNumber);
    return null;
  });

  document.querySelector('.lastLeft').addEventListener('click', () => {
    cardNumber -= 1;
    if (cardNumber === 2) { cardNumber -= 1; }
    if (cardNumber < 0) { cardNumber = 6; }
    popUpMobile(cardNumber);
    return null;
  });
}

for (let i = 0; i < projects.length; i += 1) {
  AllButtons[i].addEventListener('click', () => {
    if (AllButtons.length === 2) {
      if (i === 0) { popUpMobile(i); } else {
        popUpMobile(6);
      }
    } else {
      popUpMobile(i);
    }
  });
}
