import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getEvents } from './services/events.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () =>{
     const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
     getUserData(userName)
   
})

function validateEmptyInput(userName){
    if (userName.length === 0) {
        alert('Digite um nome de usuário')
        return true
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode 
    const isEnterKeyPressed = key === 13
    if (validateEmptyInput(userName)) return
    if(isEnterKeyPressed){
        getUserData(userName)
    }

})

async function getUserData(userName){

    const userResponse = await getUser(userName)

    const eventsResponse = await getEvents(userName);

   

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const RepositoriesResponse = await getRepositories (userName)

    

    user.setInfo(userResponse)
    user.setRepositories(RepositoriesResponse)
    console.log(RepositoriesResponse)
    user.setEvents(eventsResponse)
    
    screen.renderUser(user)
    screen.renderEvents(user)
    
    
}




