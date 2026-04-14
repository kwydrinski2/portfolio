import './App.css';
import marketHome from './utils/marketHome.png';
import marketProducts from './utils/marketProducts.png';
import curation from './utils/curation.png';
import curationList from './utils/curationList.png';
import SoC from './utils/SoC.jpg';

function App() {
  return (
    <div className="App">
      {/* INTRO */}
      <header className="App-header">
        <h1><strong style={{ color: 'red' }}>Kyle Wydrinski</strong></h1>
      </header>

      {/* MY WORK */}
      <div className="Portfolio">
        <h1>My Work</h1>

        <div className="Card">
          <img src={marketHome} alt="marketHome" />
          <img src={marketProducts} alt="marketProducts" />
          <div className="Container">
            <h4>Market</h4>
            <p style={{ fontSize: '20px' }}>Sponsored by the University of Nebraska-Lincoln's Department of Agricultural Economics, 
              this Open Access Online Experimental Retail Facility allows various researchers to create customizable experiments. Using 
              React, NodeJS, and MySQL, researchers are able to create fully customizable popups, add and remove products, and run multiple 
              experiments with different configurations at the same time. As this team's backend developer, I had the opportunity to learn 
              and apply various techniques involving backend APIs to make this happen.</p>
          </div>
        </div>

        <div className="Card">
          <img src={curation} alt="curation" />
          <img src={curationList} alt="curationList" />
          <div className="Container">
            <h4>Curation</h4>
            <p style={{ fontSize: '20px' }}>I built a full‑stack music discovery platform using Next.js, React, and PostgreSQL that 
              lets users explore new tracks, curate personalized playlists, and share their favorites with a community. The backend is powered 
              by PostgreSQL, accessed through Prisma for type‑safe queries and migrations, ensuring data integrity and smooth scalability as 
              the user base grows. I integrated secure OAuth authentication, responsive UI components styled with Tailwind CSS, and real‑time 
              updates via WebSockets so playlists stay in sync across devices. 
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION EXPERIENCE */}
      <div className="Education">
        <h1>My Education</h1>

        <div className="Card-2">
          <img src={SoC} alt="UNL - School of Computing" />
          <div className="Container">
            <h4>University of Nebraska - Lincoln</h4>
            <p style={{ fontSize: '20px' }}>Major: Computer Science | Minor: Mathematics | May 2026 Graduate</p>
            <p style={{ fontSize: '20px' }}>
              <strong>Relavent Coursework:</strong><br />Fundementals of Cybersecurity | Operating Systems Principles | Secure Software Engineering
              <br />Computer Systems Engineering | Communication Networks | Principles of Operations Research
              <br /> Automata Computation and Formal Languages | Program Language Concepts | Unix Programming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
