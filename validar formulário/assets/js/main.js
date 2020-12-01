class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);

        })
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.formulario.querySelectorAll('.valided')) {
            const label = field.previousElementSibling.innerHTML;

            if (!field.value) {
                this.createError(field, `Campo "${label}" não pode ser vazio.`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validateCpf(field)) valid = false;
            }

            if (field.classList.contains('usuario')) {
                if (!this.validateUser(field)) valid = false;

            }
        }
        return valid;
    }

    validateUser(field) {
        const usuario = field.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(field, 'O campo "Usuário" deve ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'O nome do usuário precisa conter apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    validateCpf(field) {
        const cpf = new ValidaCpf(field.value);
        if (!cpf.valida()) {
            this.createError(field, 'CPF inválido!');
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.isValid();
        const validPasswords = this.passwordsAreValid();

        if(validFields && validPasswords){
            //this.formulario.submit();
            alert('Formulário enviado!');
        }
    }

    passwordsAreValid() {
        let valid = true;

        const password = this.formulario.querySelector('.senha');
        const repeatPassword = this.formulario.querySelector('.repetir-senha');

        if (password.value !== repeatPassword.value) {
            valid = false;
            this.createError(password, 'Campos senhas e repertir senha precisam ser iguais');
            this.createError(repeatPassword, 'Campos senhas e repertir senha precisam ser iguais');
        }

        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'A senha deve ter entre 6 e 12 caracteres');
        }

        return valid;
    }
}

const valida = new ValidaFormulario();

