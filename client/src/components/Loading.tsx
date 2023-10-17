import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
    return <h2>
        <FontAwesomeIcon
            className="animate-spin duration-1000"
            size='5x'
            icon={faSpinner} />
        Loading...
    </h2>;
}
