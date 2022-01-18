import React, { useEffect, useState } from "react";
import { ProcessService } from "./ProcessService";
import {MenuBarMain} from './MenuBarMain';
import {MenuBar} from './MenuBar';
import {AllComputers} from './AllComputers';

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
    
    <div>
    <MenuBar/>
    <MenuBarMain/>
    <AllComputers/>
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