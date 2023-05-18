// Obtém referência ao elemento iframe
const iframe = document.getElementById("preview-iframe");
const parentContainer = document.getElementById("preview-container");

// Define a URL do site que você deseja pré-visualizar
const targetURL = "../index.html";

// Define o tamanho do iframe
const iframeWidth = 370;
const iframeHeight = 1;
iframe.style.transform = `scale(${.6})`;
iframe.style.transformOrigin = "top left";

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