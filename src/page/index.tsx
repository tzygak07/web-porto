import { TypeAnimation } from 'react-type-animation';
import self from '../assets/self.png';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Index = () => {
  return (
    <div id="home" className="hero bg-base-200 py-4 pb-20 relative">
      <div className="hero-content flex-col mb-12 lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 relative z-10">
        <div className="hero-image">
          <img
            src={self}
            className="w-72 h-auto  rounded-lg"
            alt="Self"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Halo Semua 👋</h1>
          <h1 className="card-title poppins title font-poppins text-5xl mt-2">Farrel Raza Sigak Amrullah</h1>
          <p className="mt-5 text-white text-2xl">
            Saya adalah{" "}
            <TypeAnimation
              sequence={[
                'Front End Developer.',
                920,
                'UI/UX Desainer.',
                920
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', fontWeight: 500, color: '#646cff', fontStyle: 'italic' }}
              repeat={Infinity}
            />
          </p>
          <div className="card-actions justify-center lg:justify-start mt-9 text-center">
          <div className="flex flex-col items-center lg:flex-row lg:items-start">
              <a target='_blank' href="https://github.com/tzygak07" className="flex flex-col items-center mr-4">
                <FaGithub className='h-7 w-7 color' />
                <span className="text-xs mt-1">Github</span>
              </a>
              <a target='blank' href="instagram.com/farrelrazaa" className="flex flex-col items-center mr-4">
                <FaInstagram className='h-7 w-7 ins' />
                <span className="text-xs mt-1">Instagram</span>
              </a>
              <a target='_blank' href="mailto: lendrafarrel@gmail.com" className="flex flex-col items-center">
                <SiGmail className='h-7 w-7 mail' />
                <span className="text-xs mt-1">Gmail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg className='absolute bottom-0 left-0' id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" fill="#002233"></rect><path d="M0 468L15 475.2C30 482.3 60 496.7 90 496.3C120 496 150 481 180 484.3C210 487.7 240 509.3 270 515.2C300 521 330 511 360 511.2C390 511.3 420 521.7 450 518.8C480 516 510 500 540 501.3C570 502.7 600 521.3 630 527.3C660 533.3 690 526.7 720 525.7C750 524.7 780 529.3 810 521.5C840 513.7 870 493.3 885 483.2L900 473L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
    </div>

  );
};

export default Index;