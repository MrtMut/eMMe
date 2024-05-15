// Scroll to top button
let goTop = () => {
    const button = document.getElementById("goTop");
    const header_shadow = document.getElementById("headerId");
    let nav_menu_items = document.querySelectorAll(".nav_menu_items");
    let menu_input = document.querySelector("#menu-input");
    let menu_burguer = document.querySelector(".menu-burguer");
    let menu_equ = document.querySelector(".menu-equ");
    let nav_menu = document.querySelector(".nav_menu");

    window.onscroll = () => {
        button.classList[
            (document.documentElement.scrollTop > 300) ? "add" : "remove"
            ]("visible");
        if (document.documentElement.scrollTop > 1) {
            header_shadow.classList.remove("header_shadow_Mini");
        } else {
            header_shadow.classList.add("header_shadow_Mini");
        }
        if (document.documentElement.scrollTop > 1) {
            nav_menu_items[0].style.top = "30px";
        } else {
            nav_menu_items[0].style.top = "50px";
        }
    }

    button.onclick = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }

    let menuShow = () => {
        menu_burguer.addEventListener("click", () => {
            menu_burguer.style.visibility = "hidden";
            menu_equ.style.visibility = "visible";
            nav_menu.style.visibility = "visible";
        });
    }
    menuShow();

    let menuClickedNoShow = () => {
        nav_menu_items.forEach(item => {
            item.addEventListener("click", () => {
                menu_equ.style.visibility = "hidden";
                menu_burguer.style.visibility = "visible";
                nav_menu.style.visibility = "hidden";
                if (menu_input.checked == true) {
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
};

goTop();