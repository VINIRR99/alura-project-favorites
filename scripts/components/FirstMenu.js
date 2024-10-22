import HeaderAnchor from "./HeaderAnchor.js";

class FirstMenu {
    constructor(url) {
        const anchors = [
            { name: 'MOVIES', toURL: '?page=list&media=movies&type=all' },
            { name: 'SERIES', toURL: '?page=list&media=series&type=all' },
            { name: 'GAMES', toURL: '?page=list&media=games&type=all' }
        ];

        this.innerHTML = `
    <a
        href="./index.html?page=list&media=all&type=all"
        class="header__nav__first-menu__main-anchor${
            (url === '?page=list&media=all&type=all')
                ? ' header__nav__first-menu__main-anchor__current'
                : ''
        }">
        MY FAVORITES
    </a>
    <div class="header__nav__anchors">
        ${anchors.map(anchor => new HeaderAnchor({
            ...anchor,
            currentURL: url,
            classAtr: 'header__nav__first-menu__anchor'
        }).outerHTML).join('\n')}
    </div>
`
    }
}

export default FirstMenu;