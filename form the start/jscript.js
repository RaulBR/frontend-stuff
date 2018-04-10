// window.setInterval(function(){
//     changeTestimonial(1);
//   }, 5000);


//Object litteral pattern 
(function(){
let testimonialPicker = {
    testimonials: getTestimonials(),
    init:function (){
        this.cacheDom();
        this.bindevents();
        this.render(0);
        },
        cacheDom:function(){
           this.selectors = document.getElementsByClassName("picker-position");
           this.teamplate = document.getElementsByClassName("change-testimonial")[0];
           this.navigate = document.getElementsByClassName("info-picker-arow");
            
        },
        bindevents: function(){
            Array.from(this.navigate).forEach(element => {
                element.addEventListener("click", this.changeTestimonial.bind(this));
            });

            Array.from(this.selectors).forEach(element => {
                element.addEventListener("click", this.changeToSpecificTestimonial.bind(this));
            });
      
        },
       render: function(testimonialPozition){
            this.teamplate.innerHTML = `<div class= "testimonial-text" value = "${testimonialPozition}"> 
                                        <p>${this.testimonials[testimonialPozition].text} </p>
                                         </div>
                                         <div class = "testimoniual-autor">
                                         <p class = "autor-text"> ${this.testimonials[testimonialPozition].autorName} </p>
                                        <p class = "autor-ocupation">${this.testimonials[testimonialPozition].ocupation}</p>
                                        </div>  `;
            this.removeSelected();
            this.selectors[testimonialPozition].classList.add('selected');
       },

        changeTestimonial: function(event){
            let direction = event.target.getAttribute('value');
            let maxPosition = Array.from(this.selectors).length - 1;
            let position  = this.teamplate.getElementsByClassName("testimonial-text")[0].getAttribute('value');
          
            let nextVal = parseInt(position) + parseInt(direction); 
            console.log( nextVal);
             if (nextVal < 0) {
                 nextVal = maxPosition
            } else if (nextVal > maxPosition) {
                 nextVal = 0;
            };
           
             this.render(nextVal);
        },

        changeToSpecificTestimonial: function(event){
            let position = event.target.getAttribute('value');
            this.render(position);
        },

        removeSelected: function(){
             Array.from(this.selectors).forEach((selected, index) => {
                if (selected.classList.contains('selected')) {
                     selected.classList.remove('selected');
                     position = index;
                 };
             });
        },

        


};
testimonialPicker.init();

})();

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
        {
            text: `In textul 3 se regasesc secretele universului, pritre ele este si cel mai important dinte ele si anume
                    daca spui un secret, nu mai e secret (numa zic)`,
            autorName: 'Vecin Udelatrei',
            ocupation: 'Trilosov Terodactol'
        }

    ];
    return testimoniales;
}

/// end Object litteral pattern

