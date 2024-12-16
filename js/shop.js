document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los checkboxes
    const categoryFilters = document.querySelectorAll('input[name="category"]');
    const priceFilters = document.querySelectorAll('input[name="price"]');
    const productCards = document.querySelectorAll('.product-card');

    // Función para aplicar los filtros
    function applyFilters() {
        const selectedCategories = Array.from(categoryFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedPrices = Array.from(priceFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Mostrar u ocultar productos según los filtros seleccionados
        productCards.forEach(card => {
            const productCategory = card.getAttribute('data-category');
            const productPrice = card.getAttribute('data-price');
            const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));

            // Comprobar si el producto cumple con los filtros de categoría y precio
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
            const priceMatch = selectedPrices.length === 0 ||
                (selectedPrices.includes('low') && price < 10) ||
                (selectedPrices.includes('mid') && price >= 10 && price <= 30) ||
                (selectedPrices.includes('high') && price > 30);

            // Mostrar u ocultar producto
            if (categoryMatch && priceMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Agregar event listeners a los filtros
    categoryFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    priceFilters.forEach(filter => filter.addEventListener('change', applyFilters));

    // Aplicar filtros al cargar la página
    applyFilters();
});