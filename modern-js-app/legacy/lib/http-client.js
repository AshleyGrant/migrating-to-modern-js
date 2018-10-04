define(['jquery'], function($) {

    return function HttpClient(baseUrl) {
        return {
            baseUrl: baseUrl,
            getJSON: function(path, callback) {
                $.getJSON(baseUrl + path, callback);
            }
        }
    };
});