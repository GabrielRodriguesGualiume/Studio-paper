// =========================================
// STUDIO PAPER - Script
// =========================================

// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Abrir e fechar o menu no celular
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link (no celular)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("aberto");
  });
});

// Lista de produtos (dados fictícios)
const produtos = [
  {
    nome: "Caderno Universitário",
    descricao: "Capa dura, 200 folhas pautadas.",
    preco: "R$ 39,90",
    imagem: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
  },
  {
    nome: "Kit de Canetas Coloridas",
    descricao: "6 cores vibrantes para anotações.",
    preco: "R$ 24,90",
    imagem: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80"
  },
  {
    nome: "Agenda 2026",
    descricao: "Planejamento semanal com espaço para metas.",
    preco: "R$ 59,90",
    imagem: "https://images.unsplash.com/photo-1568205612837-017257d2310a?auto=format&fit=crop&w=500&q=80"
  },
  {
    nome: "Estojo Escolar",
    descricao: "Espaço amplo e compartimentos internos.",
    preco: "R$ 34,90",
    imagem: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80"
  },
  {
    nome: "Marcadores de Texto",
    descricao: "Kit com 5 cores pastel para destacar.",
    preco: "R$ 19,90",
    imagem: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80"
  },
  {
    nome: "Kit Presente Papelaria",
    descricao: "Caderno, caneta e marcador de página.",
    preco: "R$ 69,90",
    imagem: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=500&q=80"
  }
];

// Monta os cards de produto na página
const produtosGrid = document.getElementById("produtosGrid");

produtos.forEach((produto) => {
  const card = document.createElement("div");
  card.classList.add("produto-card", "fade-in");

  card.innerHTML = `
    <div class="produto-card__imagem">
      <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
    </div>
    <div class="produto-card__corpo">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <div class="produto-card__rodape">
        <span class="produto-card__preco">${produto.preco}</span>
        <button class="produto-card__botao">Comprar</button>
      </div>
    </div>
  `;

  produtosGrid.appendChild(card);
});

// Feedback simples ao clicar em "Comprar"
produtosGrid.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("produto-card__botao")) {
    const botao = evento.target;
    const textoOriginal = botao.textContent;

    botao.textContent = "Adicionado!";

    setTimeout(() => {
      botao.textContent = textoOriginal;
    }, 1500);
  }
});

// Animação simples ao rolar a página (mostra os elementos aos poucos)
const elementosFade = document.querySelectorAll(".fade-in");

function verificarScroll() {
  const alturaJanela = window.innerHeight;

  elementosFade.forEach((elemento) => {
    const posicao = elemento.getBoundingClientRect().top;

    if (posicao < alturaJanela - 80) {
      elemento.classList.add("mostrar");
    }
  });
}

window.addEventListener("scroll", verificarScroll);
window.addEventListener("load", verificarScroll);
