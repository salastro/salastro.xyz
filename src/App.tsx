import './App.css'
import Waves from './blocks/Backgrounds/Waves/Waves.tsx'
import ProfileCard from './blocks/Components/ProfileCard/ProfileCard.tsx'
import grain from './assets/jeb.svg'
// import { VscArchive, VscAccount, } from 'react-icons/vsc';

function App() {
  // const items = [
  //   { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  //   { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  // ];

  return (
    <>
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(0, 0, 0, 1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      <ProfileCard
        name="SalahDin A. Rezk"
        title="Software Engineer"
        handle="salastro"
        status="Stil alive"
        avatarUrl="salah.png"
        grainUrl={grain}
        innerGradient="radial-gradient(circle at center, #ffffff00, #00000000)"
        showBehindGradient={false}
        showUserInfo={true}
        enableTilt={true}
        contactText="Contact Me"
        mail="s-salahdin.rezk@zewailcity.edu.eg"
        phone="+201094994995"
        address="Alpha Centauri"
        github="salastro"
        linkedin="salastro"
      />

      {
        // <Dock
        //   items={items}
        //   panelHeight={68}
        //   baseItemSize={50}
        //   magnification={70}
        // />
      }

    </>
  )
}

export default App
