/* CRIAR LOGO - GET */
function criarLogo() {
    var container = document.querySelector(".container");

        var header = document.createElement("header");
        header.className = "container-header";

        var img = document.createElement("img");
        img.className = "logo";
        img.src = 'http://localhost:8080/getLogo/'; 

        var nomeEmpresa = document.createElement("h3");
        var descricaoEmpresa = document.createElement("span");

        //nomeEmpresa.style.color = ;
        //descricaoEmpresa.style.color = ;
        
        container.appendChild(header);
        header.appendChild(img);
        header.appendChild(nomeEmpresa);
        header.appendChild(descricaoEmpresa);

}

/* GET LINKS */
async function getLinks() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://localhost:8080/links/", requestOptions)
    .then(response => response.json())
    .then((result) => {
        criarElementos(result);
    })
    .catch(error => console.log('error', error));
}

/* GET ICONS */
async function getIcones(iconType) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return await fetch('http://localhost:8080/tipo_link/' + iconType, requestOptions)
    .then(response => response.json())
    .then((result) => {
        return result.icon_name;
    })
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode fazer algo como exibir uma mensagem de erro genérica ao usuário
    });
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
        console.log(result)
        criarLocalizacao(result);
    })
    .catch(error => console.log('error', error));
}

// Função para criar os elementos dinamicamente
async function criarElementos(dados) {
    var container = document.querySelector(".container");

    // Criar as sections dinamicamente
    dados.forEach(async item => {
        var section = document.createElement("section");
        section.className = "container-section";
        
        var div = document.createElement("div");
        
        var a = document.createElement("a");
        a.href = "https://" + item.url;
        a.target = "_blank";
        //a.target = item.target;
        
        var button = document.createElement("button");
        button.type = "button";
        button.className = "social-btn-t";
        //button.style.backgroundColor = item.;
        
        var iconType = await getIcones(item.icon_type);

        var icon = document.createElement("iconify-icon");
        icon.setAttribute("icon", iconType);
        icon.setAttribute("width", "22");
        icon.setAttribute("height", "22");
        
        var span = document.createElement("span");
        span.innerText = item.title;
        //span.style.color = item.;

        // Adicionar os elementos criados à página
        container.appendChild(section);
        section.appendChild(div);
        div.appendChild(a);
        a.appendChild(button);
        if(iconType != ""){ 
            button.appendChild(icon);
        }
        button.appendChild(span); 

        // ajustar botão
        if(span.offsetWidth > 100 && iconType != "") {
            span.style.marginLeft = "30px";
        }
    });
}


async function criarLocalizacao(localizacao) {
    var container = document.querySelector(".container");

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

        // Adicionar os elementos criados à página
        container.appendChild(section);
        section.appendChild(div);
        div.appendChild(a);
        
        if(loc.titulo != "") {
            var icon = document.createElement("iconify-icon");
            icon.setAttribute("icon", "material-symbols:pin-drop-rounded");
            icon.setAttribute("width", "24");
            icon.setAttribute("height", "24");

            a.appendChild(icon);
            a.appendChild(span);
        }
        a.appendChild(span);
    });
}

// Chamar a função para criar os elementos quando a página carregar
window.addEventListener('load', async () => {
    criarLogo();
    await getLinks();
    setTimeout(async () => {
        await getLocalizacao();
    }, 300);
})
