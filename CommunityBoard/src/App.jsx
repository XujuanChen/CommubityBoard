import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='front-container'>
        <img src="front.avif" alt="front" />
        <h1 className='board-font'>Favorite Restaurants</h1>
      </div>
      
      <div className='grid-container'>
        {/* 1 row */}
        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/EjTTqFVvkD2zZC3V4OH2AQ/o.jpg" 
        title="Alimama" address="89A Bayard St New York" link="https://www.orderalimama.com"/>
        
        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/plWLwcicPCgDCcyH7pzpQQ/o.jpg" 
        title="Schmackary's" address="362 W 45th St New York" link="http://www.schmackarys.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/jSSEoP03vAVQ_HdyZ4o0PA/o.jpg" 
        title="Soft Swerve" address="85B Allen St New York" link="http://www.Softswervenyc.com"/>

        {/* 2 row */}
        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/YgwhKQNGm2oGcWLwmCsAIg/o.jpg" 
        title="Bibble & Sip" address="253 W 51st St New York" link="http://bibbleandsip.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/Ilz9x2Snw2xogLzGE8Th4w/o.jpg" 
        title="Kabisera" address="151 Allen St Store South New York" link="http://www.kabisera.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/sMNL1YZq0p6a3QexGJnxkw/o.jpg" 
        title="Dominique Ansel Bakery" address="189 Spring St New York" link="http://dominiqueanselny.com"/>
        
        {/* 3 row */}

        <Card imgsrc = "https://static.wixstatic.com/media/f02608_15418950e4714379b55cd2752c87ead2~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_654,h_651,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f02608_15418950e4714379b55cd2752c87ead2~mv2_d_5184_3456_s_4_2.jpg" 
        title="Sweet Moment" address="106 Mott St New York" link="https://www.sweetmomentnyc.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/dDkvJBrjUgdPcZFCJ6Ayow/o.jpg" 
        title="Grace Street" address="17 W 32nd St New York" link="http://bygracestreet.com/"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/gHQyatQ27YMtRXurHHCIyw/o.jpg" 
        title="Levain Bakery" address="167 W 74th St New York" link="http://levainbakery.com"/>

        {/* 4 row */}
        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/IEc0S77grLIG8HTz9Nax5w/o.jpg" 
        title="Mia's Bakery" address="139 Smith St Brooklyn" link="http://www.miasbrooklyn.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/ktBsIPFas5j7VHHw5OJNug/o.jpg" 
        title="Petee's Pie Company" address="61 Delancey St New York" link="https://www.peteespie.com"/>

        <Card imgsrc = "https://s3-media0.fl.yelpcdn.com/bphoto/PxTwAsAgYkT7e-6FN-j-Cw/o.jpg" 
        title="Eileen's Special Cheesecake" address="17 Cleveland Pl New York" link="https://www.eileenscheesecake.com/"/>

      </div>
    </div>
  )
}

export default App
