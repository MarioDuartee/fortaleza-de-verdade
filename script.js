// Array de dados com informações turísticas e históricas de Fortaleza
const locaisTuristicos = [
    {
        nome: "Centro Dragão do Mar",
        descricao: "Um dos maiores centros culturais do Brasil. Conta com museus, cinemas, teatro e planetário."
    },
    {
        nome: "Mercado Central",
        descricao: "O melhor lugar para comprar artesanato, redes, castanhas e produtos típicos cearenses."
    },
    {
        nome: "Praia do Futuro",
        descricao: "Famosa por suas megabarracas com infraestrutura completa e a tradicional caranguejada."
    },
    {
        nome: "Beira-Mar e Feirinha",
        descricao: "Perfeita para caminhadas no fim de tarde, esportes e compras de lembrancinhas regionais."
    }
];

// Função para renderizar os locais na página dinamicamente
function renderizarLocais() {
    const container = document.getElementById('lista-turismo');
    
    locaisTuristicos.forEach(local => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao';
        cartao.innerHTML = `
            <h3>${local.nome}</h3>
            <p>${local.descricao}</p>
        `;
        container.appendChild(cartao);
    });
}

// Função para alternar o tema (Claro/Escuro)
const botaoTema = document.getElementById('btn-tema');
botaoTema.addEventListener('click', () => {
    const temaAtual = document.documentElement.getAttribute('data-theme');
    if (temaAtual === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// Executa a função de renderizar os locais assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderizarLocais();
});