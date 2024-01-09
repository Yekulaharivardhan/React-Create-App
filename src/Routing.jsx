import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Dashboard from './Components/HomePage';
import PageOne from './Components/Pageone';
import PageTwo from './Components/PageTwo';

const Routing = () => {
    return (
        <Provider store={store}>
    <Router>
    <Sidebar/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/design" element={<Design />} />
        <Route path="/global" element={<Global />} />
        <Route path="/social" element={<Social />} />
        <Route path="/users" element={<Users />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
 
      </Routes>
    </Router>
    </Provider>
    );
};

export default Routing;