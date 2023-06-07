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
    .then(result => loadLinks(result))
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
        cardTemplate.style.maxWidth = "540px";

        cardTemplate.innerHTML = 
        `
            <div class="card-body">
                <div class="row g-0">
                    <div class="col-8">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Título</span>
                            <input type="text" class="form-control" value="${element.title}" aria-label="Username" aria-describedby="basic-addon1" readonly>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">URL</span>
                            <input type="text" class="form-control" value="${element.url}" aria-label="Username" aria-describedby="basic-addon1" readonly>
                        </div>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <div class="card-body">
                            <div class="row d-flex justify-content-end">
                                <div class="col-auto"><iconify-icon icon="material-symbols:edit-square-outline" width="22" height="22"></iconify-icon></div>
                                <div class="col-auto"><iconify-icon icon="mdi:trash-can-outline" width="24" height="24"></iconify-icon></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        listaItens.appendChild(cardTemplate);
});
}
