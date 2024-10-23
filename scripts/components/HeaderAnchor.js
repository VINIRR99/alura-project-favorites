import { CreateElement } from "../utils.js";

class HeaderAnchor extends CreateElement {
    constructor({ name, toURL, currentURL, classAtr }) {
        super(`<a
            href="./index.html${toURL}"
            class="${classAtr}${(currentURL === toURL)
                ? ` ${classAtr}__current`
                : ''
            }">
            ${name}
        </a>`)
    }
}

export default HeaderAnchor;