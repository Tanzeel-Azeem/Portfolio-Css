import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="header">
        <div>
          <p id="portfolio"> <span>Port</span>Folio <span>.</span></p>
        </div>
        <div>
          <ul className="navbar">
            <li ><Link className="nav-btn " href='#home'>Home</Link> </li>
            <li ><Link className="nav-btn" href='#project'>Projects</Link></li>
            <li ><Link className="nav-btn" href='#about'>About Us</Link></li>
            <li ><Link className="nav-btn" href='#contact'>Contact Us </Link></li>

          </ul>
        </div>
      </div>
      {/* ==================HERO SECTION============================ */}
      <div id="home">
        <div className="heroSection">
          <div className="heroText">
            <h1>Hey {`I'm`} <br /><b>Tanzeel</b></h1>
            <p>{`I'm`} a Front end developer focus on quality and modern web designs.</p>
            <a href="#about"><button className="button">Learn More</button></a>
            <a href="#contact"><button className="button">Contact Me</button></a>

          </div>
          <div className="heroPic">
            <Image
              src='/myPic.jpeg'
              alt="pic"
              width={310}
              height={390} />

          </div>


        </div>


      </div>




    </main>
  );
}
