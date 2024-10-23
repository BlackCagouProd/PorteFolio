document.addEventListener('DOMContentLoaded', function() {
    // Vérifiez si l'utilisateur a déjà un thème préféré
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.sidebar').classList.add('dark-mode');
        document.querySelectorAll('.middleContent').forEach(el => el.classList.add('dark-mode'));
        document.querySelectorAll('.middle').forEach(el => el.classList.add('dark-mode'));
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll(' h4').forEach(el => el.classList.add('dark-mode')); // Ajout pour les h4
        document.querySelector('iframe').classList.toggle('dark-mode');
    }

    // Ajouter un écouteur d'événement au bouton de bascule de thème
    document.querySelector('.toggle-theme').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.sidebar').classList.toggle('dark-mode');
        document.querySelectorAll('.middleContent').forEach(el => el.classList.toggle('dark-mode'));
        document.querySelectorAll('.middle').forEach(el => el.classList.add('dark-mode'));
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.sph h4').forEach(el => el.classList.toggle('dark-mode')); // Ajout pour les h4
        document.querySelector('iframe').classList.toggle('dark-mode');

        // Sauvegarder le choix de l'utilisateur dans le localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
console.log(currentTheme);
    
});
