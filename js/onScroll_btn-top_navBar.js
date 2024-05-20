// Scroll to top button
let goTop = () => {
    const buttonGoTop = document.getElementById("goTop");
    const headerId = document.getElementById("headerId");
    let nav_menu_items = document.querySelector(".nav_menu_items");

    window.onscroll = () => {
        buttonGoTop.classList[
            (document.documentElement.scrollTop > 300) ? "add" : "remove"
            ]("visible");
        if (document.documentElement.scrollTop > 50) {
            headerId.classList.remove("header_Big");
            headerId.classList.add("header_small");
            document.querySelector('.title_h1').style.fontSize = "3.5rem";
            nav_menu_items.style.top = "25px";
        } else {
            // headerId.classList.remove("header_small");
            headerId.classList.add("header_Big");
            document.querySelector('.title_h1').style.fontSize = "5rem";
            nav_menu_items.style.top = "50px";
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
    let nav_menu_item = document.querySelectorAll(".nav_menu_item");
    let menu_input = document.querySelector("#menu-input");
    let menu_burguer = document.querySelector(".menu-burguer");
    let menu_equ = document.querySelector(".menu-equ");
    let nav_menu = document.querySelector(".nav_menu");

    if (window.innerWidth < 862) {
        nav_menu_item[0].style.top = "30px" + "!important";

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
    let nav_menu = document.querySelector(".nav_menu");
    let nav_menu_items1 = document.querySelector(".nav_menu_items");

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