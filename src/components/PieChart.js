import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class PieChart extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['Established Connections', 'Time Wait'],
            datasets: [
                {
                    data: [300, 50],
                    backgroundColor: [
                        "#42A5F5",
                        "#66BB6A"
                    ],
                    hoverBackgroundColor: [
                        "#64B5F6",
                        "#81C784"
                    ]
                }
            ]
        };

        this.lightOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div className="card p-d-flex p-jc-center">
                <Chart type="pie" data={this.chartData} options={this.lightOptions} style={{ position: 'relative', width: '20%' }} />
            </div>
        )
    }
}