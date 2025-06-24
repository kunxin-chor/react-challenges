export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">All Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Add New Book</a>
                    </li>                  
                </ul>
            </div>
        </nav>
    </>)
}