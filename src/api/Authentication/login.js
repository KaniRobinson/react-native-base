import Api from '../'
import axios from 'react-native-axios'

export default class Login extends Api {
    constructor(email, password) {
        super({ email, password })

        return new Promise((resolve, reject) => {
            this.formdata = new FormData()
            this.formdata.append("User[email]", this.email)
            this.formdata.append("User[password]", this.password)

            axios.post('http://pharmabox.test/login', this.formdata, this.settings)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })  
        })
    }
}