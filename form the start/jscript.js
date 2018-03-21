// window.setInterval(function(){
//     changeTestimonial(1);
//   }, 5000);

function changeTestimonial(direction) {
    let selectors = document.getElementsByClassName("picker-position");
    let position = getRemovedPosition(selectors);
    let pointer =  getNextPosition(position,direction,selectors.length);
    setTestimonialText(pointer);
    //set dot indicator
    selectors[pointer].classList.add('selected');  
}

function getNextPosition(position,direction,length){
    let maxPosition = length - 1;
    let nextVal = position + direction;
    if (nextVal < 0) {
        nextVal = maxPosition
    } else if (nextVal > maxPosition) {
        nextVal = 0;
    }
    return nextVal;
}

function getRemovedPosition(selectors){
    let position;
    Array.from(selectors).forEach((selected, index) => {
        if (selected.classList.contains('selected')) {
            selected.classList.remove('selected');
            position = index;
        };
    }); 
    return position;  
}

function setTestimonialText(pointer) {
    let testimonials = getTestimonials();
    document.getElementsByClassName("testimonial-text")[0].innerHTML = "<p>"+testimonials[pointer].text +"</p>";
    document.getElementsByClassName("autor-text")[0].innerHTML = testimonials[pointer].autorName;
    document.getElementsByClassName("autor-ocupation")[0].innerHTML = testimonials[pointer].ocupation;
}

function getTestimonials() {
    let testimoniales = [
        {
            text: `This is my text. There are many like it, but this one is mine. My text is my best friend. 
                     It is my life. I must master it as I must master my life. Without me, my text is useless. Without my text,
                     I am useless.`,
            autorName: 'Vasile Blaga',
            ocupation: 'Autor in general uneori si filosof'
        },
        {
            text: 'text 1 text 1text 22 222 23 1text 1text 1text 1text 1text 1text 2text 2text 2text 2text 2text 2',
            autorName: 'Bitum Uscat',
            ocupation: 'DIFilozof'
        },
        {   text: `In textul 3 se regasesc secretele unifersului, pritre ele este si cel mai important dinte ele si anume
                    daca spui un secret, nu mai e secret (numa zic)`,
            autorName: 'Vecin Udelatrei',
            ocupation: 'Trilosov Terodactol' }

    ];
    return testimoniales;
}

function goToThisPosition(x){
    let selectors = document.getElementsByClassName("picker-position");
    let position = getRemovedPosition(selectors);
    selectors[x].classList.add('selected');
    setTestimonialText(x);
}
function scroolSmooth() {
    document.getElementsByClassName("background-png")[0]
        .scrollIntoView({
            behavior: 'smooth'
        });
}

function gohere(x){
    let classVal;
    switch (x.innerHTML){
     case "Home":
        classVal = "background-png"
        break;
     case "Services":
         classVal = "service-section"
         break
    case "Testimoniales":
        classVal = "testimoniales"
         break
    case "Contact us":
        classVal ="contacts"
          break
    default:
        classVal = "background-png"
    }
    document.getElementsByClassName(classVal )[0]
    .scrollIntoView({
        behavior: 'smooth'
    });
}


function getMeniu(){
   let nav = document.getElementsByTagName("nav")[0]
   if (!nav.classList.contains("mobileNamv")){
   nav.classList.add("mobileNamv")
   }else{
    nav.classList.remove("mobileNamv")
   }
}