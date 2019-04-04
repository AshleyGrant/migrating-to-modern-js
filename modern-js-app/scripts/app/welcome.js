export class Welcome {
    constructor(element) {
        this.element = element;
    }
    get firstName() {
        return this.firstNameInput.value;
    }
    set firstName(value) {
        this.firstNameInput.value = value;
        this.firstNameInput.dispatchEvent(new Event('change'));
    }
    get lastName() {
        return this.lastNameInput.value;
    }
    set lastName(value) {
        this.lastNameInput.value = value;
        this.lastNameInput.dispatchEvent(new Event('change'));
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    updateFullName() {
        this.fullNameElement.textContent = this.fullName;
    }
    activate() {
        this.firstNameInput = this.element.querySelector('#firstName');
        this.lastNameInput = this.element.querySelector('#lastName');
        this.fullNameElement = this.element.querySelector('#fullName');

        this.firstNameInput.value = 'Ashley';
        this.lastNameInput.value = 'Grant';
        this.updateFullName();

        this.updateHandler = () => this.updateFullName();

        this.firstNameInput.addEventListener('keyup', this.updateHandler);
        this.firstNameInput.addEventListener('change', this.updateHandler);

        this.lastNameInput.addEventListener('keyup', this.updateHandler);
        this.lastNameInput.addEventListener('change', this.updateHandler);

        this.submitHandler = () => {
            this.submit();
        }

        this.element.querySelector('form').addEventListener('submit', this.submitHandler);
    }
    deactivate() {
        // tear stuff down
        this.firstNameInput.removeEventListener('keyup', this.handler);
        this.firstNameInput.removeEventListener('change', this.handler);
        this.lastNameInput.removeEventListener('keyup', this.handler);
        this.lastNameInput.removeEventListener('change', this.handler);

        this.element.querySelector('form').removeEventListener('submit', this.submitHandler);
    }
    submit() {
        alert(this.fullName);
    }
}
