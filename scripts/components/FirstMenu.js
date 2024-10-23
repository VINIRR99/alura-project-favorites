import { CreateElement } from "../utils.js";
import HeaderAnchor from "./HeaderAnchor.js";

class FirstMenu extends CreateElement {
    constructor(url) {
        const anchors = [
            { name: 'MOVIES', toURL: '?page=list&media=movie&type=all' },
            { name: 'SERIES', toURL: '?page=list&media=serie&type=all' },
            { name: 'GAMES', toURL: '?page=list&media=game&type=all' }
        ];

        super(`<section class="header__nav__first-menu">
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
        </section>`)
    }
}

export default FirstMenu;