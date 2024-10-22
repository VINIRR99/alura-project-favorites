import { limitURLs, createTitle } from "./utils.js";
import { Title, Header } from "./bundles.js";

const url = limitURLs(window.location);
const title = createTitle(url.searchParams);

new Title(title);
new Header(title, url);