import PropTypes from 'prop-types';

const Card = ({ username, followers, todayfollowers, socialIcon, social }) => {
  return (
    <article className={`card  ${social}`} >
      <p className='card-title'>
        <img src={socialIcon} alt='' />@{username}
      </p>
      <p className='card-followers'>
        <span className='card-followers-number'>{followers}</span>
        <span className='card-followers-title'>Followers</span>
      </p>
      <p className='card-today'>
        <img src={socialIcon} alt='logo red social' />
        {todayfollowers} Today
      </p>
    </article>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  todayfollowers: PropTypes.number.isRequired,
  socialIcon: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
}

export default Card;
