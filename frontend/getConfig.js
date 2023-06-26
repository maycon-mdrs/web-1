/* CRIAR LOGO - GET */
function criarLogo() {
    var container = document.querySelector(".container");

    var header = document.createElement("header");
    header.className = "container-header";
    header.id = "container-header";

    var img = document.createElement("img");
    img.className = "logo";
    img.src = 'http://localhost:8080/getLogo/'; 
    
    container.appendChild(header);
    header.appendChild(img);
    getConfigHeader();
}

function getConfigHeader() {
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
        console.log(result)
        criarInformacoes(result);
    })
    .catch(error => console.log('error', error));
}

/* CRIAR INFORMAÇÕES - EMPRESA */
function criarInformacoes(itens) {
    var header = document.getElementById("container-header");
    var body = document.body;

    var nomeEmpresa = document.createElement("h3");
    var descricaoEmpresa = document.createElement("span");
    
    itens.forEach(element => {
        nomeEmpresa.innerHTML = element.name;
        descricaoEmpresa.innerHTML = element.description;
        nomeEmpresa.style.color = element.text_color;
        descricaoEmpresa.style.color = element.text_color;
        body.style.backgroundColor = element.background_color;
    });

    header.appendChild(nomeEmpresa);
    header.appendChild(descricaoEmpresa);
}

async function getConfigInfo() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return await fetch("http://localhost:8080/config/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        return result;
    })
    .catch(error => console.log('error', error));
}

/* GET LOCALIZAÇÃO */
async function getLocalizacao() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://localhost:8080/produtos/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        criarLocalizacao(result);
    })
    .catch(error => console.log('error', error));
}

async function criarLocalizacao(localizacao) {
    var container = document.querySelector(".container");

    var config = await getConfigInfo();

    // Criar as sections dinamicamente
    localizacao.forEach(function (loc) {
        var section = document.createElement("section");
        section.className = "container-section";
        
        var div = document.createElement("div");
        div.className = "localizacao-conteiner";
        
        var a = document.createElement("a");
        a.href = loc.url;
        a.target = "_blank";

        var span = document.createElement("span");
        span.className = "span-white";
        span.innerText = loc.titulo;
        span.style.color = config[0].text_color;

        // Adicionar os elementos criados à página
        container.appendChild(section);
        section.appendChild(div);
        div.appendChild(a);
        
        if(loc.titulo != "") {
            var icon = document.createElement("iconify-icon");
            icon.setAttribute("icon", "material-symbols:pin-drop-rounded");
            icon.setAttribute("width", "24");
            icon.setAttribute("height", "24");
            icon.style.color = config[0].button_color;

            a.appendChild(icon);
            a.appendChild(span);
        }
        a.appendChild(span);
    });
}

// Chamar a função para criar os elementos quando a página carregar
window.addEventListener('load', async () => {
    criarLogo();
    setTimeout(async () => {
        await getLocalizacao();
    }, 300);
})
