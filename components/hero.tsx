import React from "react"
import useThemeStore from "../store/theme"
const Hero = () => {
  const themeState = useThemeStore((state) => state.theme)
  return(
    <div className={`min-h-screen`+(themeState ? "text-white":"text-black")}>
      <section className="text-gray-400 body-font">
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mb-4 text-3xl font-medium text-gray-500 title-font sm:text-4xl">Featured product
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="mx-2 btn btn-accent">Button</button>
        <button className="mx-2 btn btn-primary">Button</button>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <img className="object-cover object-left rounded-tl-full rounded-md" alt="hero" src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero;
