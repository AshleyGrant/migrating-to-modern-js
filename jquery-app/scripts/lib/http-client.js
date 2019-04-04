define(['jquery'], function ($) {
  function HttpClient(baseUrl) {
    this.baseUrl = baseUrl;
  }

  HttpClient.prototype.getJSON = function (path, callback) {
    $.getJSON(this.baseUrl + path, callback);
  }

  return HttpClient;
});
