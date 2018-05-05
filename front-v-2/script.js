let picker = (function () {
    //chash Dom
    let listOfPickers = document.querySelectorAll('.frame');
    let arrowPickers = document.querySelectorAll('.arrow');
    const max = [...listOfPickers].length - 1;

    //baind
    Array.from(arrowPickers).forEach(arrow => {
        arrow.addEventListener('click', () => {
            move(event)
        });

    });
    //render
    function render(position) {
        position = position > max ? 0 : (position < 0 ? max : position);
        listOfPickers[position].classList.remove('hide');
    }

    function move(event) {
        event.stopPropagation();
        let direction = event.target.getAttribute('value');
        let position = 0;
        Array.from(listOfPickers).forEach((pic, index) => {

            if (!pic.classList.contains('hide')) {
                pic.classList.add('hide')
                position = index;

            }

        });

        position = parseInt(position) + parseInt(direction);

        render(position);

    }
    // 
    // 


})();

let popup = (function () {

    //chashDOM
    let popup = document.querySelector('.photo-viewer');
    let grey = popup.querySelector('.background-blur');
    let pictures = popup.querySelectorAll('.view');
    let arrows = popup.querySelectorAll('.arrow-view');
    let sorcePictures = document.querySelectorAll('.picture>img');
    const max = [...pictures].length - 1;

    //bind
    [...sorcePictures].forEach(picture => {
        picture.addEventListener('click', () => {
            showPopup(event);
        });
    });
    grey.addEventListener('click', () => {
        colsePopup()
    });

    [...arrows].forEach(arrow => {
        arrow.addEventListener('click', () => {
            movePicture(event);
        });
    });
    //render
    function renderPicture(renderNr) {
 
        [...pictures].forEach(picture => {
            picture.classList.add('hide');
        });
        pictures[renderNr].classList.remove('hide');
    }

    function renderPopup(value) {
        value === 1 ? popup.classList.remove('hide') : popup.classList.add('hide');;
    }

    //services
    function movePicture(event) {
     
        let direction = event.target.getAttribute('value');
        let position = 0;
        Array.from(pictures).forEach((pic, index) => {
            if (!pic.classList.contains('hide')) {
                position = index;
            }
        });
        position = parseInt(position) + parseInt(direction);
        position = position > max ? 0 : (position < 0 ? max : position);
        renderPicture(position);
    }

    function showPopup(event) {
        renderPopup(1);
        renderPicture(parseInt(event.target.getAttribute('value')));
    }

    function colsePopup() {
        renderPopup(-1);
    }


})()