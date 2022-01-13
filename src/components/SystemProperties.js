export class SystemProperties {

    getSystem(){
        return fetch('https://api.jsonbin.io/b/61dffaa354d6b73fd3608c26/1').then(res => res.json()).then(d => d.properties);
    }
}