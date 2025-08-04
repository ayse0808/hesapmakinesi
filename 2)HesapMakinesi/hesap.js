const display=document.querySelector('#display');
const buttons = document.querySelectorAll('.buttons button');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
      const  butonYazisi=buttons[i].textContent;
      
      if (butonYazisi === 'C') {
  display.value = '';
} else if (butonYazisi === '=') {
  display.value = eval(display.value);
} else {
  display.value += butonYazisi;
}

    } )
}