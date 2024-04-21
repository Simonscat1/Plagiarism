import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
	const isLogged = useSelector(state => state.authSlice.isLogged);

	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					element={!isLogged ? <Login /> : <Navigate to='/' />}
					path='login'
				/>
			</Route>
		</Routes>
	);
}

export default App;
