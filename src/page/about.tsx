import { useState } from "react";
import sekolah from '../assets/sekolah.jpg';
import bandung from '../assets/bandung.jpg';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div id="journey" className="bg-white ap h-auto">
      <div className="-mt-9 mb-20">
        <h1 className="text-center mb-8 text-4xl font-bold pt-16 text-black">Perjalanan Saya</h1>
        <div className="flex justify-center gap-20">
          <div 
            className="card bg-base-100 image-full w-96 shadow-xl"
            onMouseEnter={() => setHoveredCard('smkn')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <figure>
              <img src={sekolah} alt="Sekolah" />
            </figure>
            <div 
              className="card-body items-center text-center"
              style={{ 
                opacity: hoveredCard === 'smkn' ? 1 : 0, 
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: hoveredCard === 'smkn' ? 'auto' : 'none'
              }}
            >
              <h2 className="card-title text-white">SMKN 4 BANDUNG</h2>
              <p className="text-white">Saat ini saya bersekolah di Sekolah Menengah Kejuruan 4 Bandung, jurusan Rekayasa Perangkat Lunak</p>
            </div>
          </div>

          <div 
            className="card bg-base-100 image-full w-96 shadow-xl"
            onMouseEnter={() => setHoveredCard('bandung')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <figure>
              <img src={bandung} alt="Bandung" />
            </figure>
            <div 
              className="card-body text-center items-center"
              style={{ 
                opacity: hoveredCard === 'bandung' ? 1 : 0, 
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: hoveredCard === 'bandung' ? 'auto' : 'none'
              }}
            >
              <h2 className="card-title text-white">KOTA BANDUNG</h2>
              <p className="text-white">Saat ini saya tinggal di Kota Bandung</p>
            </div>
          </div>
        </div>
<ul className="timeline mt-8 justify-center">
      <li>
          <div className="timeline-start timeline-box text-white">SDN 164 Karang Pawulang</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box text-white">SMPN 13 Bandung</div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="" />
          <div className="timeline-start timeline-box text-white">SMKN 4 Bandung</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
            </svg>
          </div>
        </li>
      </ul>
      </div>
</div>
  );
};

export default About;