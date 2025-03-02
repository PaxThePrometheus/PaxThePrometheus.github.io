import './App.css';
import { ReactComponent as PatreonIcon } from './patreon.svg';
import { ReactComponent as DiscordIcon } from './discord.svg';
import { ReactComponent as PayPalIcon } from './paypal.svg';
import { ReactComponent as ItchIcon } from './itch.svg';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


function App() {
  return (
    <div className="App">
      <title>Misfits Creatives</title>
      <header className="App-header">
        <h1 className='background-text'>
          MISFITS
        </h1>
        <p className='fredoka-bold'>
          This site is under construction :/
        </p>
      <div className='container'>
        <p className='fredoka-bold temp-min'>
          In the meantime, check out our socials!
        </p>
        <div className='socials'>
          <button className='button'>
            <a href="https://www.patreon.com/misfitscreatives" className="url-box patreon alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <PatreonIcon width={32} height={32} className='shadow'></PatreonIcon>
              Patreon
            </a>
          </button>
          <button className='button'>
            <a href="https://discord.gg/MxF5jrmaV6" className="url-box discord alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <DiscordIcon width={32} height={32} className='shadow'></DiscordIcon>
              Discord
            </a>
          </button>
          <button className='button'>
            <a href="https://paypal.me/generouspax" className="url-box paypal alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <PayPalIcon width={32} height={32} className='shadow'></PayPalIcon>
              PayPal
            </a>
          </button>
          {/* <button className='button'>
            <a href="https://misfitscreatives.itch.io" className="url-box itch alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <ItchIcon width={32} height={32}></ItchIcon>
              Itch.io
            </a>
          </button> */}
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
