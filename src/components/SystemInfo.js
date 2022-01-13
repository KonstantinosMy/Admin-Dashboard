import React, { useEffect, useState } from "react";
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SystemProperties } from "./SystemProperties";
import {MenuBarMain} from './MenuBarMain';

function SystemInfo() {
  const [properties, setProperties] = useState([]);
  const systemProperties = new SystemProperties();

  useEffect(() => {
    systemProperties.getSystem().then(properties => setProperties(properties));
    //eslint-disable-next-line
  },[]);
  console.log(properties);

  if(!properties) return <div>Loading...</div>
  return (
    
    <div>
    <MenuBarMain/>
    <DataTable value={properties} responsiveLayout="scroll" >
      <Column field='Os_Name' header='OS Name' />
      <Column field='Host_Name' header='Host Name' />
      <Column field='BIOS_Version' header='BIOS Version' />
      <Column field='System_Boot_Time' header='System Boot Time' />
      <Column field='System_Type' header='System Type' />
      <Column field='System_Model' header='System Model' />
      <Column field='Total_Memory' header='Total Memory' />
      <Column field='Domain' header='Domain' />
      <Column field='System_Directory' header='System Directory' />
      <Column field='Page_File_Location' header='Page File Location' />
      <Column field='Processes' header='Processes' />
      <Column field='OS_Configuration' header=' OS Configuration' />
      <Column field='Product_ID' header='Product ID' />
    </DataTable>
    </div>
  );
}
export default SystemInfo; 