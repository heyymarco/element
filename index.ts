import JqueryWrapper from "jquery-wrapper-class";


export default class Element extends JqueryWrapper {
    constructor(selector : Selector) {
        super(selector);
    }

    static window = new Element(window);
    static document =  new Element(document);
    static body =  new Element(document.body);
}
