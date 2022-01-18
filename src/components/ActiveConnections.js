
export class ActiveConnections {

    getConnections(){
        return fetch('http://192.168.66.83:8093/networkIP')
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
        return fetch('http://192.168.66.83:8093/networkIP', requestOptions)
        .then(response => response.json())
        .then(data => data.connections)
    }

}
*/
