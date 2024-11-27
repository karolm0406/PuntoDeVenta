// Archivo: script.js

// Carrito inicial vacío
let cart = [];
let selectedZapatilla = '';
let selectedCalcetin = '';

// Función para seleccionar un producto de imagen
function selectProduct(productName, productPrice) {
    if (productName.startsWith('Zapatilla')) {
        selectedZapatilla = { name: productName, price: productPrice };
    } else {
        selectedCalcetin = { name: productName, price: productPrice };
    }
}

// Función para agregar el combo al carrito
function addComboToCart(comboName, comboPrice) {
    if (selectedZapatilla && selectedCalcetin) {
        cart.push(selectedZapatilla);
        cart.push(selectedCalcetin);
        updateCart();
    }
}

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');

    // Vacía la lista del carrito antes de agregar los elementos
    cartItems.innerHTML = '';

    // Recorre los productos en el carrito y actualiza la lista
    let totalAmount = 0;
    cart.forEach((item) => {
        totalAmount += item.price;

        // Agrega el elemento a la lista
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Muestra el total de la compra
    total.innerText = `Total: $${totalAmount}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    selectedZapatilla = '';
    selectedCalcetin = '';
    updateCart();
}


