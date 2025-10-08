const form = document.querySelector('form')
const existingGuideDiv = document.querySelector('#weight-Guide'); 

form.addEventListener('submit' , function(e){
    e.preventDefault()
   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const result =  document.querySelector('#result');
     const previousMessage = existingGuideDiv.querySelector('.dynamic-message');
    if (previousMessage) {
        previousMessage.remove();
    }
   
if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = "please give a valid height";
}else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML = "please give a valid weight";
}else{
  const bmi =   (weight/((height*height)/10000)).toFixed(2);
  result.innerHTML = `<span>${bmi}</span>`;

  let guideMessage = '';

        if (bmi < 18.6) {
            guideMessage = "You are **Under Weight**";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            guideMessage = "You have a **Normal Weight**";
        } else { bmi > 24.9
            guideMessage = "You are **Over Weight**";
        }
         const dynamicGuide = document.createElement('p');
        dynamicGuide.innerHTML = guideMessage;
        dynamicGuide.style.marginTop = '15px';
        dynamicGuide.style.fontSize = '1.1rem';
        dynamicGuide.style.fontWeight = 'bold';
           existingGuideDiv.appendChild(dynamicGuide);
    }


});