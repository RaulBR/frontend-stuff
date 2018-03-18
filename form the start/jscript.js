window.setInterval(function(){
    changeTestimonial(1);
  }, 5000);
  
changeTestimonial = (direction) =>{
    let selectors = document.getElementsByClassName("picker-position");
    let celardValue = clearPoint(selectors);  
    let pointer =   celardValue + direction;
     if(pointer <  0){
            pointer = selectors.length - 1
     }  else if (pointer >selectors.length - 1){
            pointer  = 0;
     }
     selectors[pointer].outerHTML = '<div class= "picker-position  selected"></div>';
     setTestimonialText(pointer);
}

let  setTestimonialText = (pointer)=>{
    let testimonials = getTestimonials();
     document.getElementsByClassName("testimonial-text")[0].innerHTML = '<p>'+ testimonials[pointer].text +'</p>'
     document.getElementsByClassName("autor-text")[0].innerHTML =   testimonials[pointer].autorName 
     document.getElementsByClassName("autor-ocupation")[0].innerHTML = testimonials[pointer].ocupation 

}

let clearPoint = (selectors)=>{
   
  
    for(let i = 0; i < selectors.length; i++){
        if (selectors[i].className === "picker-position  selected"){
           selectors[i].outerHTML = '<div class= "picker-position"></div>';
            return i;
        
        }
    }
}

let getTestimonials=()=>{
    let testimoniales = [
        {text:`This is my text. There are many like it, but this one is mine. My text is my best friend. 
        It is my life. I must master it as I must master my life. Without me, my text is useless. Without my text,
         I am useless.`,
             autorName:'Vasile Blaga',
            ocupation:'Autor in general uneori si filosof'},
        {text:'text 1 text 1text 22 222 23 1text 1text 1text 1text 1text 1text 2text 2text 2text 2text 2text 2',
            autorName:'Bitum Uscat',
         ocupation:'DIFilozof'},
        {text:'In textul 3 se regasesc secretele unifersului, pritre ele este si cel mai important dinte ele si anume: daca spui un secret, nu mai e secret (numa zic) ',autorName:'Vecin Udelatrei',ocupation:'Trilosov Terodactol'}

    ];
    return testimoniales;


}

let scroolSmooth = ()=>{
    
      document.getElementsByClassName("background-png")[0]
      .scrollIntoView({
            behavior :'smooth'
      });

}
