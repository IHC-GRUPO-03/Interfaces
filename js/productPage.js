document.addEventListener('DOMContentLoaded', function () {
    const viewButtons = document.querySelectorAll('.view-product');
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');

    const products = [
        {
            title: 'Bolígrafo de Gel',
            image: '../img/boli-gel.webp',
            description: 'Bolígrafo de gel con tinta suave y de secado rápido.',
            price: '$5.99'
        },
        {
            title: 'Lápices de Colores',
            image: '../img/lapi-colors.webp',
            description: 'Lápices de colores brillantes ideales para arte y dibujo.',
            price: '$8.49'
        },
        {
            title: 'Estuche de Pinturas',
            image: '../img/estuche.webp',
            description: 'Estuche con pinturas de alta calidad para artistas.',
            price: '$12.99'
        }
    ];

    // Mostrar los detalles del producto cuando se haga clic en el enlace "Ver producto"
    viewButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado (navegar)

            const productId = button.closest('.product-card').getAttribute('data-product') - 1;
            const product = products[productId];

            // Actualizar los detalles del producto en la sección principal
            productTitle.textContent = product.title;
            productPrice.textContent = product.price;
            productDescription.textContent = product.description;

            // Cambiar la imagen del producto
            document.querySelector('.product-image img').src = product.image;
        });
    });
});