define(['jquery', 'app/welcome', 'app/users'], function ($, Welcome, Users) {
    var pages = {
        'welcome': Welcome,
        'users': Users
    };
    var currentPage = {};

    function initPage() {
        showPage('welcome');

        $('nav ul a').on('click', function (evt) {
            var page = $(evt.target).data('page');
            showPage(page);
        })
    }

    function showPage(page) {
        var nextPageElement = $('#' + page + 'Page');

        if (typeof (currentPage.deactivate) === 'function') {
            currentPage.deactivate();
        }

        var nextPageClass = pages[page];

        delete currentPage;

        var nextPage = new nextPageClass(nextPageElement);

        if (typeof (nextPage.activate) === 'function') {
            nextPage.activate();
        }

        $('.page-container').hide();
        nextPageElement.show();

        currentPage = nextPage;
    }

    initPage();
});

