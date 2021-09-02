
import './Nav.css';

export function Nav() {
  return (
    <nav className="global-nav">
      <div>
        <a href="https://github.com/soft-rahul" target="_blank" >Profile</a>
      </div>
      <div>
        <a href="https://github.com/soft-rahul?tab=repositories" target="_blank">Projects</a>
      </div>
      <div>
        <a href="#">About Us</a>
      </div>
      <div>
        <a href="#">Contact Us</a>
      </div>
      <div>
        <a href="#">More</a>
      </div>
    </nav>
  );
}
