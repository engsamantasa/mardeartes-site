// js/script.js

// Espera o documento carregar antes de rodar o JS
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os "pontinhos" do slider
    const dots = document.querySelectorAll('.dot');

    // Adiciona um "ouvinte" de clique para cada pontinho
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            
            // Remove a classe 'active' de todos
            dots.forEach(d => d.classList.remove('active'));
            
            // Adiciona a classe 'active' apenas no que foi clicado
            e.target.classList.add('active');

            // --- Lógica futura ---
            // Aqui você adicionaria a lógica para trocar a 
            // imagem principal (a .hero-image img)
            // com base em qual ponto foi clicado.
        });
    });

});


    /* --- LÓGICA DO FILTRO DO PORTFÓLIO ---

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Adiciona a classe 'active' SÓ no botão clicado
            button.classList.add('active');

            // 3. Pega o valor do filtro (ex: "all", "parede", "estatuas")
            const filterValue = button.getAttribute('data-filter');

            // 4. Passa por cada item da galeria
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                // 5. Verifica se o item deve ser mostrado
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block'; // 'block' é o padrão
                } else {
                    item.style.display = 'none'; // Esconde o item
                }
            });
        });
    });
    }

    */

    // Em: js/script.js



// --- LÓGICA DO FILTRO E BUSCA DO CATÁLOGO ---

// 1. Encontrar todos os elementos para se usar
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const searchBar = document.getElementById('search-bar');

// 2. Variáveis para guardar o estado atual dos filtros
let currentCategory = 'all';
let currentSearchTerm = '';

// 3. Função Central de Filtragem
function filterGallery() {
    
    // Passa por CADA item da galeria
    galleryItems.forEach(item => {

        // Pega o nome do item (do <h3>) e coloca em minúsculas
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        
        // Pega a categoria do item (do 'data-category')
        const itemCategory = item.getAttribute('data-category');

        // --- CONDIÇÃO 1: O item bate com a CATEGORIA selecionada? ---
        // (Será 'true' se a categoria for 'all' OU se bater com a do item)
        const categoryMatch = (currentCategory === 'all' || currentCategory === itemCategory);

        // --- CONDIÇÃO 2: O item bate com a BUSCA? ---
        // (Será 'true' se o nome do item INCLUIR o texto da busca)
        const searchMatch = itemName.includes(currentSearchTerm);

        // --- DECISÃO FINAL: Mostrar ou Esconder? ---
        // O item SÓ APARECE se bater com AMBAS as condições
        if (categoryMatch && searchMatch) {
            item.style.display = 'block'; // Mostra
        } else {
            item.style.display = 'none'; // Esconde
        }
    });
}

// 4. "Ouvinte" para os BOTÕES DE CATEGORIA
// (Só roda se os botões existirem na página)

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' de todos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona 'active' só no clicado
            button.classList.add('active');

            // ATUALIZA a variável da categoria
            currentCategory = button.getAttribute('data-filter');
            
            // RODA A FUNÇÃO DE FILTRAGEM
            filterGallery();
        });
    });
}

// 5. "Ouvinte" para a BARRA DE BUSCA
// (Só roda se a barra existir na página)
if (searchBar) {
    // O evento 'input' dispara a cada letra digitada
    searchBar.addEventListener('input', () => {
        
        // ATUALIZA a variável do termo de busca (em minúsculas)
        currentSearchTerm = searchBar.value.toLowerCase();
        
        // RODA A FUNÇÃO DE FILTRAGEM
        filterGallery();
    });
}