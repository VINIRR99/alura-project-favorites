class DataHandler {
    static filterObject = ({ arr, keys }) => {
        const modifiedData = arr.map(item => {
            let object = {};
            keys.forEach(key => {
                object[key] = item[key]
            })

            return object;
        })

        return modifiedData;
    }
    constructor() {
        this.data = '../data.json';
    }

    getData = async callback => {
        const data = await fetch(this.data).then(res => res.json()).then(data => {
            return !callback ? data : callback(data)
        })

        return await data;
    }

    getSpecificData = async keys => {
        const data = await this.getData(async data => {
            return await this.constructor.filterObject({ arr: data, keys })
        })

        return await data;
    }

    getFilteredData = async ({ media, type, keys }) => {
        const data = await this.getData(async data => {
            const selectedData = await data.filter(item => {
                if (type === 'all') {
                    return item.type.media === media;
                } else {
                    return (item.type.media === media) && (item.type.type === type)
                }
            })

            return !keys ? await selectedData : await this.constructor.filterObject({
                arr: selectedData,
                keys
            });
        })

        return await data;
    }
}

const dataHandler = new DataHandler();

const limitURLs = async location => {
    const url = new URL(location.href);

    let acceptables = [
        { page: 'list', media: 'all', type: 'all' },
        { page: 'list', media: 'movie', type: 'all' },
        { page: 'list', media: 'movie', type: 'live action' },
        { page: 'list', media: 'movie', type: 'animation' },
        { page: 'list', media: 'serie', type: 'all' },
        { page: 'list', media: 'serie', type: 'live action' },
        { page: 'list', media: 'serie', type: 'animation' },
        { page: 'list', media: 'game', type: 'all' }
    ];

    const titles = await dataHandler.getSpecificData(['title', 'type']);
    const titlesModified = await titles.map(({ title, type: { media } }) => {
        return { page: 'title', media, title  };
    })

    acceptables.push(...await titlesModified)

    const acceptablesStr = acceptables.map(item => {
        const keys = Object.keys(item);
        const values = Object.values(item).map(value => value.split(' ').join('+'));
        
        let str = `?${keys[0]}=${values[0]}`;

        for (let i = 1; i < keys.length; i++) {
            str += `&${keys[i]}=${values[i]}`
        }

        return str;
    })

    const approvedURLs = acceptablesStr.find(item => item === url.search);

    if (!approvedURLs) location.replace(`index.html${acceptablesStr[0]}`);

    return url;
}

const createTitle = params => {
    const page = params.get('page');

    if (page === 'list') {
        const media = params.get('media')

        if (media === 'all') {
            return 'My favorites'
        } else {
            return media.slice(0, 1).toUpperCase() + media.slice(1);
        }
    };

    if (page === 'title') return params.get('title');
}

class CapturedElement {
    constructor({ querySelector, classAtr, innerHTML, append }) {
        this.element = document.querySelector(querySelector);
        if (classAtr) this.element.setAttribute('class', classAtr);
        if (innerHTML) this.innerHTML = innerHTML;
        if (append) this.appendEl(append.element, append.pos);
    }

    /**
     * @param {string} innerHTML
     */
    set innerHTML(innerHTML) { this.element.innerHTML = innerHTML }

    appendEl = (element, pos) => {
        let position;

        switch(pos) {
            case 'first':
                position = 0;
                break;
            case 'last':
                position = this.element.children.length;
                break;
            default:
                position = pos;
        }

        this.element.insertBefore(element, this.element.children[position]);
    }
}

class CreateElement {
    constructor(outerHTML) {
        const fragment = document.createElement('template');
        fragment.innerHTML = outerHTML;
        this.element = fragment.content.children[0];
    }

    get outerHTML() { return this.element.outerHTML }

    get innerHTML() { return this.element.innerHTML }
}

export {
    dataHandler,
    limitURLs,
    createTitle,
    CapturedElement,
    CreateElement
};