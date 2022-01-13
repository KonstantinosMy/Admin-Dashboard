export class UsersList {

    getUsers(){
        return fetch('https://api.jsonbin.io/b/61dffe63a34b603fd982b0e9').then(res => res.json()).then(d => d.users);
    }
}