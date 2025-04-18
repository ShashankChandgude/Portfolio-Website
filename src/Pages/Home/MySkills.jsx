import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Experties</h2>
            </div>
            <div className="skills--section--container">
            {data?.skills?.map((item, index) => {
          const skillsArray = item.description.split(",");
          return (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <ul className="skills--section--description">
                  {skillsArray.map((skill, idx) => (
                    <li key={idx}>{skill.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    );
}