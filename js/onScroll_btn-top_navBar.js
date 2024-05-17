// Scroll to top button
let goTop = () => {
    const button = document.getElementById("goTop");
    const headerId = document.getElementById("headerId");
    const nav_menu_items = document.querySelectorAll(".nav_menu_items");
    const anchor  = document.querySelector(".anchor");

    window.onscroll = () => {
        button.classList[
            (document.documentElement.scrollTop > 300) ? "add" : "remove"
            ]("visible");
        if (document.documentElement.scrollTop > 1) {
            headerId.classList.remove("header_Top_Max");
            document.querySelector('.title_h1').style.fontSize = "3.5rem";
        } else {
            headerId.classList.add("header_Top_Max");
            document.querySelector('.title_h1').style.fontSize = "5rem";
        }

      /*  if (document.documentElement.scrollTop === 0) {
            document.styleSheets[0].addRule(".anchor:before", 'height: ' + '100px' + ';');
            document.styleSheets[0].addRule(".anchor:before", 'margin-top: ' + '-100px' + ';');
         }*/
            // else {
        //     document.styleSheets[0].addRule(".anchor:before", 'height: ' + '80px' + '!important;');
        //     document.styleSheets[0].addRule(".anchor:before", 'margin-top: ' + '-80px' + '!important;');
        // }

        console.log('SCROLL', window.scrollY)

    }

    button.onclick = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }
};

const menuBpMobiles = () => {
    let nav_menu_items = document.querySelectorAll(".nav_menu_items");
    let menu_input = document.querySelector("#menu-input");
    let menu_burguer = document.querySelector(".menu-burguer");
    let menu_equ = document.querySelector(".menu-equ");
    let nav_menu = document.querySelector(".nav_menu");

    if (window.innerWidth < 770) {
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

    if (window.innerWidth >= 770) {
        nav_menu.style.visibility = "visible";
        nav_menu_items1.style.display = "flex";
        nav_menu_items1.style.visibility = "visible";
    }
}

window.addEventListener("resize", () => {
    menuBpDesktop();
    menuBpMobiles();
});

goTop();