
import './index.css';


function ListComponent(props) {
    return (
        <div className="List">
            <h3>{props.text}</h3>
        </div>
    );
}

export default ListComponent;