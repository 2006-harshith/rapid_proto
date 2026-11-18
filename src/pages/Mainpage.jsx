import "./Mainpage.css";
import slaImg from "../assets/images/technologies/sla.jpg";
import slsImg from "../assets/images/technologies/sls.jpg";
import mjfImg from "../assets/images/technologies/mjf.jpg";
import srmImg from "../assets/images/technologies/srm.jpg";
import batteryImg from "../assets/images/home/battery_cell_holder_2.png";
import piaggioLogo from "../assets/images/clients/piaggio.png";
import bajajLogo from "../assets/images/clients/bajaj.png";
import pricolLogo from "../assets/images/clients/pricol.png";
import lmwLogo from "../assets/images/clients/lmw.png";
import tvsLogo from "../assets/images/clients/tvs.png";
import boschLogo from "../assets/images/clients/bosch.png";
import ultraLogo from "../assets/images/clients/ultra.png";

const technologies = [
  {
    code: "SLA",
    name: "Stereolithography",
    image: slaImg,
    text: "Delivers exceptional dimensional accuracy and a refined surface finish using photosensitive resin. Well suited to intricate R&D models and aesthetic-grade prototypes.",
  },
  {
    code: "SLS",
    name: "Selective Laser Sintering",
    image: slsImg,
    text: "Produces durable Nylon components engineered for elevated heat resistance. A practical choice for functional testing and efficient small-batch runs.",
  },
  {
    code: "MJF",
    name: "Multi Jet Fusion",
    image: mjfImg,
    text: "HP MJF technology yields lightweight components with excellent structural integrity and rapid production cycles — well matched to automotive validation and short-run custom builds.",
  },
  {
    code: "SRM",
    name: "Silicone Rubber Molding",
    image: srmImg,
    text: "Vacuum-cast components built from inspected SLA masters, allowing several units to be reproduced from a single tool while keeping per-unit costs contained.",
  },
];

const reasons = [
  {
    title: "Responsive delivery",
    text: "in-house equipment eliminates the delays typical of outsourced production.",
  },
  {
    title: "Consistent standards",
    text: "every component undergoes dimensional inspection before it reaches the customer.",
  },
  {
    title: "Broader reach",
    text: "twin operations in Coimbatore and Pune extend capacity across regions.",
  },
];

const clients = [
  { name: "Piaggio", logo: piaggioLogo },
  { name: "Bajaj", logo: bajajLogo },
  { name: "TVS", logo: tvsLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "Pricol", logo: pricolLogo },
  { name: "LMW", logo: lmwLogo },
  { name: "Ultra", logo: ultraLogo },
];

export default function Mainpage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-container home-hero__content">
          <p className="home-hero__eyebrow">
            {/* Since 2010 &nbsp; */}
            {/* <br /> */}
            {/* Coimbatore &amp; Pune, India */}
          </p>
          <h1 className="home-hero__title">Rapid Proto Tech</h1>
          <p className="home-hero__lead">
            In-House 3D Printing &amp; Rapid Prototyping Solutions
          </p>
          <div className="home-hero__actions">
            <a href="#contact" className="home-btn home-btn--primary">
              Get in Touch
            </a>
            <a href="#technologies" className="home-btn home-btn--outline">
              Our Technologies
            </a>
          </div>
        </div>
      </section>

      <section className="home-section home-about">
        <div className="home-container home-about__grid">
          <div>
            <p className="home-label">About Us</p>
            <h2 className="home-heading">
              Precision, reliability and speed since 2010
            </h2>
          </div>
          <div>
            <p className="home-about__text">
              Rapid Proto Tech (RPT) is a lean, in-house 3D printing enterprise
              supporting product development teams across diverse industries.
              Since 2010, our Coimbatore and Pune facilities have delivered
              precision, reliability, and speed to every engagement — enabling
              clients to move confidently from concept to functional design
              without the delays of outsourced production.
            </p>
            <dl className="home-about__facts">
              <div>
                <dt>Established</dt>
                <dd>2010</dd>
              </div>
              <div>
                <dt>Facilities</dt>
                <dd>Coimbatore &amp; Pune</dd>
              </div>
              <div>
                <dt>Technologies</dt>
                <dd>SLA, SLS, MJF, SRM</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="technologies" className="home-section home-tech">
        <div className="home-container">
          <h2 className="home-heading">Our Technologies &amp; Capabilities</h2>
          <div className="home-tech__grid">
            {technologies.map((tech) => (
              <article key={tech.code} className="home-tech__card">
                <img
                  className="home-tech__image"
                  src={tech.image}
                  alt={`Part produced with ${tech.name}`}
                  loading="lazy"
                />
                <div className="home-tech__body">
                  <h3 className="home-tech__title">
                    <span className="home-tech__code">{tech.code}</span>
                    {tech.name}
                  </h3>
                  <p className="home-tech__text">{tech.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-why">
        <div className="home-container home-why__grid">
          <div>
            <h2 className="home-heading home-heading--light">
              Why Choose Rapid Proto Tech
            </h2>
            <ul className="home-why__list">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="home-why__figure">
            <img
              src={batteryImg}
              alt="MJF-printed battery cell holder assembly"
              loading="lazy"
            />
            <figcaption>MJF-printed battery cell holder assembly</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-clients">
        <div className="home-container">
          <p className="home-clients__label">Trusted by teams at</p>
          <ul className="home-clients__list">
            {clients.map((client) => (
              <li key={client.name}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="home-section home-contact">
        <div className="home-container">
          <div className="home-contact__box">
            <div className="home-contact__intro">
              <h2 className="home-heading home-heading--light">Get in Touch</h2>
              <address className="home-contact__address">
                <span>Main Office</span>
                131 A3, West Ramalingam Road, R S Puram,
                <br />
                Coimbatore 641002, Tamil Nadu, India
              </address>
            </div>
            <dl className="home-contact__details">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+919159923535">+91 91599 23535</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:sales@rapidprototech.com">
                    sales@rapidprototech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>
                  <a href="https://www.rapidprototech.com/">
                    www.rapidprototech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Director</dt>
                <dd>
                  Kannan Dhandapani,{" "}
                  <a href="tel:+919843023535">+91 98430 23535</a>
                </dd>
              </div>
              <div>
                <dt>Manager</dt>
                <dd>
                  Arun Prakash K G,{" "}
                  <a href="tel:+919159923535">+91 91599 23535</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
