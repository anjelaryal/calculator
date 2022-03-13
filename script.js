let display = document.getElementById('display');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(buttons =>{
    buttons.addEventListener('click', (e)=>{
       switch(e.target.innerHTML){
           case 'C':
               display.innerHTML = '';
                break;
            case '←':
                display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
                break;
            case '=':
                try{
                    display.innerHTML = eval(display.innerHTML);
                }
                catch{
                    display.innerHTML = 'Error';
                }
                break;
           default:
               display.innerText += e.target.innerHTML;
            }
        });
    
});