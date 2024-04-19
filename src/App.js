import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/widgets/Footer/Footer.jsx";
import Header from "./components/widgets/Header/Header.jsx";
import Singin from "./components/elements/Singin/Singin.jsx";
import Login from "./components/elements/Login/Login.jsx";

function App() {
	return (
		<>
			<Header></Header>

 	<Routes>



	 <Route path="/singin" element = {   <Singin/>} />
	 
	 <Route path="/login" element = {   <Login/>} />


 </Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
