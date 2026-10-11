/* Variáveis para o modo claro (Padrão) */
:root {
    --cor-fundo: #ffffff;
    --cor-texto: #333333;
    --cor-primaria: #0056b3;
    --cor-cartao: #f4f4f4;
}

/* Variáveis para o modo escuro */
[data-theme="dark"] {
    --cor-fundo: #1e1e1e;
    --cor-texto: #f4f4f4;
    --cor-primaria: #4da3ff;
    --cor-cartao: #2a2a2a;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    margin: 0;
    padding: 0;
    /* Suaviza a transição de cores ao mudar o tema */
    transition: background-color 0.3s, color 0.3s;
}

header {
    text-align: center;
    padding: 2rem;
    background-color: var(--cor-cartao);
}

button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: var(--cor-primaria);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

main {
    padding: 2rem;
    max-width: 800px;
    margin: auto;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.cartao {
    background-color: var(--cor-cartao);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}