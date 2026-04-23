let grid = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
  let sq = document.createElement('div');
  sq.className = 'square';

	sq.addEventListener('mouseover',()=>{
		const color = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`;
		sq.style.backgroundColor=color;

	
	})
	sq.addEventListener('mouseout',()=>{
		sq.style.backgroundColor='rgb(29,29,29)';
		sq.style.transition="background-color 1s";
		
	})
  grid.appendChild(sq); 
}