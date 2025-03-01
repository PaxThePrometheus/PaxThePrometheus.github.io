import './App.css';
import { ReactComponent as PatreonIcon } from './patreon.svg';
import { ReactComponent as DiscordIcon } from './discord.svg';
import { ReactComponent as ItchIcon } from './itch.svg';

function App() {
  return (
    <div className="App">
      <title>Misfits Creatives</title>
      <header className="App-header">
        <h1 className='background-text'>
          MISFITS
        </h1>
        <p className='fredoka-bold def-text'>
          This site is under construction :/
        </p>
      </header>
      <div className='container'>
        <p className='fredoka-bold def-text'>
          Please check back later!
        </p>
        <div className='socials'>
          <button className='button'>
            <a href="https://www.patreon.com/misfitscreatives" className="url-box patreon alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <PatreonIcon width={32} height={32}></PatreonIcon>
              Patreon
            </a>
          </button>
          <button className='button'>
            <a href="https://discord.gg/MxF5jrmaV6" className="url-box discord alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <DiscordIcon width={32} height={32}></DiscordIcon>
              Discord
            </a>
          </button>
          <button className='button'>
            <a href="https://misfitscreatives.itch.io" className="url-box itch alt-text fredoka-bold" target='_blank' rel='noopener noreferrer'>
              <ItchIcon width={32} height={32}></ItchIcon>
              Itch.io
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
