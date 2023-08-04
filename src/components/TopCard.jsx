import Card from './Card';
import logof from '../assets/images/icon-facebook.svg'
import logoI from '../assets/images/icon-instagram.svg'
import logot from '../assets/images/icon-twitter.svg'
import logoY from '../assets/images/icon-youtube.svg'


const CardData = [
  {
    username: 'Daniel',
    id: 1,
    followers: '1293',
    todayfollowers: 20,
    socialIcon: `${logof}`,
    social: 'facebook'
  },
  {
    username: 'Daniel',
    id: 2,
    followers: '19k',
    todayfollowers: 50,
    socialIcon: `${logoI}`,
    social: 'instagram'
  },
  {
    username: 'Daniel',
    id: 3,
    followers: '12k',
    todayfollowers: 12,
    socialIcon: `${logot}`,
    social: 'twitter'
  },
  {
    username: 'Daniel',
    id: 4,
    followers: '1k',
    todayfollowers: 122,
    socialIcon: `${logoY}`,
    social: 'youtube'
  },
];

const TopCard = () => {
  return (
    <section className='top-cards'>
      <div className='wrapper'>
        <div className='grid'>
          {CardData.map((data) => (
            <Card username={data.username} key={data.id} {...data} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default TopCard;
