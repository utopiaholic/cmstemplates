import React, { useState } from 'react';
import './styles/App.scss';
import Menu from './components/Menu';
import Import from './components/Import';
import Promote from './components/Promote';


const App = () => {
  
const [page, setPage] = useState("Promote");
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
            Template Manager
          </p>
        </header>
      </div>
      <Menu setPage={page, setPage}/>
      {page === "Import" ? <Import  /> : null}
      {page === "Export" ? null : null}
      {page === "Promote" ? <Promote  /> : null}
    </div>
  );
}

export default App;
