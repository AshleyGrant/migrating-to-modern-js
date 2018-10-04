export class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getJSON(path) {
        const response = await fetch(this.baseUrl + path)
        return response.json();
    }
}
