
export class ActiveConnections {

    getConnections(){
        //Add api endpoint here
        return fetch('')
        .then(res => res.json())
        .then(d => d.connections);
    }

}
/*
export class ActiveConnections {
    getConnections() {
        const requestOptions = {
            method: 'POST'
        };
        return fetch('', requestOptions)
        .then(response => response.json())
        .then(data => data.connections)
    }

}
*/
