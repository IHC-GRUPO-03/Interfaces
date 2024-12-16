document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const priceSelect = document.getElementById('price');
    const productCards = document.querySelectorAll('.product-card');

    // Función para filtrar productos
    function filterProducts() {
        const selectedCategory = categorySelect.value;
        const selectedPrice = priceSelect.value;

        productCards.forEach(function(card) {
            const category = card.getAttribute('data-category');
            const price = card.getAttribute('data-price');

            // Filtrar por categoría
            const isCategoryMatch = selectedCategory === 'all' || selectedCategory === category;
            // Filtrar por precio
            const isPriceMatch = selectedPrice === 'all' || (selectedPrice === 'low' && parseFloat(card.querySelector('.price').textContent.replace('$', '')) < 10)
                || (selectedPrice === 'mid' && parseFloat(card.querySelector('.price').textContent.replace('$', '')) >= 10 && parseFloat(card.querySelector('.price').textContent.replace('$', '')) <= 30)
                || (selectedPrice === 'high' && parseFloat(card.querySelector('.price').textContent.replace('$', '')) > 30);

            // Mostrar u ocultar producto según filtro
            if (isCategoryMatch && isPriceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Añadir eventos a los filtros
    categorySelect.addEventListener('change', filterProducts);
    priceSelect.addEventListener('change', filterProducts);

    // Aplicar filtro inicial
    filterProducts();
});