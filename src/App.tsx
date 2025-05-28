import { Route, BrowserRouter as Router, Routes } from 'react-router';

import MainPage from './pages/MainPage';

import '../src/styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
