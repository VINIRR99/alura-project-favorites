import HeaderAnchor from "./HeaderAnchor.js";

class SecondMenu {
    constructor({ media, url }) {
        const anchors = [
            { name: 'LIVE ACTION', toURL: `?page=list&media=${media}&type=live+action` },
            { name: 'ANIMATION', toURL: `?page=list&media=${media}&type=animation` },
        ];

        this.innerHTML = `
    <a
        href="./index.html?page=list&media=${media}&type=all"
        class="header__nav__second-menu__main-anchor${
            (url === `?page=list&media=${media}&type=all`)
            ? ' header__nav__second-menu__main-anchor__current'
            : ''
        }">
        ${media.toUpperCase()}
    </a>
    <div class="header__nav__anchors">
        ${anchors.map(anchor => new HeaderAnchor({
            ...anchor,
            currentURL: url,
            classAtr: 'header__nav__second-menu__anchor'
        }).outerHTML).join('\n')}
    </div>
`
    }
}

export default SecondMenu;