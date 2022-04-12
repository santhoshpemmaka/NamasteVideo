import React from "react";
import "./App.scss";
import {Header} from "./components/Header";
import Footer from "./components/Footer/Footer";
import VideosPage from "./components/Videos/VideosPage";
function App() {
	return (
		<div className='App'>
			<Header />
			<VideosPage />
			<Footer />
		</div>
	);
}

export default App;
