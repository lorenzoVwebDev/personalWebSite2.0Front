import { Link, useNavigate } from 'react-router';
//components
import NeonButton from '@common/NeonButton/NeonButton';
//services
import downloadResume from '@services/downloadResume'
//types
import { type SocialObject } from '../../../../types/types';
import './InfoSocials.scss';

const SocialsArray: SocialObject[] = [{
  name: 'facebook',
  link: 'https://www.facebook.com/lorenzo.viganego/'
}, {
  name: 'instagram',
  link: 'https://www.instagram.com/lorenzoviganego/'
}, {
  name: 'linkedin',
  link: 'https://www.linkedin.com/in/lorenzo-viganego-1325441a3/'
}, {
  name: 'github',
  link: 'https://github.com/lorenzoVwebDev'
},]

function InfoSocials() {

  const navigate = useNavigate()

  const downloadCv = (
    <div className="btn-box">
      <NeonButton
        action={downloadResume}
        buttonText={'Download Resume'}
        classString={'btn'}
      />
      <NeonButton
        action={navigate}
        actionParameters={'/contacts'}
        buttonText={'Hire Me Now'}
        classString={'btn2'}
      />
    </div>
  )

  return (
    <div className="info-box">
      <div className="work-contacts">
        <div className="email-info">
          <h5>Email: </h5>
          <h6>lorenzoviganego.work@libero.it</h6>
        </div>
        <div className="linkedin-info">
          <h5>Linkedin: </h5>
            <a href="https://www.linkedin.com/in/lorenzo-viganego-1325441a3/" target="_blank">Lorenzo's Linkedin Profile</a>
        </div>
      </div>
      {downloadCv}
      <div className="social-icons">
      {
        SocialsArray.map((social, index) => {
          return (
            <a href={social.link} key={index} target="_blank"><i className={`bi bi-${social.name}`}></i></a>
          )
        })
      }
      </div>
    </div>
  )
}

export default InfoSocials;