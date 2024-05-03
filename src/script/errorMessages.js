export  const mensagens = {
    nome: {
        valueMissing: "* O campo de nome não pode estar vazio.",
        tooShort: "* Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "* O campo de e-mail não pode estar vazio.",
        typeMismatch: "* Por favor, preencha um e-mail válido",
        tooShort: "* Por favor, preencha um e-mail válido."
    },
   
    cpf: {
        valueMissing: '* O campo de CPF não pode estar vazio.',
        patternMismatch: "* Por favor, preencha um CPF válido.",
        customError: "* O CPF digitado não existe.",
        tooShort: "* O campo de CPF não tem caractéres suficientes."
    },
    birthday: {
        valueMissing: '* O campo de data de nascimento não pode estar vazio.',
        customError: '* Você deve ser maior que 18 anos para se cadastrar.'
    },

    terms: {
        valueMissing: '* Você deve aceitar nossos termos antes de continuar.',
    }
}