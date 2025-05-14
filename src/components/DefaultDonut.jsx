import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import '../styles/fonts.css'
import { div } from 'framer-motion/client'
import {assets} from '../assets/assets'

const Model = () => {
  const { scene } = useGLTF('/DefaultDonut.glb')
  return <primitive object={scene} scale={1.5} />
}

const players = [
  {
    name: 'Piyush Sharma',
    img: assets.Piyush_Sharma,
    score: 9.75,
    rank: 1,
  },
  {
    name: 'Deepak Vishwakarma',
    img: assets.Deepak_Vishwakarma,
    score: 9.5,
    rank: 2,
  },
  {
    name: 'Ketan Kumar Sahu',
    img: assets.Ketan_Kumar_Sahu,
    score: 9.25,
    rank: 3,
  },
  {
    name: 'Khushi Kosriya',
    img: assets.Khushi_Kosriya,
    score: 8.5,
    rank: 4,
  },
  {
    name: 'Abhinav Gupta',
    img: assets.Abhinav_Gupta,
    score: 8.25,
    rank: 5,
  },
  {
    name: 'Uday Pratap Sahu',
    img: assets.Uday_Pratap_Sahu,
    score: 8.0,
    rank: 6,
  },
  {
    name: 'Yogendra K. Narmada',
    img: 'Yogendra_Kumar_Narmada',
    score: 7.25,
    rank: 7,
  },
  {
    name: 'Vaibhav Thakur',
    img: assets.Vaibhav_Thakur,
    score: 7.0,
    rank: 8,
  },
  {
    name: 'Warisha Fatima',
    img: assets.Warisha_Fatima,
    score: 6.5,
    rank: 9,
  },
];



const Card = ({ name, img, score, rank }) => {
  return (
    <div className="w-full max-w-[300px] sm:w-[280px] h-auto bg-radial-[at_25%_25%] from-white to-zinc-900 to-65% rounded-2xl shadow-lg p-4 flex flex-col items-center text-white m-2">
      <div className="w-full flex justify-center">
        <img
          src={img}
          alt={name}
          className="w-full h-40 sm:h-48 object-cover rounded-2xl"
        />
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <h2 className="text-base sm:text-xl font-semibold mt-2 sm:mt-4">{name}</h2>
        <p className="text-xs text-gray-300 mt-1 sm:mt-2 font-bold">#{rank}</p>
      </div>

      <div className="mt-3 sm:mt-auto w-full bg-black rounded-xl p-2 sm:p-4 flex justify-between items-center">
        <p className="text-gray-400 text-xs sm:text-base">Score</p>
        <p className="text-sm sm:text-lg font-bold text-white">{score}</p>
      </div>
    </div>
  )
}

const DefaultDonut = () => {
  const [activeTab, setActiveTab] = useState('Landing');

  const renderContent = () => {
    switch (activeTab) {
      case 'Landing':
        return (
          <>
            <h2 className="text-4xl sm:text-[80px] font-bold -mb-8 sm:-mb-22 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Make one</h2>
            <div className="h-[250px] sm:h-[420px] w-full max-w-xs sm:max-w-lg">
              <Canvas camera={{ position: [-2, 4, 0], fov: 100 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <Suspense fallback={null}>
                  <Model />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
            </div>
            <p className="text-4xl sm:text-[80px] italic font-[Playfair] text-center">for the ages</p>
            <p className='text-lg sm:text-2xl -mb-2 text-center'>3D Challenge</p>
          </>
        );
      case 'Gallery':
        return (
       <>
        <div className='bg-zinc-900 w-full min-h-screen rounded-t-3xl sm:rounded-4xl p-4 pt-6 sm:p-0'>
          <div className='backdrop-blur-md bg-black/60 rounded-3xl py-6 sm:py-8'>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-white" style={{ fontFamily: 'var(--font-poppins)' }}>Participants Gallery</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[1280px] mx-auto px-1 sm:px-0">
          {players.map((player) => (
            <Card key={player.rank} {...player} />
          ))}
          </div>
          </div>
        </div>
       </>
      );
      case 'About':
        return (
          <div 
            className="w-full flex flex-col items-center justify-center text-center min-h-screen bg-no-repeat bg-center bg-cover overflow-y-auto no-scrollbar p-4 pt-6"
            style={{ backgroundImage: "url('/about_bg.png')" }} 
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl max-w-md sm:max-w-2xl p-4 sm:p-8">
              <h2 className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>About Default Donut</h2>
              <p className="text-sm sm:text-lg mb-3 text-gray-800" style={{ fontFamily: 'var(--font-poppins)' }}>
              The Graphix3D Club of BIT Durg presents “Default Donut: A Three-Donut Model Competition”, a fun and creative 3D modeling event inspired by Blender’s classic donut tutorial.

              Participants must design three unique donut models, showcasing creativity, modeling skills, and aesthetic sense. From realistic textures to quirky designs — let your imagination shape the perfect trio of donuts!
              </p>
              <p className="text-sm sm:text-lg mb-4 sm:mb-8 text-gray-800" style={{ fontFamily: 'var(--font-poppins)' }}>
                Our competition encourages participants to push boundaries while
                honoring fundamentals. Whether you're creating hyper-realistic
                renders, abstract interpretations, or animated experiences, Default Donut
                provides a platform to showcase your skills and connect with
                fellow creators.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-y-auto no-scrollbar">
      <nav className="p-4 flex flex-col sm:flex-row items-center justify-between sm:relative z-10">
        <h1 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-0" style={{ fontFamily: 'var(--font-poppins)' }}>Default Donut</h1>
        <div className="flex gap-3 sm:gap-8 bg-gray-200 py-2 px-3 sm:px-6 rounded-full sm:absolute sm:top-4 sm:left-1/2 sm:-translate-x-1/2">
          <button 
            className={`text-xs sm:text-base ${activeTab === 'Landing' ? "font-medium" : "text-gray-700"}`} 
            style={{ fontFamily: 'var(--font-poppins)' }} 
            onClick={() => setActiveTab('Landing')}
          >
            Landing
          </button>
          <button 
            className={`text-xs sm:text-base ${activeTab === 'Gallery' ? "font-medium" : "text-gray-700"}`} 
            style={{ fontFamily: 'var(--font-poppins)' }} 
            onClick={() => setActiveTab('Gallery')}
          >
            Gallery
          </button>
          <button 
            className={`text-xs sm:text-base ${activeTab === 'About' ? "font-medium" : "text-gray-700"}`} 
            style={{ fontFamily: 'var(--font-poppins)' }} 
            onClick={() => setActiveTab('About')}
          >
            About
          </button>
        </div>
      </nav>
      
      <main className="flex flex-col items-center justify-center mt-4 sm:mt-1 px-2 sm:px-0">
        {renderContent()}
      </main>
    </div>
  )
}

export default DefaultDonut