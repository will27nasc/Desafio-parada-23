function validacao() {

    let nome = document.querySelector("#i_nome");
    let email = document.querySelector("#i_email");
    let cell = document.querySelector("#i_cell");
    let senha = document.querySelector("#i_senha");
    let data = document.querySelector("#i_data");

    input_style(nome);
    input_style(email);
    input_style(cell);
    input_style(senha);
    input_style(data);

    msg(nome);
    msg(email);
    msg(cell);
    msg(senha);
    msg(data);
}

// input recebe um campo do formulário
// cor_1 altera o estilo quando o campo esta errado
// cor_2 volta o estilo do campo para a cor padrão
function input_style(input, cor_1 = "#f45656", cor_2 = "#008000", cor_3 = "#ffccd5", cor_4 = "#c7f9cc"){
    // quando o campo está errado
    if(!input.checkValidity()){
        return input.style.border = `3px solid ${cor_1}`, input.style.backgroundColor = cor_3;
    }else{
        return input.style.border = `1px solid ${cor_2}`, input.style.backgroundColor = cor_4;
    }
}

function msg(input) {
    input.setAttribute('placeholder', '');

    // quando o campo está errado
    if(!input.checkValidity()){
        return input.setAttribute('placeholder', `Campo ${input.name} obrigatório`);
    } else {
        return input.setAttribute('placeholder', '');
    }
}


let button = document.querySelector('#button');
button.addEventListener('click', validacao);