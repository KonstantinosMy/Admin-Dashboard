import React, { useEffect, useState } from "react";
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ActiveConnections } from "./ActiveConnections";
import {MenuBarMain} from './MenuBarMain';

function Dashboard2() {
  const [connections, setConnections] = useState([]);
  const systemConnections = new ActiveConnections();

  useEffect(() => {
    systemConnections.getConnections().then(connections => setConnections(connections));
    //eslint-disable-next-line
  },[]);
  console.log(connections);

  if(!connections) return <div>Loading...</div>
  return (
    
    <div>
    <MenuBarMain/>
    <DataTable value={connections} responsiveLayout="scroll" >
      <Column field='Proto' header='Proto' />
      <Column field='Local_Address' header='Local Address' />
      <Column field='Foreign_Address' header='Foreign Address' />
      <Column field='State' header='State' />
    </DataTable>
    </div>
  );
}
export default Dashboard2; 