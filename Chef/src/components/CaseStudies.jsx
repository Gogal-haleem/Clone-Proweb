
import {Link} from "react-router-dom"
import Header from "./Header"

export default function CaseStudies(){

    return <section className="SectionForCaseStudies">

     <Header/>

     <div className="ContainerForCaseStudies">

      <p className="ParagraphForCaseStudies">Case studies</p>
      <h1 className="headingForCaseStudies">Real partnerships. Practical technology outcomes.</h1>
      <p  className="paragraph2ForCaseStudies">See how Australian organisations use our infrastructure, cloud, CRM, automation, websites, and digital marketing expertise to solve everyday challenges and build lasting capability.</p>
      <a href="" className="linkForCaseStudies">View client stories</a>
      <Link to="" className="linkForCaseStudies">Start a conversation</Link>


     </div>
    </section>
}