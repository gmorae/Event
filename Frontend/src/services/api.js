import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://localhost:8080/" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-easyTalk")
    }
});


export default Api;