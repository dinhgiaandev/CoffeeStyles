// Author: Dinhgiaan - https://dinhgiaan.com (coming soon)

const topMenu = document.getElementById("dgad-top-menu");
const toggleTopMenuIcon = document.getElementById("dgad-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle("hidden")
        topMenu.classList.toggle("dgad-top-menu-expand")
    } else {
        if (topMenu.classList.contains("dgad-top-menu-expand")) {
            topMenu.classList.remove("dgad-top-menu-expand")
            topMenu.classList.add("hidden")
        }
    }
})