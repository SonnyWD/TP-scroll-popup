const navbar = document.querySelector('nav');
const img = document.querySelector('#imgImprovise');
const popup = document.querySelector("#popup")

// événement au scroll pour la nav et les images 

 window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.height = "60px"; 
        img.style.transform = 'translateX(-50px)';
        img.style.opacity = 1;
    if (window.scrollY > 1200) {
        popup.style.transform = 'translateX(0)';
        popup.style.opacity = 1;
    }
    }
    else {
        navbar.style.height = "90px";
    }
 })

//  événement au click pour faire disparaitre la popup 

 popup.addEventListener('click', () => {
    popup.style.display = "none";
 })

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
