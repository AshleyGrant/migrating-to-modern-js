import { Welcome } from './welcome.js';
import { Users } from './users.js';

const pages = {
    'welcome': Welcome,
    'users': Users
};
let currentPage = {};

function initPage() {
    showPage('welcome');

    document.querySelectorAll('nav ul a').forEach(el => {
        el.addEventListener('click', evt => {
            const page = evt.target.dataset.page;
            showPage(page);
        });
    })
}

function showPage(page) {
    const nextPageElement = document.getElementById(page + 'Page');

    if (typeof (currentPage.deactivate) === 'function') {
        currentPage.deactivate();
    }

    const nextPageClass = pages[page];

    const nextPage = new nextPageClass(nextPageElement);

    if (typeof (nextPage.activate) === 'function') {
        nextPage.activate();
    }

    document.querySelectorAll('.page-container').forEach(el => {
        el.style.display = 'none';
    });

    nextPageElement.style.display = '';

    currentPage = nextPage;
}

initPage();