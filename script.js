const body = document.querySelector('body');
const player = document.querySelector('#player');
let currentPositionY = parseInt(window.getComputedStyle(player).bottom);
let currentPositionX = parseInt(window.getComputedStyle(player).left);
let instruction= document.querySelector('h5')


window.addEventListener('load', ()=> {
 
instruction.classList.add('load')
instruction.classList.remove('unload')


setTimeout(() => {
    
  instruction.classList.add('unload')
  instruction.classList.remove('load')
 
}, 4000);


})

body.addEventListener('keydown', (e) => {
  playMove(e.key);
 
  instruction.classList.add('unload')
  instruction.classList.remove('load')
});

function playMove(position) {
  if (position === 'ArrowUp') {
    currentPositionY += 10;
    player.style.bottom = currentPositionY + 'px';
  } else if (position === 'ArrowDown') {
    currentPositionY -= 10;
    player.style.bottom = currentPositionY + 'px';
  } else if (position === 'ArrowLeft') {
    currentPositionX -= 10;
    player.style.left = currentPositionX + 'px';
  } else if (position === 'ArrowRight') {
    currentPositionX += 10;
    player.style.left = currentPositionX + 'px';
  }
}

 