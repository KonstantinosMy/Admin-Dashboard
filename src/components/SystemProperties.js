
export class SystemProperties {

    getSystem(){
        //add api endpoint here
        return fetch('')
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
        return fetch('', requestOptions)
        .then(response => response.json())
        .then(d => d.properties)
    }

}
*/