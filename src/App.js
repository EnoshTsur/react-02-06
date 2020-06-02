import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>

      <Header
        person={{
          name: "Niv",
          age: '26',
          city: 'Tel Aviv'
        }}
        style={{
          padding: '1rem',
          backgroundColor: 'gold',
          color: 'orange',
          border: '1px solid brown'
        }}
      >
        <h3>
          Good luck !!!
        </h3>

      </Header>

      <Footer />
    </div>
  );
}

export default App;
