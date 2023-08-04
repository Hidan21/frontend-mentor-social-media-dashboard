import PropTypes from 'prop-types';
const CardSmall = ({views, img, number, icono}) => {
  return (
    <div className="card-small">
      <p className="card-small-views">{views}</p>
      <p className="card-small-icon">
      <img src={img} alt="" />
      </p>
      <p className="card-small-number">{number}</p>
     <p className="card-small-percentage">
        <span>
        <img src={icono} alt="" />
        3%
        </span>
     </p>
  </div>
  )
}

CardSmall.propTypes = {
  views: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  icono: PropTypes.string.isRequired,
}

export default CardSmall
