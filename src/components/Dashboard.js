import React, { useEffect, useState } from "react";
import 'primereact/resources/themes/arya-blue/theme.css' ;  
//tab Menu
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProcessService } from "./ProcessService";

function Dashboard() {
  const [processes, setProcceses] = useState([]);
  const processService = new ProcessService();

  useEffect(() => {
    processService.getProcesses().then(processes => setProcceses(processes));
    //eslint-disable-next-line
  },[]);
  console.log(processes);
  if(!processes) return <div>Loading...</div>
  return (

    <div style={{ width: 600 ,height: 100, margin: 20}}>
    <DataTable value={processes} responsiveLayout="scroll">
      <Column field='Image_Name' header='Image Name' />
      <Column field='pid' header='PID' />
      <Column field='Session_Name' header='Sesson Name' />
      <Column field='Memory_Usage' header='Memory Usage' />
    </DataTable>
    </div>
  );
}

/*
  if(!data) return <div>Loading...</div>
  return (

    <div style={{ width: 1000 }}>
      
      <DataTable value={null}>
        <Column field='imgName' header='Image Name' />
        <Column field='pid' header='PID' />
        <Column field='sessionname' header='Sesson Name' />
        <Column field='memusage' header='Memory Usage' />
      </DataTable>
	  </div>
    
  );
}
*/
export default Dashboard; 