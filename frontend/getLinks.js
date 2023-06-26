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

/* GET CONFIG */
async function getConfig() {
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

// Função para criar os elementos dinamicamente
async function criarElementos(dados) {
    var container = document.querySelector(".container");
    var config = await getConfig();

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
        button.style.backgroundColor = config[0].button_color;

        var iconType = await getIcones(item.icon_type);

        var icon = document.createElement("iconify-icon");
        icon.setAttribute("icon", iconType);
        icon.setAttribute("width", "22");
        icon.setAttribute("height", "22");
        icon.style.color = config[0].text_color;
        
        var span = document.createElement("span");
        span.innerText = item.title;
        span.style.color = config[0].text_color;

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

window.addEventListener('load', async () => {
    getLinks();
})
