import React from "react";

//PRIME
import 'primereact/resources/themes/arya-blue/theme.css' ;  
import 'primereact/resources/primereact.min.css'   ; 
import 'primeicons/primeicons.css'       ;            

//for data view
//import { DataTable } from 'primereact/datatable';
//import { Column } from 'primereact/column';
//import { ProductService } from '../service/ProductService';


function Dashboard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://api.jsonbin.io/b/61b9a3d70ddbee6f8b1df0e2/1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          console.log(data.processes)
        });
    };
    fetchLocation();
  }, []);

  if(!data) return <div>Loading...</div>
  return (
    <div className="App">
      Processes: {data.processes}
    </div>
  );
}

//data table
/*
export class JsonDataTable extends Dashboard {

  constructor(props) {
      super(props);
      this.state = {
          products: []
      };

      this.productService = new ProductService();
  }

  componentDidMount() {
      this.productService.getProductsSmall().then(data => this.setState({ products: data }));
  }

  render() {
      return (
          <div>
              <div className="card">
                  <DataTable value={this.state.products} responsiveLayout="scroll">
                      <Column field="imgName" header="Image Name"></Column>
                      <Column field="pid" header="PID"></Column>
                      <Column field="sessionName" header="Session Name"></Column>
                      <Column field="session" header="Session"></Column>
                      <Column field="memoryUsage" header="Memory Usage"></Column>
                  </DataTable>
              </div>
          </div>
      );
  }
}
*/

export default Dashboard; 