/* // Obtém referência ao elemento iframe
const iframe = document.getElementById("preview-iframe");
const parentContainer = document.getElementById("preview-container");

// Define a URL do site que você deseja pré-visualizar
const targetURL = "../index.html";

// Define o tamanho do iframe
const iframeWidth = 370;
const iframeHeight = 1;
iframe.style.transform = `scale(${.6})`;
iframe.style.transformOrigin = "top right";

// Define o atributo src do iframe como a URL do site alvo
iframe.src = targetURL;

// Aguarda o carregamento do conteúdo do iframe antes de ajustar o tamanho
iframe.addEventListener("load", adjustIframeSize);

// Função para ajustar o tamanho do iframe com base no conteúdo
function adjustIframeSize() {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const iframeBody = iframeDocument.body;
    
    // Define temporariamente a altura do iframe para 1px para medir o conteúdo
    iframe.style.height = "1px";
    
    // Obtém a altura do conteúdo da página dentro do iframe
    const contentHeight = iframeBody.scrollHeight;
    
    // Ajusta o tamanho do iframe para acomodar o conteúdo da página
    iframe.style.height = `${Math.max(contentHeight, iframeHeight)}px`;
    
    // Define a largura do iframe para evitar a rolagem horizontal
    iframe.style.width = `${iframeWidth}px`;

    adjustParentSize();
}

function adjustParentSize() {
    const parentWidth = iframe.offsetWidth * 0.6;
    const parentHeight = iframe.offsetHeight * 0.6;
    parentContainer.style.width = `${parentWidth}px`;
    parentContainer.style.height = `${parentHeight}px`;
} */


// Obtém referência aos elementos
const iframe = document.getElementById("preview-iframe");

// Define a URL do site que você deseja pré-visualizar
const targetURL = "../index.html";

// Define a altura fixa do iframe em pixels
const iframeHeight = 600;
iframe.style.transform = `scale(${0.6})`;
iframe.style.transformOrigin = "center";

// Define o atributo src do iframe como a URL do site alvo
iframe.src = targetURL;

// Função para ajustar a altura do iframe com base no tamanho do conteúdo
function adjustIframeHeight() {
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const contentHeight = iframeDocument.documentElement.scrollHeight;
  iframe.style.height = `${Math.max(contentHeight, iframeHeight)}px`;
}

// Aguarda o carregamento do conteúdo do iframe antes de ajustar a altura
iframe.addEventListener("load", adjustIframeHeight);
