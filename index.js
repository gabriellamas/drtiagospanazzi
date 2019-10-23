const linksAncora = document.querySelectorAll('.anchor');

linksAncora.forEach(function(element){
    element.addEventListener('click', scrollToSection)
})

function scrollToSection(event){
    console.log(window.navigator.userAgent)

    if(window.navigator.userAgent.indexOf("Edge") === -1){
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href);
        const top = section.offsetTop;
    
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }else{
        console.log('navegador cagado')
    }
   
}