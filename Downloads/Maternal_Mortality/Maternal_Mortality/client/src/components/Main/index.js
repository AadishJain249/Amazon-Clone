import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<button className={styles.white1_btn}>
				<Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Login/SignUp</Link>
				</button> 
				<button className={styles.white_btn} onClick={handleLogout}>Logout</button>
			</nav>
		</div>
	);
};

export default Main;