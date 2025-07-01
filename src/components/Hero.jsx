import { motion } from "framer-motion";
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] xs:top-[100px] sm:top-[120px] max-w-[90rem] mx-auto flex flex-row items-start gap-3 xs:gap-4 sm:gap-6 lg:gap-8 xl:gap-10`}>
        <div className="flex flex-col justify-center items-center mt-2 xs:mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
          <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[#915eff]"/>
          <div className="w-0.5 sm:w-1 h-40 xs:h-48 sm:h-60 md:h-80 lg:h-96 xl:h-[28rem] violet-gradient"/>
        </div>
        <div className="flex-1 mt-2 xs:mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
          <h1 className={`${styles.heroHeadText} text-white mb-3 xs:mb-4 sm:mb-6 lg:mb-8`}>
            Turning caffeine ☕, chaos 😵‍💫, and code 👨🏻‍💻 into user experiences 🚀.
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 xs:mt-3 sm:mt-4`}>
            Hi👋🏻I'm <span className="text-[#915eff] font-semibold">Charan</span>
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 lg:bottom-12 xl:bottom-16 w-full flex justify-center items-center">
        <a href="#about" className="hover:scale-110 transition-transform duration-300">
          <div className="w-[24px] h-[42px] xs:w-[28px] xs:h-[50px] sm:w-[32px] sm:h-[58px] lg:w-[35px] lg:h-[64px] xl:w-[38px] xl:h-[68px] rounded-3xl border-2 xs:border-3 sm:border-4 border-secondary flex justify-center items-start p-1 xs:p-1.5 sm:p-2 hover:border-[#915eff] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop"}}
              className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;