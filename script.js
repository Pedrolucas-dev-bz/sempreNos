/*
PADRÃO DO PROJETO SEMPRE-NOS
- Funções nomeadas e comentadas
- Não alterar HTML ou CSS diretamente sem permissão
- Código organizado e comentado
*/

// Crie corações flutuantes animados no fundo do site, seguindo o padrão do projeto sempreNós:
// - Cada coração deve ser vermelho e em formato de losango com bordas arredondadas (estilo coração CSS)
// - Eles devem flutuar suavemente de baixo para cima e desaparecer ao chegar no topo
// - A posição horizontal de cada coração deve ser aleatória
// - Cada coração deve ter velocidade e tamanho ligeiramente diferentes para parecer natural
// - Devem ser criados continuamente a cada 500ms
// - Código deve ser limpo, comentado e organizado, seguindo os padrões de HTML, CSS e JS do projeto
// - Não alterar outros elementos do site, apenas adicionar essa animação

function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.width = (Math.random() * 20 + 15) + 'px';
    heart.style.height = (Math.random() * 20 + 15) + 'px';
    heart.style.backgroundColor = '#d6336c';
    heart.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
    heart.style.zIndex = '999';
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;

    document.body.appendChild(heart);

    // Remove the heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, (Math.random() * 3 + 2) * 1000);
}

// Create hearts every 500ms
setInterval(createFloatingHearts, 500);

document.addEventListener('DOMContentLoaded', function () {
  // placeholder para inicializações futuras
});
