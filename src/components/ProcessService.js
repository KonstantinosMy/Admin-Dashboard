export class ProcessService {

    getProcesses(){
        return fetch('https://api.jsonbin.io/b/61c2fa14f8c69823dd3ff43d').then(res => res.json()).then(d => d.processes);
    }
}