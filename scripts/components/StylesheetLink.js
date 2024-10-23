import { CreateElement } from "../utils.js";

class StylesheetLink extends CreateElement {
    constructor(file) {
        super(`<link rel="stylesheet" href="./styles/${file}">`)
    }
}

export default StylesheetLink;