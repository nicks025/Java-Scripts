const YesButton=document.getElementById('Yes');
const NoButton=document.getElementById('No');
const cta=document.querySelector('.buttons');

NoButton.addEventListener('mouseenter', ()=>{
    const YesIndex =Array.from(cta.children).indexOf(YesButton);
    const NoIndex =Array.from(cta.children).indexOf(NoButton);
    if(YesIndex < NoIndex){
        cta.insertBefore(NoButton,YesButton);
    } else{
        cta.insertBefore(YesButton,NoButton);
    }
})