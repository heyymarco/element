import JqueryWrapper from "jquery-wrapper-class";
export default class Element extends JqueryWrapper {
    constructor(selector: Selector);
    static window: Element;
    static document: Element;
    static body: Element;
}
