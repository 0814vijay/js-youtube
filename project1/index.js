const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{ 
       // by using if else 
    //    if(e.target.id === 'grey'){
    //     body.style.backgroundColor=e.target.id 
    //    }else if(e.target.id === 'yellow'){
    //     body.style.backgroundColor=e.target.id 
    //    }else if(e.target.id === 'blue'){
    //     body.style.backgroundColor=e.target.id 
    //    }else  {
    //     body.style.backgroundColor=e.target.id 
    //    }

    // by using switch case
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor=e.target.id 
            break;
        case 'yellow':
            body.style.backgroundColor=e.target.id 
            break;
        case 'blue':
            body.style.backgroundColor=e.target.id 
            break; 
    
        default:
            body.style.backgroundColor=e.target.id 
            break;
    }
    })
})