import { CreateElement } from "../utils.js";
import ListItem from "./ListItem.js";

class JobItem extends CreateElement {
    constructor({ title, crewMembers }) {
        const correctTitle = (crewMembers.length === 1) ? title.slice(0, -1) : title;

        super(`<li>
            <h2 class="info__article__title">${correctTitle}:</h2>
            ${(crewMembers.length === 1) ?
                `<a
                    href="${crewMembers[0].page}"
                    target="_blank"
                    class="anchor">
                    ${crewMembers[0].name}
                </a>` :
                `<ul>
                    ${crewMembers.map(({ name, page }) => new ListItem({
                        content: name,
                        url: page
                    }).outerHTML).join('\n')}
                </ul>`
            }
        </li>`)
    }
}

export default JobItem;