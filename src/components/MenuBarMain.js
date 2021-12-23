
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
//import App from '../App';
//import {useNavigate} from 'react-router-dom';

function App(){
    //let navigate = useNavigate();
}
export class MenuBarMain extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'PC',
                icon: 'pi pi-fw pi-desktop',
                items: [
                    {
                        label: 'Active Connections',
                        icon: 'pi pi-fw pi-server',

                    },
                    {
                        label: 'Processes',
                        icon: 'pi pi-fw pi-cog',
                    },
                    {
                        label: 'System',
                        icon: 'pi pi-fw pi-tablet'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user'
                
            },
            {
                separator:true
            },
            {
                label: 'Disconnect',
                icon: 'pi pi-fw pi-sign-out',
                command: (event) => {
                    //navigate("App");
                }
            }
        ];
    }

    render() {
        const start = <img alt="logo" src={logo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
        const end = <InputText placeholder="Search" type="text" />;

        return (
            <div>
                <div className="card">
                    <Menubar model={this.items} start={start} end={end} />
                </div>
            </div>
        );
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<MenuBarMain />, rootElement);