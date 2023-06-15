
export const UserListRow = (user) => {
    console.log("why?");
    return (
        <div>
            <tr>
                <td>{user.id}</td>
                <td>{user.imie}</td>
                <td>{user.nazwisko}</td>
                <td>
                    <a href=""
                        className="btn btn-primary float-right btn-sm">Pokaż</a>
                </td>
            </tr>
        </div>
    )
}