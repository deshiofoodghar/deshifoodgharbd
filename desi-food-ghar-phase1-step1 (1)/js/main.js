/* =========================================================
   দেশী ফুড ঘর
   MAIN JAVASCRIPT
   Phase 1 — Step 2
========================================================= */


/* =========================================================
   01. GLOBAL STATE
========================================================= */

const APP_STATE = {

    cartCount: 0,

    wishlistCount: 0,

    searchQuery: "",

    mobileMenuOpen: false

};


/* =========================================================
   02. DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeSite();

    }
);


/* =========================================================
   03. INITIALIZE SITE
========================================================= */

function initializeSite() {

    initializeYear();

    initializeSearch();

    initializeNavigation();

    initializeQuickActions();

    initializeMobileMenu();

    initializeWhatsApp();

}


/* =========================================================
   04. CURRENT YEAR
========================================================= */

function initializeYear() {

    const yearElement =
        document.getElementById(
            "current-year"
        );


    if (!yearElement) {

        return;

    }


    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   05. SEARCH
========================================================= */

function initializeSearch() {

    const searchInput =
        document.getElementById(
            "site-search"
        );


    const searchButton =
        document.getElementById(
            "search-button"
        );


    const suggestions =
        document.getElementById(
            "search-suggestions"
        );


    if (!searchInput) {

        return;

    }


    /* ---------------------------------------------
       Input
    --------------------------------------------- */

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            APP_STATE.searchQuery =
                query;


            if (
                query.length > 0
            ) {

                showSearchSuggestions(
                    query
                );

            } else {

                hideSearchSuggestions();

            }

        }
    );


    /* ---------------------------------------------
       Enter
    --------------------------------------------- */

    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                performSearch(
                    searchInput.value
                );

            }

        }
    );


    /* ---------------------------------------------
       Search button
    --------------------------------------------- */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            () => {

                performSearch(
                    searchInput.value
                );

            }
        );

    }


    /* ---------------------------------------------
       Suggestions
    --------------------------------------------- */

    if (suggestions) {

        suggestions
            .querySelectorAll(
                "[data-search]"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            const value =
                                button.dataset.search;

                            searchInput.value =
                                value;

                            performSearch(
                                value
                            );

                        }
                    );

                }
            );

    }


    /* ---------------------------------------------
       Click outside
    --------------------------------------------- */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !event.target.closest(
                    ".header-search"
                )
            ) {

                hideSearchSuggestions();

            }

        }
    );

}


/* =========================================================
   06. SEARCH SUGGESTIONS
========================================================= */

function showSearchSuggestions(
    query
) {

    const suggestions =
        document.getElementById(
            "search-suggestions"
        );


    if (!suggestions) {

        return;

    }


    const buttons =
        suggestions.querySelectorAll(
            "[data-search]"
        );


    let hasMatch = false;


    buttons.forEach(
        (button) => {

            const text =
                button.dataset.search
                    .toLowerCase();


            if (
                text.includes(query)
            ) {

                button.style.display =
                    "block";

                hasMatch = true;

            } else {

                button.style.display =
                    "none";

            }

        }
    );


    suggestions.hidden =
        !hasMatch;

}


/* =========================================================
   07. HIDE SEARCH SUGGESTIONS
========================================================= */

function hideSearchSuggestions() {

    const suggestions =
        document.getElementById(
            "search-suggestions"
        );


    if (!suggestions) {

        return;

    }


    suggestions.hidden =
        true;

}


/* =========================================================
   08. PERFORM SEARCH
========================================================= */

function performSearch(
    rawQuery
) {

    const query =
        String(rawQuery || "")
            .trim();


    if (!query) {

        return;

    }


    APP_STATE.searchQuery =
        query;


    hideSearchSuggestions();


    /*
       Full product filtering will be added
       in the Product Listing phase.
    */


    const productSection =
        document.getElementById(
            "products"
        );


    if (productSection) {

        productSection.scrollIntoView(
            {
                behavior: "smooth",
                block: "start"
            }
        );

    }


    console.info(
        "দেশী ফুড ঘর Search:",
        query
    );

}


/* =========================================================
   09. NAVIGATION
========================================================= */

function initializeNavigation() {

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.forEach(
                        (item) => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    link.classList.add(
                        "active"
                    );


                    closeMobileMenu();

                }
            );

        }
    );


    /*
       Smooth scrolling for internal links.
    */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const targetID =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetID ||
                            targetID === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetID
                            );


                        if (!target) {

                            return;

                        }


                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "start"
                            }
                        );

                    }
                );

            }
        );

}


/* =========================================================
   10. QUICK ACTIONS
========================================================= */

function initializeQuickActions() {

    const actionButtons =
        document.querySelectorAll(
            "[data-action]"
        );


    actionButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;


                    handleAction(
                        action
                    );

                }
            );

        }
    );

}


/* =========================================================
   11. ACTION HANDLER
========================================================= */

function handleAction(
    action
) {

    switch (action) {


        case "wishlist":

            showTemporaryMessage(
                "উইশলিস্ট ফিচারটি পরবর্তী ধাপে যুক্ত হবে।"
            );

            break;


        case "account":

            showTemporaryMessage(
                "My Account ফিচারটি Phase 3-এ যুক্ত হবে।"
            );

            break;


        case "cart":

            showTemporaryMessage(
                "শপিং কার্ট ফিচারটি পরবর্তী ধাপে যুক্ত হবে।"
            );

            break;


        default:

            break;

    }

}


/* =========================================================
   12. TEMPORARY MESSAGE
========================================================= */

function showTemporaryMessage(
    message
) {

    let messageBox =
        document.getElementById(
            "site-message"
        );


    if (!messageBox) {

        messageBox =
            document.createElement(
                "div"
            );


        messageBox.id =
            "site-message";


        messageBox.style.position =
            "fixed";

        messageBox.style.left =
            "50%";

        messageBox.style.bottom =
            "90px";

        messageBox.style.transform =
            "translateX(-50%)";

        messageBox.style.zIndex =
            "500";

        messageBox.style.maxWidth =
            "calc(100% - 30px)";

        messageBox.style.padding =
            "12px 18px";

        messageBox.style.borderRadius =
            "999px";

        messageBox.style.background =
            "#1f5d3a";

        messageBox.style.color =
            "#ffffff";

        messageBox.style.fontSize =
            "14px";

        messageBox.style.fontWeight =
            "600";

        messageBox.style.textAlign =
            "center";

        document.body.appendChild(
            messageBox
        );

    }


    messageBox.textContent =
        message;


    clearTimeout(
        messageBox._timer
    );


    messageBox._timer =
        setTimeout(
            () => {

                messageBox.remove();

            },
            2500
        );

}


/* =========================================================
   13. MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const button =
        document.getElementById(
            "mobile-menu-button"
        );


    const nav =
        document.getElementById(
            "main-nav"
        );


    if (
        !button ||
        !nav
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            APP_STATE.mobileMenuOpen =
                !APP_STATE.mobileMenuOpen;


            button.setAttribute(
                "aria-expanded",
                String(
                    APP_STATE.mobileMenuOpen
                )
            );


            nav.classList.toggle(
                "mobile-open",
                APP_STATE.mobileMenuOpen
            );

        }
    );

}


/* =========================================================
   14. CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

    const button =
        document.getElementById(
            "mobile-menu-button"
        );


    const nav =
        document.getElementById(
            "main-nav"
        );


    APP_STATE.mobileMenuOpen =
        false;


    if (button) {

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (nav) {

        nav.classList.remove(
            "mobile-open"
        );

    }

}


/* =========================================================
   15. WHATSAPP
========================================================= */

function initializeWhatsApp() {

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    console.info(
                        "WhatsApp support opened."
                    );

                }
            );

        }
    );

}


/* =========================================================
   16. PRODUCT DATA ACCESS
========================================================= */

function getProducts() {

    if (
        !window.SITE_DATA ||
        !Array.isArray(
            window.SITE_DATA.products
        )
    ) {

        return [];

    }


    return window.SITE_DATA.products;

}


/* =========================================================
   17. CATEGORY DATA ACCESS
========================================================= */

function getCategories() {

    if (
        !window.SITE_DATA ||
        !Array.isArray(
            window.SITE_DATA.categories
        )
    ) {

        return [];

    }


    return window.SITE_DATA.categories;

}


/* =========================================================
   18. SEARCH PRODUCT DATA
   Actual UI filtering comes later.
========================================================= */

function searchProducts(
    query
) {

    const products =
        getProducts();


    const normalizedQuery =
        String(query || "")
            .trim()
            .toLowerCase();


    if (!normalizedQuery) {

        return products;

    }


    return products.filter(
        (product) => {

            const searchableText = [

                product.name,

                product.category,

                product.subcategory,

                product.origin,

                product.description

            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();


            return searchableText.includes(
                normalizedQuery
            );

        }
    );

}


/* =========================================================
   19. CART FOUNDATION
========================================================= */

function updateCartCount(
    count
) {

    APP_STATE.cartCount =
        Math.max(
            0,
            Number(count) || 0
        );


    document
        .querySelectorAll(
            ".cart-count, .mobile-cart-count"
        )
        .forEach(
            (element) => {

                element.textContent =
                    APP_STATE.cartCount;

            }
        );

}


/* =========================================================
   20. WISHLIST FOUNDATION
========================================================= */

function updateWishlistCount(
    count
) {

    APP_STATE.wishlistCount =
        Math.max(
            0,
            Number(count) || 0
        );

}


/* =========================================================
   21. GLOBAL APP ACCESS
========================================================= */

window.DeshiFoodGhar = {

    state:
        APP_STATE,

    getProducts,

    getCategories,

    searchProducts,

    updateCartCount,

    updateWishlistCount

};
