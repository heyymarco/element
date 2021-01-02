import JqueryWrapper from "jquery-wrapper-class";



/**
 * A base class for manipulating common HTML element
 */
export default class Element extends JqueryWrapper {
    constructor(selector : Selector) {
        super(selector);
    }



    get markLeave() : boolean {
        return this.is(".leave");
    }
    set markLeave(leave : boolean) {
        this.toggleClass(".leave", leave);
    }



    /**
     * Registers a function to be executed during page's startup.
     * @param handler The function to be executed during page's startup.
     */
    static startup(handler : () => void) {
        JqueryWrapper.jQuery(handler);
    }



    static window   = new Element(window);
    static document = new Element(document);
}