import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProcessesInfo from './components/ProcessesInfo';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import {MenuBarMain} from './components/MenuBarMain';
import Dashboard from './components/Dashboard';
import SystemInfo from './components/SystemInfo';
import NetworkInfo from './components/NetworkInfo';
import UsersInfo from './components/UsersInfo';

function App(){

  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/MenuBarMain" element={<MenuBarMain/>} />
      <Route path="/ProcessesInfo" element={<ProcessesInfo />} />
      <Route path="/SystemInfo" element={<SystemInfo />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/NetworkInfo" element = {<NetworkInfo />} />
      <Route path="/UsersInfo" element = {<UsersInfo />} />
    </Routes>
  </Router>
  );
}

/*
//NodeJS web server
const http = require('http');
const server = http.createServer(function(req, res){
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200); //status code HTTP 200

  let dataObj = {"id":123, "name":"admin", "pass":"42421"};
  let data = JSON.stringify(dataObj);
  res.end(data);
});
server.listen(1234, function(){
  console.log('Listening on port 1234');
})
*/
export default App;
