
export class ProcessService {

    getProcesses(){
        //Add api endpoint here
        return fetch('')
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
        return fetch('', requestOptions)
        .then(response => response.json())
        .then(d => d.processes)
    }

}
*/