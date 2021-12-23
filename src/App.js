import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import {MenuBarMain} from './components/MenuBarMain';


function App(){

  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/MenuBarMain" element={<MenuBarMain/>} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
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
