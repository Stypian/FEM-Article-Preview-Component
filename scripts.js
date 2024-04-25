onload = function() {
    const shareMenu = document.querySelector(".art-prev__menu");
    const shareIcon = document.querySelector(".art-prev__share-wrap");
    const shareImg = document.querySelector(".art-prev__share");
    
    const changeSVG = (img, icon) => {
        shareImg.style.fill = img;
        shareIcon.style.background = icon;
    }
    

    shareIcon.addEventListener("click", function() {
       if (shareMenu.classList.contains("art-prev__menu-show")) {
        shareMenu.classList.remove("art-prev__menu-show");
        changeSVG('#6E8098', 'hsl(210, 46%, 95%)');
       } else {
        shareMenu.classList.add("art-prev__menu-show");
        changeSVG("#fff", "hsl(214, 17%, 51%)");
       }
    })





























}