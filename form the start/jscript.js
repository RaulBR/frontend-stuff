//Object litteral pattern ""
(() => {
    "use strict"
    let testimonialPicker = {

        init() {
            this.cacheDom();
            this.eventBindings();
        },
        cacheDom() {
            this.changeTestimonialChash = document.querySelector('.change-testimonial');
            this.templates = this.changeTestimonialChash.querySelectorAll(".template");
            this.selectors = document.querySelectorAll(".picker-position");
            this.navigate = document.querySelectorAll(".info-picker-arow span");
        },
        eventBindings() {
            [...this.navigate].forEach(element => {
                element.addEventListener("click", ()=>{this.changeTestimonialArrow(event)});
            });
            [...this.selectors].forEach(element => {
                element.addEventListener("click",()=>{this.changeToSpecificTestimonial(event)});
            });
        },
        render(testimonialPozition) {
            this.removeSelected();
            this.selectors[testimonialPozition].classList.add('selected');
            this.setTestimomialTeamplate(testimonialPozition);
        },
        setTestimomialTeamplate(testimonialPozition) {
            [...this.teamplates].forEach((teamplate, index) => {
                (parseInt(testimonialPozition) === index ?  this.teamplates[index].classList.remove("hide") : this.teamplates[index].classList.add("hide"))
            });
        },
        changeTestimonialArrow(event) {
            // event.stopPropagation();
            let direction = event.target.getAttribute('value');
            let maxPosition = Array.from(this.selectors).length - 1;
            let position = Array.from(this.teamplates).findIndex(teamplate => {
                return !teamplate.classList.contains("hide");
            });
            let nextVal = parseInt(position) + parseInt(direction);
            if (nextVal < 0) {
                nextVal = maxPosition
            } else if (nextVal > maxPosition) {
                nextVal = 0;
            };
            this.render(nextVal);
        },
        changeToSpecificTestimonial(event) {
            let position = event.target.getAttribute('value');
            this.render(position);
        },
        removeSelected() {
            [...this.selectors].forEach(selected => selected.classList.contains('selected') ? selected.classList.remove('selected'):'')
        },



    };
    testimonialPicker.init();

})();


/// end Object litteral pattern