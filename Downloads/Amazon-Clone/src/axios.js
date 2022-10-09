import axios from 'axios'
const instance=axios.create({
    // url
    baseURL:'http://localhost:5001/react-http-90296/us-central1/api'
})
export default instance