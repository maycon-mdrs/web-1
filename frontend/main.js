
// Dados recebidos do backend
var logo = [
    {
        title: "logo",
        url: "./images/logo-b.png"
    }
]
var dados = [
    {
        title: "Cardápiooooooooooo",
        icon: "material-symbols:restaurant-menu",
        link: "./cardapio/",
        target: "_self"
    },
    {
        title: "Instagram",
        icon: "mdi:instagram",
        link: "https://www.instagram.com/dogspetonatal/",
        target: "_blank"
    },
    {
        title: "Ifood",
        icon: "simple-icons:ifood",
        link: "https://www.ifood.com.br/delivery/natal-rn/dogspeto-natal-ponta-negra/d99a6351-271c-4e3c-a9a3-4bed2ccdc5c7?utm_medium=share",
        target: "_blank"
    },
    {
        title: "Ifooooooooooooooooooooood",
        icon: "",
        link: "https://www.ifood.com.br/delivery/natal-rn/dogspeto-natal-ponta-negra/d99a6351-271c-4e3c-a9a3-4bed2ccdc5c7?utm_medium=share",
        target: "_blank"
    },
];

var localizacao = [
    {
        title: "PARK DU SOL - Av. Estrela do Mar, 2183 - Ponta Negra, Natal - RN, 59090-400",
        icon: "material-symbols:pin-drop-rounded",
        link: "https://mps.app.goo.gl/wSWQ9y1CvBPQRQW87",
        target: "_blank"
    }
]

function criarLogo() {
    var container = document.querySelector(".container");
    logo.forEach(function (l) {
        var header = document.createElement("header");
        header.className = "container-header";

        var img = document.createElement("img");
        img.className = l.title;
        img.src = l.url;

        console.log(img)

        container.appendChild(header);
        header.appendChild(img);
    });
}

// Função para criar os elementos dinamicamente
function criarElementos() {
    var container = document.querySelector(".container");

    // Criar as sections dinamicamente
    dados.forEach(function (item) {
        var section = document.createElement("section");
        section.className = "container-section";
        
        var div = document.createElement("div");
        
        var a = document.createElement("a");
        a.href = item.link;
        a.target = item.target;
        
        var button = document.createElement("button");
        button.type = "button";
        button.className = "social-btn-t";
        
        var icon = document.createElement("iconify-icon");
        icon.setAttribute("icon", item.icon);
        icon.setAttribute("width", "22");
        icon.setAttribute("height", "22");
        
        var span = document.createElement("span");
        span.innerText = item.title;

        // Adicionar os elementos criados à página
        container.appendChild(section);
        section.appendChild(div);
        div.appendChild(a);
        a.appendChild(button);
        if(item.icon != ""){ 
            button.appendChild(icon);
        }
        button.appendChild(span); 

        // ajustar botão
        console.log('teste' + span.offsetWidth)
        if(span.offsetWidth > 100 && item.icon != "") {
            span.style.marginLeft = "30px";
        }
    });
}

function criarLocalizacao() {
    var container = document.querySelector(".container");

    // Criar as sections dinamicamente
    localizacao.forEach(function (loc) {
        var section = document.createElement("section");
        section.className = "container-section";
        
        var div = document.createElement("div");
        div.className = "localizacao-conteiner";
        
        var a = document.createElement("a");
        a.href = loc.link;
        a.target = loc.target;
        
        var icon = document.createElement("iconify-icon");
        icon.setAttribute("icon", loc.icon);
        icon.setAttribute("width", "24");
        icon.setAttribute("height", "24");
        
        var span = document.createElement("span");
        span.className = "span-white";
        span.innerText = loc.title;

        // Adicionar os elementos criados à página
        container.appendChild(section);
        section.appendChild(div);
        div.appendChild(a);
        a.appendChild(icon);
        a.appendChild(span);
    });
}

// Chamar a função para criar os elementos quando a página carregar
function loadPage () {
    window.onload = criarLogo();
    window.onload = criarElementos();
    window.onload = criarLocalizacao();
}

loadPage();