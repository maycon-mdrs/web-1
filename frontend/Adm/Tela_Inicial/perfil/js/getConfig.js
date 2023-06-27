function getConfig() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/config/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        loadConfig(result);
    })
    .catch(error => console.log('error', error));
}

function loadLogo() {
    const uploadedImgDiv = document.querySelector("#uploaded-image");

    const img = document.createElement("img");
    img.src = 'http://localhost:8080/getLogo/'; 
    
    uploadedImgDiv.appendChild(img);
}

function getEndereco() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/produtos/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        loadEndereco(result);
    })
    .catch(error => console.log('error', error));
}

function loadConfig(itens) {
    itens.forEach(element =>{
        $('#nome-input').val(element.name);
        $('#descricao-input').val(element.description);

        $('#cor-bg-btn').val(element.background_color);
        $('#hexValue-bg').val(element.background_color);

        $('#cor-txt-btn').val(element.text_color);
        $('#hexValue-txt').val(element.text_color);

        $('#cor-1-btn').val(element.button_color);
        $('#hexValue-color-1').val(element.button_color);

        $('#cor-2-btn').val(element.button_colorOver);
        $('#hexValue-color-2').val(element.button_color);
    });
}

function loadEndereco(itens) {
    itens.forEach(element => {
        $('#endereco-input').val(element.titulo);
        $('#localizacao-input').val(element.url);
    }); 
}

window.onload = () => {
    loadLogo();
    getConfig();
    getEndereco();
};