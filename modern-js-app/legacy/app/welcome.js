define(['jquery'], function ($) {
  function Welcome(element) {
    this.element = element;
  };


  Welcome.prototype.updateFullName = function () {
    this.fullNameElement.text(this.fullName)
  };

  Welcome.prototype.submit = function () {
    alert(this.fullName);
  };

  Welcome.prototype.deactivate = function () {
    // tear stuff down
    this.lastNameInput.off('keyup change');
    this.lastNameInput.off('keyup change');
    this.element.find('form').off('submit');
  };

  Welcome.prototype.activate = function () {
    var me = this;
    me.firstNameInput = me.element.find('#firstName');
    me.lastNameInput = me.element.find('#lastName');
    me.fullNameElement = me.element.find('#fullName');

    me.firstNameInput.val('Ashley');
    me.lastNameInput.val('Grant');
    me.updateFullName();

    me.firstNameInput.on('keyup change', function () {
      me.updateFullName();
    });

    me.lastNameInput.on('keyup change', function () {
      me.updateFullName();
    });

    me.element.find('form').on('submit', function () {
      me.submit();
      return false;
    });
  };

  Object.defineProperties(Welcome.prototype, {
    firstName: {
      get: function () {
        return this.firstNameInput.val();
      },
      set: function (value) {
        this.firstNameInput.val(value);
        this.firstNameInput.change();
      }
    },
    lastName: {
      get: function () {
        return this.lastNameInput.val();
      },
      set: function (value) {
        this.lastNameInput.val(value);
        this.lastNameInput.change();
      }
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });

  return Welcome;

});
