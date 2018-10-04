define(['http-client'], function (HttpClient) {
    var baseUrl = 'https://api.github.com/';
    var userTemplate =
        '<div class="col-sm-6 col-md-3 card-container">' +
        '    <div class="card">' +
        '        <div class="avatar">' +
        '            <img src="user.avatar_url" crossorigin ref="image"/>' +
        '        </div>' +
        '        <div class="content">' +
        '            <p class="name">user.login</p>' +
        '            <p><a target="_blank" class="btn btn-default" href="user.html_url">Contact</a></p>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    return function Users(element) {
        this.element = element;
        this.users = [];
        this.activate = function () {
            var me = this;
            var httpClient = new HttpClient(baseUrl);
            httpClient.getJSON('users', function (data) {
                var html = '';

                for (var i = 0; i < data.length; i++) {
                    var user = data[i];
                    html += userTemplate
                        .replace('user.avatar_url', user.avatar_url)
                        .replace('user.login', user.login)
                        .replace('user.html_url', user.html_url);
                }

                $(me.element).find('#usersContainer').html(html);
            });
        }
    }
});