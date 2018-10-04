define(['jquery'], function ($) {
    return function Welcome(element) {
        return {
            element: element,
            get firstName() {
                return this.firstNameInput.val();
            },
            set firstName(value) {
                this.firstNameInput.val(value);
                this.firstNameInput.change();
            },
            get lastName() {
                return this.lastNameInput.val();
            },
            set lastName(value) {
                this.lastNameInput.val(value);
                this.lastNameInput.change();
            },
            get fullName() {
                return this.firstName + ' ' + this.lastName;
            },
            updateFullName: function() {
                this.fullNameElement.text(this.fullName)
            },
            activate: function() {
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
                });

                setTimeout(function () { me.firstName = 'Krista'; }, 5000);
            },
            deactivate: function() {
                // tear stuff down
                this.lastNameInput.off('keyup change');
                this.lastNameInput.off('keyup change');
                this.element.find('form').off('submit');
            },
            submit: function() {
                alert(this.fullName);
            }
        };
    }
});