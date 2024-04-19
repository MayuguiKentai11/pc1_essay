import axios from "axios"

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export class CountryApiService{
    async getCountryInformation() {
         let hello = await http.get('/name/peru');
         return hello.data;
    }
}