import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`about`}>About</Link>
                        </li>
                        <li>
                            <Link to={`experiance`}>experiance</Link>
                        </li>
                        <li>
                            <Link to={`certificates`}>certificates</Link>
                        </li>
                        <li>
                            <Link to={`education`}>education</Link>
                        </li>
                        <li>
                            <Link to={`contact`}>contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
};

export default Root;