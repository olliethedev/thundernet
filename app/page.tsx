/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Logo from './assets/logo.png'
import { NavBar } from './components/NavBar'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col">
      <NavBar />
    <div className="hero-content flex-col lg:flex-row">
      <Image src={Logo} className="max-w-sm rounded-lg shadow-2xl" alt="logo" />
      <div>
        <h1 className="text-5xl font-bold">Thundernet</h1>
        <p className="py-6">A marketplace where developers can easily list AI Agents and Vector Stores for others to discover and utilize.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  )
}
