export class ActiveConnections {

    getConnections(){
        return fetch('https://api.jsonbin.io/b/61dffde4f86f64402ccce32b').then(res => res.json()).then(d => d.connections);
    }
}