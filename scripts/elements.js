import { CreateElement } from "./utils.js";
import SecondMenu from "./components/SecondMenu.js";
import HeaderSpace from "./components/HeaderSpace.js";

class SecondMenuEl extends CreateElement {
    constructor({ media, url }) {
        super({
            element: 'section',
            classAtr: 'header__nav__second-menu',
            innerHTML: new SecondMenu({ media, url }).innerHTML
        })
    }
}

class HeaderSpaceEl extends CreateElement {
    constructor() {
        super({
            element: 'div',
            classAtr: 'header__space',
            innerHTML: new HeaderSpace().innerHTML
        })
    }
}

export { SecondMenuEl, HeaderSpaceEl };