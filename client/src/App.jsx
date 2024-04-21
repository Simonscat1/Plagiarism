import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Contacts from "./pages/Contacts/Contacts";
import Users from "./pages/Users/Users";
import Check from "./pages/Check/Check";
import CheckWeb from "./pages/CheckWeb/CheckWeb";

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
				<Route
					element={!isLogged ? <Register /> : <Navigate to='/' />}
					path='register'
				/>
				<Route
					path='users'
					element={<Users />}
				></Route>
				<Route
					path='users/:username'
					element={<Profile />}
				></Route>
				<Route
					path='feedback'
					element={<Contacts />}
				></Route>
				<Route
					path='check/local'
					element={<Check />}
				></Route>
				<Route
					path='check/web'
					element={<CheckWeb />}
				></Route>
			</Route>
		</Routes>
	);
}

export default App;
