import '../styles/App.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <body>
                <div className="header">
                    <Link to="/UploadEvents">Upload Events</Link> |
                    <Link to="/EventsFTable">Events Table</Link>
                    <Link to="/" className="homeLink">Home</Link>
                </div>

                <div className="homeContainer">
                    <h1>Wellcome To My Events Test :)</h1>
                </div>
            </body>
        </>
    );
}

export default Home;
