import { CreateElement } from "../utils.js";
import ListItem from "./ListItem.js";
import JobItem from "./JobItem.js";

class Media extends CreateElement {
    constructor({ title, trailer, synopsis, wikiPage, mainCrew, img }) {
        const mainCrewKeys = Object.keys(mainCrew);
        const mainCrewValues = Object.values(mainCrew);

        const correctMainCrew = mainCrewKeys.map((key, i) => {
            return { title: key, crewMembers: mainCrewValues[i] }
        })

        super(`<main class="info">
            <article class="info__article">
                <h1 class="info__article__title">
                    ${title}
                </h1>
                <section class="info__article__content">
                    <div>
                        <iframe
                            class="info__article__content__video"
                            src="${trailer.url}">
                        </iframe>
                        <p class="caption">
                            Video from
                            <a
                                href="${trailer.locationCaptionUrl}"
                                target="_blank"
                                class="anchor">
                                ${trailer.locationCaptionName}
                            </a>
                        </p>
                    </div>
                    <p>
                        ${synopsis}
                    </p>
                    <ul class="info__article__content__list">
                        ${new ListItem({
                            content: `<h2 class="info__article__title">${wikiPage.site}</h2>`,
                            url: wikiPage.url
                        }).outerHTML}
                        ${correctMainCrew.map(job => new JobItem(job).outerHTML).join('\n')}
                    </ul>
                </section>
            </article>
            <aside class="info__aside">
                <section class="info__aside__container">
                    <div class="header__space">
                        <p>M</p>
                    </div>
                    <div class="info__aside__container__img-holder">
                        <img
                            src="${img.url}"
                            alt="${title} poster"
                            class="info__aside__container__img-holder__img">
                    </div>
                    <p class="info__aside__container__caption caption">
                        Image from
                        <a
                            href="${img.locationCaptionUrl}"
                            target="_blank"
                            class="anchor">
                            ${img.locationCaptionName}
                        </a>
                    </p>
                </section>
            </aside>
        </main>`)
    }
}

export default Media;