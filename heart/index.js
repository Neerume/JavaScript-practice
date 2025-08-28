const container = document.getElementById('heart-container');

for(let i=0; i<100; i++){
  const hearts = document.createElement('div');
  hearts.classList.add('hearts');
  hearts.style.top= Math.random()*100 +'%';
  hearts.style.left= Math.random()*100 +'%';
  hearts.style.position='absolute';

  hearts.style.animation= `beat ${Math.random()*3+1}s linear infinite`;

  container.appendChild(hearts);
}