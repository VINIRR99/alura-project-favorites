import { CapturedElement } from "./utils.js";
import FirstMenu from "./components/FirstMenu.js";
import { SecondMenuEl, HeaderSpaceEl } from "./elements.js";

class Title {
    constructor(title) {
        new CapturedElement({
            querySelector: 'title',
            innerHTML: title
        })
    }
}

class Header {
    constructor(title, url) {
        const media = url.searchParams.get('media');

        new CapturedElement({
            querySelector: '.header__nav__first-menu',
            innerHTML: new FirstMenu(url.search).innerHTML
        })
        
        if ((media === 'movies') || (media === 'series')) {
            new CapturedElement({
                querySelector: '.header__nav',
                append: {
                    element: new SecondMenuEl({ media, url: url.search }).element,
                    pos: 1 
                }
            })
        
            new CapturedElement({
                querySelector: '.header',
                append: { element: new HeaderSpaceEl().element, pos: 2 }
            })
        }
        
        new CapturedElement({
            querySelector: '.header__space h1',
            innerHTML: title.toUpperCase()
        })
    }
}

export { Title, Header };