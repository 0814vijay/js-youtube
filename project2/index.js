const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const bmiResult=document.querySelector('#bmiResult');
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please Enter Valid Height : ${height}`
    } else  if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please Enter Valid weight : ${weight}`
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML=`<span> ${bmi} </span>`
        if(bmi){
            switch (bmi) {
                case bmi < 18.6:
                    bmiResult.innerHTML="Under Weight" 
                    break;
                case bmi < 18.6 && 24.6:
                    bmiResult.innerHTML="Normal Weight" 
                    break; 
                default:
                    bmiResult.innerHTML="Over Weight" 
                    break;
            }
        }
    }
   
})