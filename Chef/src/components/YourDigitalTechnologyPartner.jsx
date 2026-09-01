import array1 from "./data6"

export default function TechnologyPartners(){

    return <section className="SectionTechnologyPartner">
        <div className="Intro.Partner">

         <p className="TechnologyPartenerp1">The ProWeb difference</p>
         <h1 className="TechnologyPartenerh1">We Are your Digital Technology Partner</h1>
         <p className="TechnologyPartenerp2">As your strategic partner, we dive deep into your goals, craft custom solutions, and stay with you every step of the way to ensure your technology is not only reliable but impactful.</p>
        <p className="TechnologyPartenerp3">Together, we’ll build your digital future.</p>

        <a className="TechLink" href="">Learn More</a>
        </div>
        

        <div className="WraperTech">
        {
            array1.map((entry)=>{
         const Icon=entry.img;
           
     return   <div className="Information" key={entry.id}>
        <Icon className="TechnologyPartnersIcon" size={26} alt="logo"  color="#5DCAA5"/>
        <h1 className="TechnologyPartnersHeading">{entry.heading}</h1>
        <p className="TechnologyPartnersParagraph">{entry.paragraph}</p>
        </div>
         })
}
</div>
    </section>


}