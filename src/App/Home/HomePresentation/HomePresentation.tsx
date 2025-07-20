import InfoSocials from './InfoSocials/InfoSocials';
//env
import { devApi } from '../../utils/envVariables';
import './HomePresentation.scss';

function HomePresentation() {


  return <section className="home-presentation-section">
          <div className="home-presentation-section-left">
            <h1>Lorenzo Viganego</h1>
            <div>
            <h3>
              <span>Frontend&nbsp;Developer</span>
              <span>Backend&nbsp;Developer</span>
              <span>Music&nbsp;Producer</span>
            </h3>
          </div>
            <p>
              I have worked in different sectors, including, in my last experience, the energy sector as a coordinator and
              operator. This two-year experience has allowed me to take on multiple avenues within the industry, including:
              banking alignments, compliance checks and volume integration, payment checks on unpaid invoices and
              integration, selling, up-selling, cross-selling, and generic customs care by mail, PEC, and telephone contact. 
            </p>
            <p>(It doesn't comprehend the experiences before 2021)</p>
            <InfoSocials/>
          </div>
          <div className="home-presentation-section-right">
            <img src={`${devApi}images/home-background.png`} alt="" />
          </div>
        </section>
}

export default HomePresentation


