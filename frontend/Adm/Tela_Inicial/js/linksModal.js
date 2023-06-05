const colorPicker1 = document.getElementById('cor-btn');
const colorPicker2 = document.getElementById('cor-txt-btn');
const hexValue1 = document.getElementById('hexValue-1');
const hexValue2 = document.getElementById('hexValue-2');

const selectedColor1 = colorPicker1.value;
hexValue1.value = selectedColor1.toUpperCase();

const selectedColor2 = colorPicker2.value;
hexValue2.value = selectedColor2.toUpperCase();

colorPicker1.addEventListener('input', () => {
    const selectedColor1 = colorPicker1.value;
    hexValue1.value = selectedColor1.toUpperCase();
});

hexValue1.addEventListener('click', () => {
    colorPicker1.click();
});

colorPicker2.addEventListener('input', () => {
    const selectedColor2 = colorPicker2.value;
    hexValue2.value = selectedColor2.toUpperCase();
});

hexValue2.addEventListener('click', () => {
    colorPicker2.click();
});


$(document).ready(function () {
    let itemCount = 0;

    // Manipula o evento de submit do formulário
    $('#links-forms').submit(function (e) {
        e.preventDefault();

        if (!this.checkValidity()) {
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        const itemId = $('#item-id').val();
        const title = $('#validationCustom01').val();
        const icon = $('#validationCustom02').val();
        const url = $('#validationCustom03').val();

        if (itemId) {
            // Editar item existente
            $('#' + itemId).find('.item-title').text(title);
            $('#' + itemId).find('.item-url').text(url);
            $('#' + itemId).find('.item-icon').text(icon);
        } else {
            // Adicionar novo item
            const newItem = `
                <div id="item-${itemCount}" class="mt-3">
                    <span class="item-title">${title}</span>
                    <span class="item-url">${url}</span>
                    <span class="item-icon">${icon}</span>
                    <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" data-item-id="item-${itemCount}">
                        Editar
                    </button>
                    <button type="button" class="btn btn-danger delete-btn" data-bs-toggle="modal"
                        data-bs-target="#confirmationModal" data-item-id="item-${itemCount}">
                        Excluir
                    </button>
                </div>
            `;

            $('#items-list').append(newItem);
            itemCount++;
        }

        // Limpar o formulário e fechar o modal
        $(this).removeClass('was-validated').trigger('reset');
        $('#item-id').val('');
        $('#exampleModal').modal('hide');
    });

    // Manipula o evento de clique no botão "Editar"
    $(document).on('click', '.edit-btn', function () {
        const itemId = $(this).data('item-id');
        const title = $('#' + itemId).find('.item-title').text();
        const url = $('#' + itemId).find('.item-url').text();
        const icon = $('#' + itemId).find('.item-icon').text();
        	
        $('#exampleModalLabel').text('Editar');
        $('#btn-add').text('Salvar');

        $('#item-id').val(itemId);
        $('#validationCustom01').val(title);
        $('#validationCustom02').val(icon);
        $('#validationCustom03').val(url);

        $('#exampleModal').modal('show');
    });

    // Manipula o evento de clique no botão "Excluir"
    $(document).on('click', '.delete-btn', function () {
        const itemId = $(this).data('item-id');
        $('#confirmationModal').data('item-id', itemId).modal('show');
    });

    // Manipula o evento de clique no botão "Excluir" no modal de confirmação
    $('#confirmDelete').click(function () {
        const itemId = $('#confirmationModal').data('item-id');
        $('#' + itemId).remove();
        $('#confirmationModal').modal('hide');
    });

    // Reseta o formulário e validação ao fechar o modal
    $('#exampleModal').on('hidden.bs.modal', function () {
        $('#links-forms').removeClass('was-validated').trigger('reset');
        $('#item-id').val('');
        $('#exampleModalLabel').text('Add Link');
        $('#btn-add').text('Adicionar');
    });
});













































/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
forms.forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})
})()


const myModal = document.getElementById('exampleModal');

myModal.addEventListener('show.bs.modal', () => {
    clearFormFields();
});

myModal.addEventListener('hidden.bs.modal', () => {
    clearFormFields();
});

function clearFormFields() {
    // Limpa os campos do formulário
    document.getElementById("validationCustom01").value = "";
    document.getElementById("validationCustom02").selectedIndex = 0;
    document.getElementById("validationCustom03").value = "";
};
*/
