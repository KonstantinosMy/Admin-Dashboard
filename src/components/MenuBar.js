
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
//import App from '../App';
//import {useNavigate} from 'react-router-dom';

export class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'All PCs',
                icon: 'pi pi-fw pi-home',
                url: '/Dashboard'
            },
            {
                label: 'Disconnect',
                icon: 'pi pi-fw pi-sign-out',
                url: '/'
            }
        ];
    }

    render() {
        const start = <img alt="logo" src={logo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
        const end = <h3>Current User:</h3>;
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
ReactDOM.render(<MenuBar />, rootElement);