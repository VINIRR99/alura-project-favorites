import { CreateElement } from "../utils.js";

class Card extends CreateElement {
    constructor({ title, img, type }) {
        super(`<div>
            <div class="content__container__img-holder">
                <a
                    href="./index.html?page=title&media=${
                        type.media
                    }&title=${
                        title.split(' ').join('+')
                    }">
                    <img
                        src="${img.url}"
                        alt="${title} poster"
                        class="content__container__img-holder__img">
                </a>
            </div>
            <p>
                Image from
                <a
                    href="${img.locationCaptionUrl}"
                    target="_blank"
                    class="content__container__anchor">
                    ${img.locationCaptionName}
                </a>
            </p>
        </div>`)
    }
}

export default Card;