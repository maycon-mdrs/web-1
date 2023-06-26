const body = document.body;

const modalDeletar = document.createElement('section');
const editarModalSec = document.createElement('section');

modalDeletar.innerHTML = 
`
    <!-- Modal de confirmação de exclusão -->
    <div class="modal fade" id="deletarItemModal" tabindex="-1" aria-labelledby="deletarItemModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header" style="border: none;">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="d-flex flex-column align-items-center">
                <iconify-icon icon="bi:exclamation-circle"  width="100" height="100" style="color: #dc3545;"></iconify-icon>
            </div>
            <div class="modal-body d-flex flex-column align-items-center">
                <h1 id="txt-item" class="text-center" style="margin: 0;<strong id="txt-item-strong">Tem certeza?</strong></h1>
            </div>
            <div class="modal-body d-flex flex-column align-items-center" style="padding-top: 0!important;">
                <h6 id="txt-item" class="text-center" style="margin: 0;">Se excluir o item "<strong id="txt-item-strong"></strong>" não será possível voltar atrás!</h6>
            </div>
            <div class="modal-footer d-flex justify-content-center" style="border: none;">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" id="delete-btn-modal">Excluir</button>
            </div>
        </div>
        </div>
    </div>
`;

editarModalSec.innerHTML = 
`
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
                
                <form class="row g-3 needs-validation" id="links-forms-edit" novalidate>
                    <input type="hidden" id="item-id">

                    <!-- título -->
                    <div class="col-6">
                        <label for="title-edit" class="form-label">Título</label>
                        <input type="text" class="form-control" id="title-edit" required>
                        <div class="invalid-feedback">
                            Insira um título.
                        </div>
                    </div>
                
                    <!-- icones -->
                    <div class="col-6">
                        <label for="icon-edit" class="form-label">Icone</label>
                        <select class="form-select" id="icon-edit" required>
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
                        <label for="url-edit" class="form-label">URL</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">https://</span>
                            <input type="text" class="form-control" id="url-edit" placeholder="www.name.com" required>
                            <div class="invalid-feedback">
                                Insira uma URL.
                            </div>
                        </div>
                    </div>
                    
                    <!-- BTN - salvar -->
                    <div class="col-12">
                        <button class="btn btn-primary add-link-btn" type="submit" id="btn-save">
                            <span>Salvar</span>
                        </button>  
                    </div>
                    
                </form>

            </div>
        </div>
        </div>
    </div>
`; 

body.appendChild(modalDeletar);
body.appendChild(editarModalSec);
