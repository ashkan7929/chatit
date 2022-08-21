import axios from "axios";

class HttpService {

    constructor() {

        this.client = axios.create({
            baseURL: 'http://localhost:3000/api/',
            timeout: 1000,
            headers: { 'X-custom-Heade': 'foobar' }
        })

    }

    get(url, config = null) {
        return this.client.get(url, config)
    }

    psot(url, params, config = null) {
        return this.client.post(url, params, config)
    }

    delete(url, config = null) {
        return this.client.delete(url, config)
    }

    put(url, params, config = null) {
        return this.client.put(url, params, config)
    }

}

export default HttpService