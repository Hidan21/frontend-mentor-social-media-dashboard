import Swicht from './Swicht';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='header-grid'>
            <div>
              <h1>Social Media Dashboard</h1>
              <p className='header-total'>Total Followers: 23, 004</p>
            </div>
            <Swicht />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;