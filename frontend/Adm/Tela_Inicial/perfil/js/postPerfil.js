$(document).ready(function () {
    // Manipula o evento de submit do formulário
    $('#perfil-forms').submit(function (e) {
        console.log('submit');
        e.preventDefault();
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // const itemId = $('#item-id').val();
        const nome = $('#nome-input').val();
        const descricao = $('#descricao-input').val();
        const endereco = $('#endereco-input').val();
        const localizacao = $('#localizacao-input').val();
        const corBg = $('#cor-bg-btn').val();
        const corTxt = $('#cor-txt-btn').val();
        const cor1 = $('#cor-1-btn').val();
        const cor2 = $('#cor-2-btn').val();

        // Crie um objeto com os valores dos campos
        var formData = {
            title: nome,
            url: descricao,
            endereco: endereco,
            localization: localizacao,
            corBg: corBg,
            corTxt: corTxt,
            cor1: cor1,
            cor2: cor2,
        };
        
        console.log(formData)
        //submitFormData(formData);
        
        // Limpar o formulário e fechar o modal
        $(this).removeClass('was-validated').trigger('reset');
    });
});

/* function submitFormData(formData) {
    fetch('http://localhost:8080/links/', {
      method: 'POST',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // A resposta do servidor foi bem-sucedida
        console.log('Dados enviados com sucesso!');
        // Aqui você pode fazer algo como exibir uma mensagem de sucesso ao usuário
      } else {
        // A resposta do servidor não foi bem-sucedida
        console.error('Falha ao enviar dados.');
        // Aqui você pode fazer algo como exibir uma mensagem de erro ao usuário
      }
    })
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode fazer algo como exibir uma mensagem de erro genérica ao usuário
    });
} */
