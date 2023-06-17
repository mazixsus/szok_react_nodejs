import { NavButton } from "./navButton";
import navOptions from "./navBarOptions.json";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="{{ path('workers_app/main_page') }}"><i className="fa fa-home"
                                                                                        aria-hidden="true"></i> SZOK</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav ml-auto">
                        {
                            navOptions.navButtons.map((navButton, i) => 
                                <NavButton key={"navButton"+i} navButton = {navButton}/>
                            ) 
                        }
                        {/* User settings button */}
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" id="loggedDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-user" aria-hidden="true"></i> 
                                Witaj, 
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="loggedDropdown">
                                <a className="dropdown-item"
                                // href="{{ path('workers_app/employees/change_password',{"id":app.user.Id}) }}">
                                href="">
                                Zmień hasło</a>
                                <div className="dropdown-divider"></div>
                                <button type="button" className="dropdown-item btn" data-toggle="modal"
                                        data-target="#logoutModal">
                                    Wyloguj się
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}