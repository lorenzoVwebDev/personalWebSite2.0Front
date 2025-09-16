import { type ReactElement } from 'react';
import arrays from "http://localhost:3000/scripts/arrays"
import NeonButton from '@common/NeonButton/NeonButton';
import { type JobsType } from '@types/types';
//services
import downloadResume from '@services/downloadResume'
import './AboutMe.scss'

function AboutMe(): ReactElement {

  console.log(arrays)
  return (
    <>
      <section id="main" className="about-abstract-section">
        <div className="about-abstract-ctnr">
          <h1><span>J</span>ob's <span>E</span>xperience <span>H</span>ystory</h1>
          <p>
            I graduated from science high school in 2012, and then I started studying at Saint Louis Music College. It had been a very good experience that ended in 2021 when I graduated from this university. As you may imagine, the conservatory implies a very long path that endures not less than 6 years, with hard studies in almost every field related to music. Throughout this journey, I had been working in several sectors as part time jobs to earn money necessary to live as well as buy me instrumentation for my passion/activity. Afterwards, I decided to pursue a more dedicated career in different sectors. So far, I have worked in different sectors, including, in my last experience, the energy sector as a coordinator and operator. This two-year experience has allowed me to take on multiple avenues within the industry, including: banking alignments, compliance checks and volume integration, payment checks on unpaid invoices and integration, selling, up-selling, cross-selling, and generic customs care by mail, PEC, and telephone contact. Let's take a look below to gain more information about my previous work experiences.
          </p>
          <p><i>(It doesn't comprehend the experiences before 2021)</i></p>

          <div className="about-abstract-socials-ctnr">
            <div className="btn-box">
                    <NeonButton
                      action={downloadResume}
                      buttonText={'Download Resume'}
                      classString={'btn'}
                    />
{/*               <a href="#contact" className="btn">Hire Me now!</a> */}
            </div>

            <div className="about-abstract-social-icons">
              <a href="https://www.facebook.com/lorenzo.viganego/" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/lorenzoviganego/" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/lorenzo-viganego-1325441a3/" target="_blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="about-abstract-img-ctnr">
            <img className="personal-home-image" src="http://localhost:3000/images/home-page-personal.jpg" fetchPriority='high'/>
        </div>
      </section>

      <section className="about-jobs-section">
        {
          arrays.jobsDone.map((job: JobsType, index: number) => {
            return (
            <div className="about-jobs-ctnr" key={index}>
              <div className="about-jobs-description-ctnr">
                <h1>{job.name}</h1>
                <p>{job.description}</p>
              </div>
              <div className="about-jobs-img-ctnr">
                <img src={`${import.meta.env.VITE_DEV_API}images/jobs/${job.image}`} alt="jobs image" />
              </div>
            </div>)
          })
        }
      </section>
    </>  
  )
}

export default AboutMe;