import React, { Component } from 'react';
import { Button } from 'primereact/button';

export class AllComputers extends Component {


    onPcClick() {
        
    }

    render() {
        return (
            <div className="button">
                <div className="card">
                    <h3>All Available Computers</h3>
                    <Button label="Computer 1" onClick={this.onPcClick}/>
                </div>
            </div>
        )
    }
}
                 