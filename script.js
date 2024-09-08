const CardItems = document.querySelectorAll('.card')
CardItems.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        element.classList.add('active');
        
    })

})
console.log(CardItems)


function checkUserAgent() {

    var userAgent = navigator.userAgent.toLowerCase();
  
    if (userAgent.indexOf("android") > -1 || userAgent.indexOf("iphone") > -1) {
  
      // Redirect to mobile page or display a message
  
      alert("This website is optimized for desktop viewing. Please access on a computer."); 
  
    }
  
  }
  
  
  
  // Call the function on page load
  
  window.onload = checkUserAgent;
  