import React from "react";
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Dashboard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://api.jsonbin.io/b/61bb0343cc8e023101370e56")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);

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

export default Dashboard; 