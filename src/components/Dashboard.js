import React from "react";

//PRIME
import 'primereact/resources/themes/arya-blue/theme.css' ;  
import 'primereact/resources/primereact.min.css'   ; 
import 'primeicons/primeicons.css'       ;            


//LIST: ALL COMPUTERS IN THE NETWORK WITH BUTTONS (DETAILS)
//EACH BUTTON: WILL PRODUCE LISTS OF SERVICES AND PC

function Dashboard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);

  if(!data.length) return <div>Loading...</div>
  return (
    <div className="App">
      Name: {data[0].name}
      <br />
      Email: {data[0].email}
      <br />
      Phone: {data[0].phone}
      <br/>
      Address: {data[0].address.street}
    </div>
  );
}

export default Dashboard; 