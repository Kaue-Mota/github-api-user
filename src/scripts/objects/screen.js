const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                         <img src="${user.avatarUrl}" alt= "foto do perfil do usuario" /> 
                                        <div class="data">
                                             <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                             <div class="followers-div">
                                                 <h3>Seguidores: ${user.followers}</h3>
                                                    <h3>Seguindo: ${user.following}</h3>
                                             </div>
                                            
                                             <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                        </div>
                                     </div>`

        
        let repositoriesItens = '' 
        user.repositories.forEach(repo => repositoriesItens+= `<li><a href="${repo.html_url}"target="_blank">${repo.name} </a></li>`)
       
            
        if (user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2> 
                                                 <ul>${repositoriesItens}</ul>
                                            </div>`
            
        }
    
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3 class="user-not-found">Usuário não encontrado</h3>`
    },

    renderEvents(user){
        let eventItens = ''
        user.events.forEach(event =>
            eventItens += `<li><a> ${event.repo.name} </a> <a class="message"> - ${event.payload.commits && event.payload.commits.length > 0 ? event.payload.commits[0].message : 'Sem mensagem de commit'} </a></li>`
        )

        if (user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2> 
                                                 <ul>${eventItens}</ul>
                                            </div>`
        }
    }

}


export { screen }