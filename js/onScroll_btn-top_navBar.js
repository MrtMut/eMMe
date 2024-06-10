// Scroll to top button
let goTop = () => {
    const buttonGoTop = document.getElementById("goTop");

    window.onscroll = () => {
        buttonGoTop.classList[
            (document.documentElement.scrollTop > 250) ? "add" : "remove"
            ]("visible");
    }

    buttonGoTop.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
};

const menuBpMobiles = () => {
    const nav_menu_item = document.querySelectorAll(".nav_menu_item");
    const menu_input = document.querySelector("#menu-input");
    const menu_burguer = document.querySelector(".menu-burguer");
    const menu_equ = document.querySelector(".menu-equ");
    const nav_menu = document.querySelector(".nav_menu");

    if (window.innerWidth < 862) {
        let menuShow = () => {
            menu_burguer.addEventListener("click", () => {
                menu_burguer.style.visibility = "hidden";
                menu_equ.style.visibility = "visible";
                nav_menu.style.visibility = "visible";
            });
        }
        menuShow();

        let menuClickedNoShow = () => {
            nav_menu_item.forEach(item => {
                item.addEventListener("click", () => {
                    menu_equ.style.visibility = "hidden";
                    menu_burguer.style.visibility = "visible";
                    nav_menu.style.visibility = "hidden";
                    if (menu_input.checked === true) {
                        menu_input.checked = false;

                    }
                });
            });
        }
        menuClickedNoShow();

        let equShow = () => {
            menu_equ.addEventListener("click", () => {
                menu_burguer.style.visibility = "visible";
            })
        }
        equShow();
    }
}

const menuBpDesktop = () => {
    const nav_menu = document.querySelector(".nav_menu");
    const nav_menu_items1 = document.querySelector(".nav_menu_items");

    if (window.innerWidth >= 862) {
        nav_menu.style.visibility = "visible";
        nav_menu_items1.style.display = "flex";
        nav_menu_items1.style.visibility = "visible";
    }
}

window.addEventListener("resize", () => {
    menuBpDesktop();
});

menuBpMobiles();
goTop();