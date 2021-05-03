import {RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import * as dotenv from 'dotenv';
dotenv.config()

const API_KEY = process.env.OMDB_API_KEY
const API_BASE_URL = process.env.OMDB_BASE_URL

export class OMDbAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = API_BASE_URL
    }

    //called before each request - add API_KEY
    willSendRequest(request: RequestOptions) {
        request.params.set('apikey', API_KEY)
    }

    async withTitle(title: string) {
        //params: route, ?queryParam name
        const data = await this.get( '/', {t: title})
        console.log(data)
        return data
    }

}

export const dataSources = () => ({ omdbAPI: new OMDbAPI() })