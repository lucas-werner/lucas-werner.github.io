window.onload = function (){
  let cores = document.getElementsByClassName('color');
  this.console.log(cores)

  for (let i = 0; i < cores.length; i++){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    cores[i].style.backgroundColor = bgColor;
    
  }

  let chosenRGB = Math.floor(Math.random() * 5);
  let cor = cores[chosenRGB].style.backgroundColor;
  let rgb = document.getElementById('rgb')
  rgb.innerHTML  = cor
  
  
let boxColor = document.getElementById('boxColors')
 boxColor.addEventListener('click', function(){
   if (event.target.style.backgroundColor == cor) {
      let answer = document.getElementById('answer')
      answer.innerHTML = 'Parabéns, você é incrível.'   
      alert('OH YEAAAAA!')
      } else {
      answer.innerHTML = 'Tente outra vez.'
      alert('OH NOOOO!!')
      }
    })
}
