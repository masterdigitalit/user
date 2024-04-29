import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/widgets/Footer/Footer.jsx";
import Header from "./components/widgets/Header/Header.jsx";
import Singin from "./components/pages/Singin/Singin.jsx";
import Login from "./components/pages/Login/Login.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";

function App() {
	return (
		<>
			<Header></Header>

 	<Routes>



	 <Route path="/singin" element = {   <Singin/>} />
	 
	 <Route path="/login" element = {   <Login/>} />
	 <Route path='*' element={ <NotFound/>} />


 </Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
