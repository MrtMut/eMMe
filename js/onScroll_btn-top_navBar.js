// Scroll to top button
let goTop = () => {
    const buttonGoTop = document.getElementById("goTop");
    const nav_menu_items = document.querySelector(".nav_menu_items");
    const title_h1 = document.querySelector(".title_h1");
    const headerAdd = document.querySelector(".headerAdd");
    const menuBurger = document.querySelector(".menu-burguer");
    const menuEqu = document.querySelector(".menu-equ");

    window.onscroll = () => {
        buttonGoTop.classList[
            (document.documentElement.scrollTop > 300) ? "add" : "remove"
            ]("visible");

        if (window.innerWidth < 862 && document.documentElement.scrollTop > 10) {
            if (document.documentElement.scrollTop > 10) {
                nav_menu_items.style.top = '75px';
            }
        }

        if (document.documentElement.scrollTop > 10) {
            nav_menu_items.style.marginTop = "0px";
            title_h1.style.marginTop = "0px";
            title_h1.style.fontSize = "3.5rem";
            headerAdd.style.transform = "translateY(-25px)";
            menuBurger.style.marginTop = "0px";
            menuEqu.style.marginTop = "0px";
            headerAdd.style.visibility = "hidden";
        } else {
            headerAdd.style.visibility = "visible";
            nav_menu_items.style.marginTop = "20px";
            title_h1.style.marginTop = "20px";
            title_h1.style.fontSize = "5rem";
            headerAdd.style.transform = "translateY(0px)";
            menuBurger.style.marginTop = "20px";
            menuEqu.style.marginTop = "20px";
        }
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