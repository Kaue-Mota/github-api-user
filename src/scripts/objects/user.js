const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    userName:'',
    followers:'',
    following:'',
    forks:'',
    stars:'',
    watchers:'',
    language:'',
    repositories:[],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        
    }, 
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers_count
        this.language = repositories.language
    },
    setEvents(events){
        this.events = events
    }

    
}

export { user }