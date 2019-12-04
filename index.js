const body = document.querySelector('body')
const linksAncora = document.querySelectorAll('.anchor');

const seforbody = body.classList.contains('index');

const header =`

    <header>
        <div class="container">
            <div class="contatos">
                <a href="http://www.drtiagospanazzi.com.br">
                    <p class="title">
                        <img class="icon-dentista icon-contato" src="${seforbody ? './' : '../'}/img/icon-tooth.svg" alt="Dentista Dr. Tiago Spanazzi"/>Dr Tiago Spanazzi Cirurgião Dentista | CRO: 118827
                    </p>
                </a>

                <a href="https://wa.me/5515998493826" target="_Blank" class="btn btn-cta btn-icon"><span class="text"><img src="${seforbody ? './' : '../'}img/icon-whatsapp-white.svg" alt="Dentista Dr Tiago Spanazzi whatsapp"/>Agendar Whatsapp</span></a>
            </div>
        </div>
    </header>   

`

body.insertAdjacentHTML("afterbegin", header);

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


const footerPages = `
    <footer>
        <div class="container">
            <div>
                <p>Acesso rápido</p>

                <a href="${seforbody ? './':'../'}/pages/clareamento-dentistica.html">Clareamento</a>
                <a href="${seforbody ? './':'../'}pages/facetas-lentes-de-contato.html">Facetas</a>
                <a href="${seforbody ? './':'../'}pages/ortodontia.html">Ortodontia</a>

                <a href="${seforbody ? './':'../'}pages/protese-dentaria.html">Prótese</a>
                <a href="${seforbody ? './':'../'}pages/implante.html">Implante</a>
                <a href="${seforbody ? './':'../'}pages/endodontia.html">Endodontia</a>

                <a href="${seforbody ? './':'../'}pages/periodontia.html">Periodontia</a>
                <a href="${seforbody ? './':'../'}pages/cirurgia-oral.html">Cirurgia</a>
                <a href="${seforbody ? './':'../'}pages/dentistica.html">Dentística</a>

                <a href="${seforbody ? './':'../'}pages/atm.html">Atm</a>
                <a href="${seforbody ? './':'../'}pages/bruxismo.html">Bruxismo</a>
            </div>  
            <div>
                <p>Rede sociais</p>

                <a href="https://www.instagram.com/dr.tiagospanazzi/" target="_Blank">
                <img class="instagram-icon" src="${seforbody ? './':'../'}img/instagram.svg" alt="Cirurgiao Dentista Dr Tiago Spanazzi Instagram"/>Instagram
                </a>
            </div> 
            <div>
                <p>Contato</p>
                <form method="POST" action="https://simple-form.com/contato@drtiagospanazzi.com.br">
                    <input type="text" name="name" placeholder="Seu nome" required />
                    <input type="email" name="replyTo" placeholder="Seu email" required />
                    <textarea name="message" placeholder="Sua mensagem" required></textarea>
                    <input type="submit" value="Enviar" class="btn-send"/>
                    <input type="hidden" name="redirectURL" value="${seforbody ? './':'../'}obrigado" />
                </form>
            </div>  
        </div>
    </footer>
`;


body.insertAdjacentHTML("beforeend", footerPages);


if(!seforbody){
    const voltar = `
        <a class="voltar-link" href="http://www.drtiagospanazzi.com.br">
            <img src="../img/arrow_back-24px.svg" alt="Voltar para o site Cirurgiao Dentista Dr Tiago Spanazzi">Home
        </a>
    `
    body.insertAdjacentHTML("afterbegin", voltar);
}
