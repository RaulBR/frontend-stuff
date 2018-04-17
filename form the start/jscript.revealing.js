let testimonialPicker = (function () {
    //chash Dom
    let changeTestimonialChash = document.querySelector('.change-testimonial');
    let templates = changeTestimonialChash.querySelectorAll(".template");
    let selectors = document.querySelectorAll(".picker-position");
    let navigate = document.querySelectorAll(".info-picker-arow span");
    const maxPosition = [...selectors].length - 1;
    //bind events
    [...navigate].forEach(element => {
        element.addEventListener("click", () => {
            changeTestimonialByOne(event)
        });
    });
    [...selectors].forEach(element => {
        element.addEventListener("click", () => {
            changeToSpecificTestimonial(event)
        });
    });
    //render 
    function render(testimonialPozition) {
        removeSelected();
        if (testimonialPozition < 0) {
            testimonialPozition = maxPosition
        } else if (testimonialPozition > maxPosition) {
            testimonialPozition = 0;
        };
        selectors[testimonialPozition].classList.add('selected');
        setTestimomialTeamplate(testimonialPozition);
    }
    //services
   function  changeTestimonialByOne(event) {
        event.stopPropagation();
        let direction = event.target.getAttribute('value');
        render(getnextVal(direction));
    }
    function changeToSpecificTestimonial(event) {
        let position = event.target.getAttribute('value');
        render(position);
    }
    function removeSelected () {
        [...selectors].forEach(selected => selected.classList.contains('selected') ? selected.classList.remove('selected') : '');
    }
    function setTestimomialTeamplate(testimonialPozition){
        [...templates].forEach((template, index) => {
            let templateIn = templates[index].classList;
            (parseInt(testimonialPozition) === index ? templateIn.remove("hide") : templateIn.add("hide"));
        });
    }
    function getnextVal(direction){
        let position = [...templates].findIndex(teamplate => {
            return !teamplate.classList.contains("hide");
        });
        return nextVal = parseInt(position) + parseInt(direction);
    }
    //returns
    function renderNext() {
        render(getnextVal(1));
    }
    function renderPrevious(){
        render(getnextVal(-1));
    }
   function  renderAny(pozition){
        render(pozition);
    }
    return {
        renderNext: renderNext,
        renderPrevious: renderPrevious,
        renderAny: renderAny
    }
})();