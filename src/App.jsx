
import './App.css';
import IPadScrolling from './components/IPadScrolling';
import Navbar from './components/Navbar';
import Card from './components/Card'
import Find from './components/Find';
import HorizontalCard from './components/HorizontalCard';
import Delhi from './components/delhi.jpg'
import Bihar from './components/bihar.jpg'
import UP from './components/up.jpg'
import MH from './components/mumbai.jpg'
import PartyCard from './components/PartyCard';
import BJP from './components/Bjp.png';
import CONG from './components/congress.jpg';
import AAP from './components/aap.png';
import CPM from './components/CPM.png';
import NCP from './components/NCP.png';
import TCP from './components/TCP.png';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='page'>
<div className="ipad">
   <IPadScrolling/>
</div>
<div className="cardd">
  <Card/>
</div> 
      </div>
      <Find/>
      <div className="city-cards">
{/* <div className="delhi"> */}
  <HorizontalCard name='Delhi' backgroundImage={Delhi}/>
 
{/* </div> */}
 <HorizontalCard name='Bihar' backgroundImage={Bihar}/>
  <HorizontalCard name='Uttar Pradesh' backgroundImage={UP}/>
  <HorizontalCard name='Maharashtra' backgroundImage={MH} />
      </div>
      <h1>Political Parties</h1>
      <div className="party-list">
        <PartyCard
          name="BHARTIYA JANTA PARTY (BJP)"
          description="The Bharatiya Janata Party (BJP) is a major Indian political party founded in 1980, with roots in Hindu nationalism. Led by figures like Atal Bihari Vajpayee and Narendra Modi, the BJP emphasizes economic development and social welfare while promoting Hindu culture. It has enjoyed significant electoral success, forming governments at both state and national levels. Despite criticism for alleged religious polarization and economic favoritism, supporters point to its initiatives for growth and governance."
          imageUrl={BJP}
        />
        <PartyCard
          name="INDIAN NATIONAL CONGRESS PARTY (INC)"
          description="Empowering the Nation Ensuring Progress A Promise of Inclusive Governance and Prosperity for All
          This comprehensive slogan encapsulates the Congress Partys dedication to fostering an inclusive society where every individual regardless of background or circumstance has the opportunity to thrive It reflects the partys commitment to governance that prioritizes the well-being and advancement of all citizens aiming to bridge socio-economic disparities and pave the way for a brighter more equitable future Through its policies and initiatives the Congress Party seeks to empower marginalized communities strengthen democratic institutions and drive sustainable development across the nation ensuring progress that leaves no one behind."
          imageUrl={CONG}
        />
        <PartyCard
          name="AAM AADMI PARTY (INC)"
          description="The Aam Aadmi Party (AAP) is dedicated to fostering clean politics and advocating for governance free from corruption. We are committed to empowering the common man and woman, championing social justice, and striving tirelessly for the betterment of all citizens."
          imageUrl={AAP}
        />
        <PartyCard
          name="COMMUNIST PARTY OF INDIA (MARXIST)"
          description="The Communist Party of India (CPI) is one of the oldest and largest political parties in India, tracing its roots back to the early 1920s. It emerged as a result of the struggle against British colonial rule and the fight for workers' rights and social justice.

          The CPI is a left-wing political party that advocates for socialism, secularism, and the rights of workers, farmers, and marginalized communities. It has historically been active in various social movements and struggles, including labor movements, peasant movements, and movements for the rights of women, Dalits, and other oppressed groups.
          
          The party's ideology is based on Marxism-Leninism and it seeks to establish a classless society where the means of production are owned and controlled by the working class. The CPI has been involved in electoral politics at both the national and state levels in India, and it continues to play a significant role in shaping political discourse and advocating for progressive policies."
          imageUrl={CPM}
        />
        <PartyCard
          name="NATIONALIST CONGRESS PARTY (NCP)"
          description="The Nationalist Congress Party (NCP) is a prominent political party in India with a strong presence in the state of Maharashtra and other regions. It was founded in 1999 by Sharad Pawar, a seasoned politician with a long-standing career in Indian politics.

          The NCP stands on the platform of secularism, social justice, and federalism. It advocates for the rights and welfare of farmers, workers, and marginalized communities, aiming to bridge the gap between different social and economic strata. The party promotes inclusive development, emphasizing the need for equitable distribution of resources and opportunities.
          
          With a focus on regional development and decentralization of power, the NCP strives to address the diverse needs and aspirations of different states and regions within India. It actively participates in coalition politics at both the national and state levels, often aligning with other like-minded parties to form governments and influence policy decisions.
          
          The NCP has been instrumental in shaping the political landscape of Maharashtra and has also made significant contributions to national politics. Its leaders have held key positions in government and have been involved in policymaking at various levels, advocating for the interests of the common people and working towards the betterment of society."
          imageUrl={NCP}
        />
        <PartyCard
          name="ALL INDIA TRINAMOOL CONGRESS(TMC)"
          description="The All India Trinamool Congress (AITC) is a political party in India that was founded in 1998 by Mamata Banerjee. AITC is primarily active in the state of West Bengal but has also expanded its presence to other regions of India. The party advocates for regional autonomy, secularism, and inclusive development policies. AITC's platform focuses on issues such as economic growth, social welfare, and the protection of minority rights. Under the leadership of Mamata Banerjee, AITC has gained significant electoral success and continues to be a prominent force in Indian politics."
          imageUrl={TCP}
        />
      </div>
      <Footer/>
     
      
    </div>
    
  );
}

export default App;
