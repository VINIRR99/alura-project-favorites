class HeaderAnchor {
    constructor({ name, toURL, currentURL, classAtr }) {
        this.outerHTML = `<a
    href="./index.html${toURL}"
    class="${classAtr}${(currentURL === toURL)
        ? ` ${classAtr}__current`
        : ''
    }">
    ${name}
</a>`
    }
}

export default HeaderAnchor;