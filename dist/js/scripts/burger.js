export default class Burger {
    constructor(BurgerSelector = '', activeSelector= '', MenuSelector){
        this.burger = document.querySelector(BurgerSelector);
        this.menu = document.querySelector(MenuSelector);
    }

    init(){
        this.burger.addEventListener('click', () =>{
            this.burger.classList.toggle('burger__active')
        })
    }
}
