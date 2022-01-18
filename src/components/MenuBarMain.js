
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
//import App from '../App';
//import {useNavigate} from 'react-router-dom';

export class MenuBarMain extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'PC',
                icon: 'pi pi-fw pi-desktop',
                items: [
                    {
                        label: 'Processes',
                        icon: 'pi pi-fw pi-cog',
                        url: '/ProcessesInfo'
                    },
                    {
                        label: 'System',
                        icon: 'pi pi-fw pi-tablet',
                        url: '/SystemInfo'
                    },
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        url: '/UsersInfo'
                    }
                ]
            },
            {
                label: 'Active Connections',
                icon: 'pi pi-fw pi-server',
                url: '/NetworkInfo'
            },
            {
                separator:true
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