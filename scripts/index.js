import { limitURLs, createTitle } from "./utils.js";
import { Title, Header, Main } from "./bundles.js";

(async () => {
    const url = await limitURLs(window.location);
    const title = createTitle(url.searchParams);

    new Title(title);
    new Header(title, url);
    new Main(url);
})()