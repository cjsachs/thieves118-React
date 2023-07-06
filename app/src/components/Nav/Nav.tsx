import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom"
import { auth } from "../../firebase";

interface CurrentUser {
    id: string,
    email: string
}


const Nav = () => {

    const [user, setUser] = useState<CurrentUser | null>(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const email = user.email
                const id = user.uid
                // Type Narrowing
                if (typeof email === 'string' && typeof id === 'string'){
                    setUser({id: id, email: email})
                }
            }
        })
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Thieves Nav
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {user ? 
                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/searchchampion"
                                    >
                                        Search Champion
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/team"
                                    >
                                        My Team
                                    </Link>
                                </li>
                                <span>{user.email}</span>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">
                                        Sign In
                                    </Link>
                                </li>
                            </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
