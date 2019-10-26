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

const Header = document.querySelector('header')

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if(last_known_scroll_position >= 356){
        Header.style.opacity = '1';
        Header.style.pointerEvents = 'auto';
    }else{
        Header.style.opacity = '0';
        Header.style.pointerEvents = 'none';
    }
  });
