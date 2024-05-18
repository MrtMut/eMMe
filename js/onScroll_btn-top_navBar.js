// Scroll to top button
let goTop = () => {
    const buttonGoTop = document.getElementById("goTop");
    const headerId = document.getElementById("headerId");

    window.onscroll = () => {
        buttonGoTop.classList[
            (document.documentElement.scrollTop > 300) ? "add" : "remove"
            ]("visible");
        if (document.documentElement.scrollTop > 1) {
            headerId.classList.remove("header_Top_Max");
            document.querySelector('.title_h1').style.fontSize = "3.5rem";
        } else {
            headerId.classList.add("header_Top_Max");
            document.querySelector('.title_h1').style.fontSize = "5rem";
        }

        if (document.documentElement.scrollTop === 0) {
                document.styleSheets[0].addRule(".anchor:before", 'height: ' + '96px' + ';');
                document.styleSheets[0].addRule(".anchor:before", 'margin-top: ' + '-96px' + ';');
                } else {
                document.styleSheets[0].addRule(".anchor:before", 'height: ' + '76px' + ';');
                document.styleSheets[0].addRule(".anchor:before", 'margin-top: ' + '-76px' + ';');
        }
    }

    buttonGoTop.onclick = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }
};

const menuBpMobiles = () => {
    let nav_menu_items = document.querySelector(".nav_menu_items");
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

        if (document.documentElement.scrollTop === 0) {
            nav_menu_items.style.top = "50px";

        } else {
            nav_menu_items.style.top = "30px";
        }

    }
    // nav_menu_items.style.top = "30px";

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