
//Object litteral pattern ""
(function () {
    "use strict"
    let testimonialPicker = {

        init: function () {
            this.cacheDom();
            this.eventBindings();
        },
        cacheDom: function () {
            this.selectors = document.getElementsByClassName("picker-position");
            this.changeTestimonialChash = document.getElementsByClassName("change-testimonial")[0];
            this.teamplates = this.changeTestimonialChash.getElementsByClassName("teamplate");
            this.navigate = document.getElementsByClassName("info-picker-arow");
        },
        eventBindings: function () {
            Array.from(this.navigate).forEach(element => {
                element.addEventListener("click", this.changeTestimonial.bind(this));
            });
            Array.from(this.selectors).forEach(element => {
                element.addEventListener("click", this.changeToSpecificTestimonial.bind(this));
            });
        },
        render: function (testimonialPozition) {
            this.removeSelected();
            this.selectors[testimonialPozition].classList.add('selected');
            this.setTestimomialTeamplate(testimonialPozition);
        },
        setTestimomialTeamplate: function (testimonialPozition) {
             Array.from(this.teamplates).forEach((teamplate, index) => {
                if (parseInt(testimonialPozition) === index) {
                    this.teamplates[index].classList.remove("hide");
                } else {
                    this.teamplates[index].classList.add("hide");
                }
            });
        },
        changeTestimonial: function (event) {
            let direction = event.target.getAttribute('value');
            let maxPosition = Array.from(this.selectors).length - 1;
            let position = Array.from(this.teamplates).findIndex((teamplate) => {
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
        changeToSpecificTestimonial: function (event) {
            let position = event.target.getAttribute('value');
            this.render(position);
        },
        removeSelected: function () {
            Array.from(this.selectors).forEach((selected, index) => {
                if (selected.classList.contains('selected')) {
                    selected.classList.remove('selected');
                 };
            });
        },




    };
    testimonialPicker.init();

})();


/// end Object litteral pattern

