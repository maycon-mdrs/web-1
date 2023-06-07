// Função para verificar e alterar a classe do elemento
function verificarTamanhoPagina() {

    const colOne = document.getElementById('col-1');
    const previewBTN = document.getElementById('preview-btn');
    const modalIframe = document.getElementById('modal-iframe');
    const divIframe = document.getElementById('iframe-div');
    const iframe = 
    `
    <div class="div-3-col-2"> 
        <div class="div-4-col-2">
            <iframe id="preview-iframe" frameborder="0" marginheight="0" height="100%" marginwidth="0" allowfullscreen="true"></iframe>
        </div>
    </div>  
    `;

    var larguraPagina = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Define a largura máxima desejada
    var larguraMaxima = 800;

    // Verifica se a largura da página é menor que a largura máxima
    if (larguraPagina < larguraMaxima) {
        // Muda a classe do elemento
        colOne.className = 'col-12 mt-4'; //col-12 d-flex justify-content-center mt-4
        //previewBTN.style.visibility = "visible";

        //modalIframe.innerHTML = iframe;
        //loadIframe();
    } else {
        // Remove a classe do elemento, se necessário
        colOne.className = 'col-8 mt-4'; //col-8 d-flex justify-content-center mt-4
        //previewBTN.style.visibility = "hidden";
        
        //divIframe.innerHTML = iframe;
        //loadIframe();
    }

}

// Chama a função para verificar o tamanho da página quando o documento é carregado
window.addEventListener("load", verificarTamanhoPagina);

// Chama a função sempre que a página for redimensionada
window.addEventListener("resize", verificarTamanhoPagina);
