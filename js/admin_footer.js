// This file is used to add the footer section to the admin page.

let admin_footer = document.getElementById("admin_footer");
admin_footer.innerHTML = `<div class="footer_section_links">      
        <ul class="footer_links_right">
        </ul>
    </div>
    <p class="copy"> &copy; Copyright {eMMe} <span id="year"></span> - <span id="version"></span> </p>`;