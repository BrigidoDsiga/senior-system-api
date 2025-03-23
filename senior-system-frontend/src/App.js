import React from 'react';
import PayrollList from './components/PayrollList';
import './App.css'; // Adicionando um arquivo CSS para estilização

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Senior System</h1>
      </header>
      <main>
        <PayrollList />
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Senior System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;