// Mobil menyu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Menyu havolasini bosganda menyuni yopish
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Mahsulotlarni filtrlash
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        productCards.forEach(card => {
            const category = card.dataset.category;
            const shouldShow =
                selectedFilter === "all" || category === selectedFilter;

            card.style.display = shouldShow ? "" : "none";
        });
    });
});

// Sevimlilar
const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoritesCount = document.getElementById("favoritesCount");
let favorites = 0;

favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {
        const isFavorite = button.classList.toggle("active");

        button.textContent = isFavorite ? "♥" : "♡";
        favorites += isFavorite ? 1 : -1;
        favoritesCount.textContent = favorites;
    });
});

// Savat
const cartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
let cart = 0;

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;

        const productName = button.dataset.name;
        showToast(`${productName} savatga qo‘shildi!`);
    });
});

// Savat tugmasi
cartBtn.addEventListener("click", () => {
    if (cart === 0) {
        showToast("Savatingiz hozircha bo‘sh.");
    } else {
        showToast(`Savatingizda ${cart} ta mahsulot bor.`);
    }
});

// Sevimlilar tugmasi
const favoritesBtn = document.getElementById("favoritesBtn");

favoritesBtn.addEventListener("click", () => {
    if (favorites === 0) {
        showToast("Sevimlilar ro‘yxati hozircha bo‘sh.");
    } else {
        showToast(`Sizda ${favorites} ta sevimli mahsulot bor.`);
    }
});

// Bildirishnoma
function showToast(message) {
    const oldToast = document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}