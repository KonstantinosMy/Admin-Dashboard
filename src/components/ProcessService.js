
export class ProcessService {

    getProcesses(){
        return fetch('http://192.168.66.83:8093/networkScan')
        .then(res => res.json())
        .then(d => d.processes);
    }
}


/*
export class ProcessService {
    getProcesses() {
        const requestOptions = {
            method: 'POST'
        };
        return fetch('http://192.168.66.83:8093/networkScan', requestOptions)
        .then(response => response.json())
        .then(d => d.processes)
    }

}
*/