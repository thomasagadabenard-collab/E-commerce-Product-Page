const ham = document.querySelector(".hamburger");

const nav = document.querySelector(".nav-container");

const close = document.querySelector(".close");

const plus = document.querySelector(".plus");

const minus = document.querySelector(".minus");

let count = document.querySelector(".count");

let addToCart = document.querySelector(".add-cart");

let cart = document.querySelector(".cart");

let cartCount = document.querySelector(".cart-count");

let heading = document.querySelector(".heading");

const cartDisplay = document.querySelector(".cart-display");



ham.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
})

window.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});

count.textContent = 0;

plus.addEventListener("click", (e) => {
    e.stopPropagation();
    count.textContent = Number(count.textContent) + 1;
});

minus.addEventListener("click", (e) => {
    e.stopPropagation();

    let current = Number(count.textContent);

    if(current > 0){
        count.textContent = current - 1;
    }
});

addToCart.addEventListener("click", () => {
    cartCount.textContent = count.textContent;
})

/*cart.addEventListener("click", (e) => {
    
    e.stopPropagation();

    cartDisplay.innerHTML = ""; 

    const quantity = Number(cartCount.textContent);

    if (quantity === 0) {

        const cartDiv = document.createElement("div");
        cartDiv.className = "cart-container-one";

        const title = document.createElement("h4");
        title.className = "cart-container-one-h4";
        title.textContent = "Cart";

        const message = document.createElement("p");
        message.className = "cart-container-one-paragraph";
        message.textContent = "Your cart is empty";

        cartDiv.appendChild(title);
        cartDiv.appendChild(message);

        cartDisplay.appendChild(cartDiv);

    } else {

        const total = quantity * 125;

        const cartContainer = document.createElement("div");
        cartContainer.className = "cart-container-two";

        const cartWidth = document.createElement("div");
        cartWidth.className = "cart-width";

        const title = document.createElement("h4");
        title.className = "cart-container-one-h4";
        title.textContent = "Cart";

        const grid = document.createElement("div");
        grid.className = "cart-container-two-grid";

        const productImg = document.createElement("img");
        productImg.src = "images/image-product-1-thumbnail.jpg";
        productImg.className = "cart-grid-img";

        const textDiv = document.createElement("div");

        const small = document.createElement("small");
        small.innerHTML = `
        Fall Limited Edition Sneakers <br>
        $125.00 x <span class="cart-amount">${quantity}</span>
        <span class="dollar">$</span><span class="total">${total}</span><span class="remainder">.00</span>
        `;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "images/icon-delete.svg";
        deleteIcon.className = "delete";

        deleteIcon.addEventListener("click", () => {
            cartCount.textContent = 0;
            count.textContent = 0;
            cartDisplay.innerHTML = "";
        });

        const checkout = document.createElement("p");
        checkout.className = "checkout";
        checkout.textContent = "Checkout";

        textDiv.appendChild(small);

        grid.appendChild(productImg);
        grid.appendChild(textDiv);
        grid.appendChild(deleteIcon);

        cartWidth.appendChild(title);
        cartWidth.appendChild(grid);
        cartWidth.appendChild(checkout);

        cartContainer.appendChild(cartWidth);

        cartDisplay.appendChild(cartContainer);
    }
});


window.addEventListener("click", () => {
    cartDisplay.remove();
    
});*/

let isCartOpen = false;

cart.addEventListener("click", (e) => {
    e.stopPropagation();

    isCartOpen = !isCartOpen;

    if (isCartOpen) {
        renderCart();
    } else {
        cartDisplay.innerHTML = "";
    }
});

function renderCart() {
    cartDisplay.innerHTML = "";

    const quantity = Number(cartCount.textContent);

    if (quantity === 0) {
        const cartDiv = document.createElement("div");
        cartDiv.className = "cart-container-one";

        const title = document.createElement("h4");
        title.className = "cart-container-one-h4";
        title.textContent = "Cart";

        const message = document.createElement("p");
        message.className = "cart-container-one-paragraph";
        message.textContent = "Your cart is empty";

        cartDiv.appendChild(title);
        cartDiv.appendChild(message);

        cartDisplay.appendChild(cartDiv);
    } else {
        const total = quantity * 125;

        const cartContainer = document.createElement("div");
        cartContainer.className = "cart-container-two";

        const cartWidth = document.createElement("div");
        cartWidth.className = "cart-width";

        const title = document.createElement("h4");
        title.className = "cart-container-one-h4";
        title.textContent = "Cart";

        const grid = document.createElement("div");
        grid.className = "cart-container-two-grid";

        const productImg = document.createElement("img");
        productImg.src = "images/image-product-1-thumbnail.jpg";
        productImg.className = "cart-grid-img";

        const textDiv = document.createElement("div");

        const small = document.createElement("small");
        small.innerHTML = `
            Fall Limited Edition Sneakers <br>
            $125.00 x <span class="cart-amount">${quantity}</span>
            <span class="dollar">$</span><span class="total">${total}</span><span class="remainder">.00</span>
        `;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "images/icon-delete.svg";
        deleteIcon.className = "delete";

        deleteIcon.addEventListener("click", () => {
            cartCount.textContent = 0;
            count.textContent = 0;
            cartDisplay.innerHTML = "";
            isCartOpen = false; // make sure state is updated
        });

        const checkout = document.createElement("p");
        checkout.className = "checkout";
        checkout.textContent = "Checkout";

        textDiv.appendChild(small);

        grid.appendChild(productImg);
        grid.appendChild(textDiv);
        grid.appendChild(deleteIcon);

        cartWidth.appendChild(title);
        cartWidth.appendChild(grid);
        cartWidth.appendChild(checkout);

        cartContainer.appendChild(cartWidth);

        cartDisplay.appendChild(cartContainer);
    }
}

window.addEventListener("click", (e) => {
    if (!cartDisplay.contains(e.target) && e.target !== cart) {
        cartDisplay.innerHTML = "";
        isCartOpen = false;
    }
});