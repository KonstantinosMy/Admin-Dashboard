export class UsersList {

    getUsers(){
        //add api endpoint here
        return fetch('').then(res => res.json()).then(d => d.users);
    }
}