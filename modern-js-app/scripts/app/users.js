import { HttpClient } from '../lib/http-client.js';

const baseUrl = 'https://api.github.com/';

export class Users {
    constructor(element) {
        this.element = element;
        this.users = [];
        this.generateHtml = user => `<div class="col-sm-6 col-md-3 card-container"> 
                <div class="card"> 
                    <div class="avatar"> 
                        <img src="${user.avatar_url}" crossorigin ref="image"/> 
                    </div> 
                    <div class="content"> 
                        <p class="name">${user.login}</p> 
                        <p><a target="_blank" class="btn btn-default" href="${user.html_url}">Contact</a></p>
                    </div> 
                </div> 
            </div>`;
    }
    async activate() {
        const httpClient = new HttpClient(baseUrl);
        const data = await httpClient.getJSON('users')
        this.element.querySelector('#usersContainer').innerHTML = ''.concat(...data.map(this.generateHtml));
    }
}
