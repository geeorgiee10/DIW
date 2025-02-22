window.onload = () => {

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        const carousel = document.querySelector(".carousel");
        const items = document.querySelectorAll(".carousel-item");
        let currentIndex = 0;
    
        function updateCarousel() {
            items.forEach(item => item.style.display = "none");

            // Mostrar solo el elemento actual
            items[currentIndex].style.display = "flex";
        }
    
        updateCarousel();

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            updateCarousel();
        });
    
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tabContent => tabContent.classList.remove('active'));
        
                this.classList.add('active');
                document.getElementById(this.dataset.target).classList.add('active');
            });
        });

};