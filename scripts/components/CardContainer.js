import { CreateElement } from "../utils.js";

class CardContainer extends CreateElement {
    constructor() {
        super('<section class="content__container"></section>')
    }
}

export default CardContainer;