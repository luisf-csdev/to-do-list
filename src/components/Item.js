export default class Item {

    constructor(text) {
        this.id = String(Math.random().toString(36).slice(2));
        this.index = this.id
        this.text = text;
        this.done = false;
    }

};