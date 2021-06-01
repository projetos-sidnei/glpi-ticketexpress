import React from 'react';
import Route from './routes';
import Footer from './components/footer/Footer';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Route/>
      <Footer/>
    </div>
  );
}

export default App;
