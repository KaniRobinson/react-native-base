import Api from '../'
import axios from 'react-native-axios'

export default class Register extends Api {
    constructor(username, first_name, last_name, email, cellphone, password, cpassword) {
        super({ username, first_name, last_name, email, cellphone, password, cpassword })

        return new Promise((resolve, reject) => {
            this.formdata = new FormData()
            this.formdata.append("User[username]", this.username)
            this.formdata.append("User[first_name]", this.first_name)
            this.formdata.append("User[last_name]", this.last_name)
            this.formdata.append("User[email]", this.email)
            this.formdata.append("User[cellphone]", this.cellphone)
            this.formdata.append("User[password]", this.password)
            this.formdata.append("User[cpassword]", this.cpassword)

            axios.post('http://pharmabox.test/register', this.formdata, this.settings)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })  
        })
    }
}