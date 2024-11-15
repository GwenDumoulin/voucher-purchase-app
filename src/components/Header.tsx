import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>
            <Link to="/" className="brand-link">
                YourVoucher
            </Link>
        </h1>
      </div>
      <div className="header-right">
        <Link to="/admin" className="admin-link">
          Admin
        </Link>
      </div>
    </header>
  );
};

export default Header;