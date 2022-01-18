import React, { useEffect, useState } from "react";
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ActiveConnections } from "./ActiveConnections";
import {MenuBarMain} from './MenuBarMain';
import {MenuBar} from './MenuBar';
function NetworkInfo() {
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
    <MenuBar/>
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
export default NetworkInfo; 