import Api from '../'
import axios from 'react-native-axios'

export default class Logout extends Api {
    constructor() {
        super({})
        
        return new Promise((resolve, reject) => {
            axios.get('http://pharmabox.test/logout', this.settings)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })  
        })
    }
}