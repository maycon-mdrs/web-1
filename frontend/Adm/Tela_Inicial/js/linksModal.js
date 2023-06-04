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