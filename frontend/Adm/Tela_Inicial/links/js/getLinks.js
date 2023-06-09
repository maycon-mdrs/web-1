function getLinks() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/links/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        loadLinks(result);
    })
    .catch(error => console.log('error', error));
}

window.onload = () => {
    getLinks();
};

function loadLinks(json){
    const listaItens = document.getElementById('items-list');
    const tituloLinks = document.createElement('div');

    tituloLinks.innerHTML = 
    `
        <!-- Título - add links -->
        <div class="container mt-4" style="max-width: 540px;"><h4>Links</h4></div>
    `;

    listaItens.appendChild(tituloLinks);
        
    json.forEach(element => {
        const listaItens = document.getElementById('items-list');
        const cardTemplate = document.createElement('div');

        cardTemplate.className = "row g-0";
        //cardTemplate.className = "card container mb-4";
        //cardTemplate.style = "border: none; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);";
        //cardTemplate.style.maxWidth = "540px";

        cardTemplate.innerHTML = 
        `
        <div class="card container mb-4" style= "border: none; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); max-width: 540px;">
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-8">
                        <div class="input-group mb-3">
                            <span class="input-group-text d-flex align-items-center justify-content-center" id="basic-addon1" style="width: 66px">Título</span>
                            <input type="text" class="form-control" value="${element.title}" aria-label="Username" aria-describedby="basic-addon1" readonly>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text d-flex align-items-center justify-content-center" id="basic-addon1" style="width: 66px">URL</span>
                            <input type="text" class="form-control" value="${element.url}" aria-label="Username" aria-describedby="basic-addon1" readonly>
                        </div>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <div class="card-body">
                            <div class="row d-flex justify-content-end">
                                <div class="col-auto">
                                    <button type="button" class="edit-btn" data-bs-toggle="modal" data-bs-target="#editarItemModal" onclick="editarModal(${element.id}, '${element.title}', '${element.url}', ${element.icon_type})"><iconify-icon icon="mdi:square-edit-outline" width="24" height="24"></iconify-icon></button>
                                </div>
                                <div class="col-auto">
                                    <button type="button" class="delete-btn" data-bs-toggle="modal" data-bs-target="#deletarItemModal" onclick="deletarModal(${element.id}, '${element.title}')"><iconify-icon icon="mdi:trash-can-outline" width="24" height="24"></iconify-icon></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        listaItens.appendChild(cardTemplate);
});
}

function deletarModal(id, title) {
    const deleteBtn = document.getElementById('delete-btn-modal');
    const txtItem = document.getElementById('txt-item-Modal');
    const txtItemStrong = document.getElementById('txt-item-strong');

    txtItemStrong.innerText = `${title}`;

    deleteBtn.addEventListener('click', () => {
        deletar(id);
    });
}

function deletar(item) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/links/" + item, requestOptions)
    .then(response => response.json())
    .then(window.location.reload())
    .catch(error => console.log('error', error));
}

function editarModal(id, title, url, icon_type) {
    const salvarBtn = document.getElementById('btn-save');
    
    console.log(id)
    $('#title-edit').val(title);
    $('#icon-edit').val(icon_type);
    $('#url-edit').val(url);
    
    // Manipula o evento de submit do formulário
    $('#links-forms-edit').submit(function (e) {
        console.log('submit');

        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // const itemId = $('#item-id').val();
        const title = $('#title-edit').val();
        const icon = $('#icon-edit').val();
        const url = $('#url-edit').val();

        // Crie um objeto com os valores dos campos
        var formData = {
            title: title,
            url: url,
            icon_type: icon,
        };
        
        editar(id, formData);
    });

}

function editar(item, formData) {
    fetch('http://localhost:8080/links/' + item, {
      method: 'PUT',
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
