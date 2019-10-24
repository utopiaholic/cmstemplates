import React, { useState } from 'react';
import './styles/App.scss';
import Menu from './Menu';
import Import from './Import';
import Promote from './Promote';


const App = () => {
  
const [page, setPage] = useState("Import");
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
