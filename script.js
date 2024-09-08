const CardItems = document.querySelectorAll('.card')
CardItems.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        element.classList.add('active');
        
    })

})
console.log(CardItems)