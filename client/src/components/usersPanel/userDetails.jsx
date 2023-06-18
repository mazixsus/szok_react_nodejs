import {useParams} from "react-router-dom";

export const UserDetails = () => {

    const {id} = useParams();
    

    return (
        <div className="row pb-4 mt-0">
            <div className="h1 col-md">{id}</div>
        </div>
    )
}