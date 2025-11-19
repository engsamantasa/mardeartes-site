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


// --- LÓGICA DO FILTRO DO PORTFÓLIO ---

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