import InfoSocials from './InfoSocials/InfoSocials';
//env
import './HomePresentation.scss';

function HomePresentation() {


  return <section className="home-presentation-section">
          <h1><span>L</span>orenzo <span>V</span>iganego | <span>F</span>ullstack Dev & <span>M</span>usic Producer</h1>
          <div className="home-presentation-content">
          <div className="home-presentation-section-left">
            <div className="home-presentation-synopsis">
              <p>
                I have worked in different sectors, including, in my last experience, the energy sector as a coordinator and
                operator. This two-year experience has allowed me to take on multiple avenues within the industry, including:
                banking alignments, compliance checks and volume integration, payment checks on unpaid invoices and
                integration, selling, up-selling, cross-selling, and generic customs care by mail, PEC, and telephone contact. 
              </p>
              <p>(It doesn't comprehend the experiences before 2021)</p>
            </div>
            <InfoSocials/>
          </div>
          <div className="home-presentation-section-right">
            <img src={`${import.meta.env.VITE_DEV_API}images/home-background.png`} alt="home-background.png" fetchPriority="high"/>
          </div>
          </div>
        </section>
}

export default HomePresentation


