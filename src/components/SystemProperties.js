
export class SystemProperties {

    getSystem(){
        return fetch('http://192.168.66.83:8093/systeminfo')
        .then(res => res.json())
        .then(d => d.properties);
    }
}
/*
export class SystemProperties {
    getSystem() {
        const requestOptions = {
            method: 'POST'
        };
        return fetch('http://192.168.66.83:8093/systeminfo', requestOptions)
        .then(response => response.json())
        .then(d => d.properties)
    }

}
*/