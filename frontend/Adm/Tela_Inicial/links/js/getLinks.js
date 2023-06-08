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
        
        cardTemplate.className = "card container mb-4";
        cardTemplate.style = "border: none; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);";
        cardTemplate.style.maxWidth = "540px";

        cardTemplate.innerHTML = 
        `
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
                                    <button type="button" class="edit-btn" data-bs-toggle="modal" data-bs-target="#editarItemModal"><iconify-icon icon="mdi:square-edit-outline" width="24" height="24"></iconify-icon></button>
                                </div>
                                <div class="col-auto">
                                    <button type="button" class="delete-btn" data-bs-toggle="modal" data-bs-target="#deletarItemModal"><iconify-icon icon="mdi:trash-can-outline" width="24" height="24"></iconify-icon></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal EDITAR -->
            <div class="modal fade" id="editarItemModal" tabindex="-1" aria-labelledby="editarItemModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <!-- HEADER - título -->
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editarItemModalLabel">Editar Link</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- BODY -->
                    <div class="modal-body">
                        
                        <form class="row g-3 needs-validation" id="links-forms" novalidate>
                            <input type="hidden" id="item-id">

                            <!-- título -->
                            <div class="col-6">
                                <label for="validationCustom01" class="form-label">Título</label>
                                <input type="text" class="form-control" id="validationCustom01" required>
                                <div class="invalid-feedback">
                                    Insira um título.
                                </div>
                            </div>
                        
                            <!-- icones -->
                            <div class="col-6">
                                <label for="validationCustom02" class="form-label">Icone</label>
                                <select class="form-select" id="validationCustom02" required>
                                    <option selected disabled value="">Selecionar</option>
                                    <option value="1">Cardápio</option>
                                    <option value="2">Instagram</option>
                                    <option value="3">Ifood</option>
                                    <option value="4">Localização</option>
                                    <option value="5">Site</option>
                                    <option value="6">TikTok</option>
                                    <option value="7">WhatsApp</option>
                                    <option value="8">Nenhum</option>
                                </select>
                                <div class="invalid-feedback">
                                    Selecione um estado válido.
                                </div>
                            </div>
                            
                            <!-- URL -->
                            <div class="col-12">
                                <label for="validationCustom03" class="form-label">URL</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1">https://</span>
                                    <input type="text" class="form-control" id="validationCustom03" placeholder="www.name.com" required>
                                    <div class="invalid-feedback">
                                        Insira uma URL.
                                    </div>
                                </div>
                            </div>
                            
                            <!-- BTN - adicionar -->
                            <div class="col-12">
                                <button class="btn btn-primary add-link-btn" type="submit" id="btn-add">
                                    <span>Salvar</span>
                                </button>  
                            </div>
                            
                        </form>

                    </div>
                </div>
                </div>
            </div>

            <!-- Modal DELETAR -->
            <div class="modal fade" id="deletarItemModal" tabindex="-1" aria-labelledby="deletarItemModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" style="border-bottom: none;">
                <h1 class="modal-title fs-5" id="deletarItemModalLabel">Deletar Link</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    Você realmente dejesa exlcuir o link <strong>${element.title}</strong>?
                </div>
                <div class="modal-footer" style="border-top: none;">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-danger">Excluir</button>
                </div>
            </div>
            </div>
            </div>
        `;
        console.log(element.id);
        listaItens.appendChild(cardTemplate);
});
}

function deletar(item){
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/links/" + item, requestOptions)
    .then(response => response.json())
    .then(window.location.reload())
    .catch(error => console.log('error', error));
}
function editar(element){
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };

    const item = element.id;
    fetch("http://localhost:8080/links/" + item, requestOptions)
    .then(response => response.json())
    .then(window.location.reload())
    .catch(error => console.log('error', error));
}
// Manipula o evento de clique no botão "Excluir"
$(document).on('click', '.delete-btn', function () {
    deletar(element);
});

// Manipula o evento de clique no botão "Excluir" no modal de confirmação
$('#confirmDelete').click(function () {
    const itemId = $('#confirmationModal').data('item-id');
    $('#' + itemId).remove();
    $('#confirmationModal').modal('hide');
});