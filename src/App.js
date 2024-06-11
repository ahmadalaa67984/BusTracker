import { Provider } from "react-redux";
import NavBar from "./components/global/NavBar";
import MyMap from "./components/map/MyMap";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from "./store/store";


function App() {
  return (
    <div className="App h-[100vh] bg-[#ebebf2] ">
        <div className="z-90">
            <NavBar/>
        </div>
        <div className="z-10">
            <Provider store={store}>
                <Router>
                    <Routes>
                            <Route path="/" element={ <DashBoard/>} />
                            <Route path="/map" element={<MyMap/>} />
                    </Routes>
                </Router>
            </Provider>
        </div>

    </div>
  );
}

export default App;
