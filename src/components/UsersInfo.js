import React, { useEffect, useState } from "react";
//for data view
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UsersList } from "./UsersList";
import {MenuBarMain} from './MenuBarMain';
import {MenuBar} from './MenuBar';

function UsersInfo() {
  const [users, setUsers] = useState([]);
  const usersList = new UsersList();

  useEffect(() => {
    usersList.getUsers().then(users => setUsers(users));
    //eslint-disable-next-line
  },[]);
  console.log(users);

  if(!users) return <div>Loading...</div>
  return (
    
    <div>
    <MenuBar/>
    <MenuBarMain/>
    <DataTable value={users} responsiveLayout="scroll" >
      <Column field='Users' header='Users1' />
    </DataTable>
    </div>
  );
}
export default UsersInfo; 