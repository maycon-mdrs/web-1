$(document).ready(function () {
    // Manipula o evento de submit do formulário
    $('#links-forms').submit(function (e) {
        console.log('submit');

        if (!this.checkValidity()) {
            e.preventDefault()
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // const itemId = $('#item-id').val();
        const title = $('#validationCustom01').val();
        const icon = $('#validationCustom02').val();
        const url = $('#validationCustom03').val();

        // Crie um objeto com os valores dos campos
        var formData = {
            title: title,
            url: url,
            icon_type: icon,
        };

        submitFormData(formData);
        
        // Limpar o formulário e fechar o modal
        $(this).removeClass('was-validated').trigger('reset');
        $('#item-id').val('');
        $('#exampleModal').modal('hide');
    });

    // Reseta o formulário e validação ao fechar o modal
    $('#exampleModal').on('hidden.bs.modal', function () {
        $('#links-forms').removeClass('was-validated').trigger('reset');
        $('#item-id').val('');
        $('#exampleModalLabel').text('Add Link');
        $('#btn-add').text('Adicionar');
    }); 
});

function submitFormData(formData) {
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
}
