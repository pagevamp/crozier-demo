import 'popper.js';
import 'bootstrap/js/dist/modal';
// import { swiper } from './slider';
import { openClose } from './openClose';
import { burgerMenu } from './burger-menu';
import { validation } from './validation';
// import Dropdown from 'bootstrap/js/dist/dropdown';
import jcf from 'jcf/js/jcf';
import select from 'jcf/js/jcf.select';
// import 'bootstrap/js/dist/dropdown';





class global {
    constructor() {
        this.myModal = document.getElementById('exampleModal')
        validation();
        // this.slider();
        openClose();
        burgerMenu();
    }
    
    slider () {
        swiper();
    }
}

export default global;
new global();

