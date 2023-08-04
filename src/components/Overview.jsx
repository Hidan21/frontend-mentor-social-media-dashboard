import CardSmall from "./CardSmall"
import logof from '../assets/images/icon-facebook.svg'
import logoI from '../assets/images/icon-instagram.svg'
import logot from '../assets/images/icon-twitter.svg'
import logoY from '../assets/images/icon-youtube.svg'
import iconup from '../assets/images/icon-up.svg'
import icondown from '../assets/images/icon-down.svg'


const cardSmallData = [
  {views: 'Page Views',   img: `${logof}`,   id:'facebook_Views',    number: 333,     icono:`${iconup}`,    porcentaje: 3},
  {views: 'Page Views',   img: `${logof}`,   id:'facebook_likes',    number: 123,     icono:`${icondown}`,  porcentaje: 3},
  {views: 'Page Views',   img: `${logoI}`,   id:'instagram_Views',   number: 937,     icono:`${icondown}`,  porcentaje: 3},
  {views: 'Page Views',   img: `${logoI}`,   id:'instagram_likes',   number: 812,     icono:`${iconup}`,    porcentaje: 3},
  {views: 'Page Views',   img: `${logot}`,   id:'twitter_Retweets',  number: 8782374, icono:`${icondown}`,  porcentaje: 3},
  {views: 'Page Views',   img: `${logot}`,   id:'twitter_Likes',     number: 75,      icono:`${iconup}`,    porcentaje: 3},
  {views: 'Page Views',   img: `${logoY}`,   id:'youtube_Likes',     number: 65,      icono:`${icondown}`,  porcentaje: 3},
  {views: 'Page Views',   img: `${logoY}`,   id:'youtube_Views',     number: 567,     icono:`${iconup}`,    porcentaje: 3},
]

const Overview = () => {
  return (
   <section className="overview">
    <div className="wrapper">
      <h2>Overview - Today</h2>
      <div className="grid">
        {cardSmallData.map((data)=> <CardSmall key={data.id} {...data}/>)}

       
      </div>
    </div>
  </section>
  )
}

export default Overview
