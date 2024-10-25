import { CreateElement } from "../utils.js";

class Card extends CreateElement {
    constructor({ title, img, type }) {
        super(`<div>
            <div class="content__container__img-holder">
                <a
                    href="./index.html?page=title&media=${
                        type.media
                    }&title=${
                        encodeURIComponent(title)
                            .replaceAll('%20', '+')
                            .replaceAll('%3A', ':')
                            .replaceAll('%2C', ',')
                            .replaceAll("'", '%27')
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