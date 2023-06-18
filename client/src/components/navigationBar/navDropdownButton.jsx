

export const NavDropdownButton = ({ dropdownButton}) => {
    // console.log(dropdownButton);
    // console.log(rest.key);
    return (
        <a className="dropdown-item" href={dropdownButton.route}>{dropdownButton.option}</a>
    )
}