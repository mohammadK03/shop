import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container my-5">
            <h4 className="text-center">Not Found 404</h4>
            <Link className='btn btn-outline-primary home-btn mt-3' to="/">Home</Link>
        </div>
    );
}
 
export default NotFound;