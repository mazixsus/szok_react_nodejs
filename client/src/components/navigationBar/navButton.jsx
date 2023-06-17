import { NavDropdownButton } from "./navDropdownButton";

export const NavButton = ({navButton}) => {
    //console.log(navButton);
    
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id={navButton.key+"Dropdown"} role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navButton.button}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby={navButton.key+"Dropdown"}>
                {
                    navButton.dropdownButtons.map((dropdownButton, i) =>
                        <NavDropdownButton key={"Dropdown"+i} dropdownButton = {dropdownButton}/>
                    )
                }
            </div>
        </li>
    )
}