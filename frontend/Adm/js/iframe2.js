// Obtém referência aos elementos
const iframe = document.getElementById("preview-iframe");
const coluna2 = document.querySelector('.col-2');

// Define a URL do site que você deseja pré-visualizar
const targetURL = "../../index.html";

// Define a altura fixa do iframe em pixels
const iframeHeight = 400;
iframe.style.width = `370px`;
iframe.style.borderRadius = `40px 0 0 40px`;

// Define o atributo src do iframe como a URL do site alvo
iframe.src = targetURL;

// Função para ajustar a altura do iframe com base no tamanho do conteúdo
function adjustIframeHeight() {
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const contentHeight = iframeDocument.documentElement.scrollHeight;
  //iframe.style.height = `${Math.max(contentHeight, iframeHeight)}px`;

  iframe.style.height = "100%";  

  //iframeDocument.body.style.transform = `scale(${.6})`;
  //iframeDocument.body.style.transformOrigin = "center top";
  //iframeDocument.style.overflow = "auto";
}

// Aguarda o carregamento do conteúdo do iframe antes de ajustar a altura
iframe.addEventListener("load", adjustIframeHeight);

//coluna2.style.transform = `scale(${0.6})`;
