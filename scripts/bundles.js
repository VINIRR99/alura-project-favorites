import { dataHandler, CapturedElement } from "./utils.js";
import StylesheetLink from "./components/StylesheetLink.js";
import FirstMenu from "./components/FirstMenu.js";
import SecondMenu from "./components/SecondMenu.js";
import HeaderSpace from "./components/HeaderSpace.js";
import CardContainer from "./components/CardContainer.js";
import Card from "./components/Card.js";
import Media from "./components/Media.js";

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
        
        if ((media === 'movie') || (media === 'serie')) {
            new CapturedElement({
                querySelector: '.header__nav',
                append: {
                    element: new SecondMenu({ media, url: url.search }).element,
                    pos: 'last' 
                }
            })
        
            new CapturedElement({
                querySelector: '.header',
                append: { element: new HeaderSpace().element, pos: 'last' }
            })
        }
        
        new CapturedElement({
            querySelector: '.header__space h1',
            innerHTML: title.toUpperCase()
        })
    }
}

class Content {
    constructor(url) {
        new CapturedElement({
            querySelector: 'head',
            append: { element: new StylesheetLink('content.css').element, pos: 'last' }
        })

        const media = url.searchParams.get('media');
        const type = url.searchParams.get('type');

        (async () => {
            const content = await new CapturedElement({
                querySelector: 'main',
                classAtr: 'content',
                innerHTML: new CardContainer().outerHTML
            }).element.querySelector('.content__container')

            if ((media === 'all') && (type === 'all')) {
                const medias = await dataHandler.getSpecificData(['title', 'img', 'type']);

                content.innerHTML = await medias.map(card => {
                    return new Card(card).outerHTML
                }).join('\n')
            } else {
                const medias = await dataHandler.getFilteredData({
                    media,
                    type,
                    keys: ['title', 'img', 'type']
                })

                content.innerHTML = await medias.map(card => {
                    return new Card(card).outerHTML
                }).join('\n')
            }
        })()
    }
}

class Info {
    constructor(url) {
        new CapturedElement({
            querySelector: 'head',
            append: { element: new StylesheetLink('info.css').element, pos: 'last' }
        })

        const title = url.searchParams.get('title');
        
        (async () => {
            const info = new CapturedElement({
                querySelector: 'main',
                classAtr: 'info'
            })

            const media = await dataHandler.getOneData({ title, excludKeys: ['type'] });
            info.innerHTML = new Media({...await media}).innerHTML;
        })()
    }
}

class Main {
    constructor(url) {
        (async () => {
            const page = url.searchParams.get('page');

            switch (page) {
                case 'list':
                    new Content(url);
                    break;
                case 'title':
                    new Info(url);
            }
        })()
    }
}

export { Title, Header, Main };