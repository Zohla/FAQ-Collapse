const toggle =document.querySelectorAll('.faq-toggle');

toggle.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () =>{
        toggleBtn.parentElement.classList.toggle('active');
    })
    
});