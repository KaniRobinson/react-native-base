export default class Api {
    constructor() {
        this.renderData(...arguments)
        this.getAjaxDetails()
    }

    /** 
     * Default Settings
     */
    getAjaxDetails () {
        this.settings = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }

    /**
     * Render Data to an Object
     * 
     * @param {object} data 
     */
    renderData (data) {
        let self = this

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                self[key] = data[key]
            }
        }
    }
}