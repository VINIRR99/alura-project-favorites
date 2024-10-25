import { CreateElement } from "../utils.js";

class ListItem extends CreateElement {
    constructor({ content, url }) {
        super(`<li>
            <a
                href="${url}"
                target="_blank"
                class="anchor">
                ${content}
            </a>
        </li>`)
    }
}

export default ListItem;