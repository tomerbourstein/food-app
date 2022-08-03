import Spinner from "react-bootstrap/Spinner";
const Loading = props => {
return (
    
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)
}

export default Loading;

