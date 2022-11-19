import Burger from './scripts/burger.js';

window.addEventListener('DOMContentLoaded', () => {

    const burger = new Burger(".header__burger", '.menu')
    burger.init()
})