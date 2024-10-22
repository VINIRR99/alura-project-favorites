const limitURLs = location => {
    const url = new URL(location.href);

    const acceptables = [
        '?page=list&media=all&type=all',
        '?page=list&media=movies&type=all',
        '?page=list&media=movies&type=live+action',
        '?page=list&media=movies&type=animation',
        '?page=list&media=series&type=all',
        '?page=list&media=series&type=live+action',
        '?page=list&media=series&type=animation',
        '?page=list&media=games&type=all'
    ];

    const approvedURL =  acceptables.find(item => item === url.search);
    if (!approvedURL) {
        location.replace(`index.html${acceptables[0]}`);
    }

    return url;
}

const createTitle = params => {
    if (params.get('page') === 'list') {
        const media = params.get('media')

        if (media === 'all') {
            return 'My favorites'
        } else {
            return media.slice(0, 1).toUpperCase() + media.slice(1);
        }
    };
}

class CapturedElement {
    constructor({ querySelector, innerHTML, append }) {
        this.element = document.querySelector(querySelector);
        if (innerHTML) this.element.innerHTML = innerHTML;
        if (append) this.appendEl(append.element, append.pos);
    }

    appendEl = (element, pos) => {
        this.element.insertBefore(element, this.element.children[pos]);
    }
}

class CreateElement {
    constructor({ element, classAtr, innerHTML }) {
        this.element = document.createElement(element);
        this.element.setAttribute('class', classAtr);
        this.element.innerHTML = innerHTML;
    }
}

export { limitURLs, createTitle, CapturedElement, CreateElement };