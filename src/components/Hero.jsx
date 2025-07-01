import { motion } from "framer-motion";
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-[90rem] mx-auto flex flex-row items-start gap-3 xs:gap-4 sm:gap-6 lg:gap-8 xl:gap-10`}>
        <div className="flex flex-col justify-center items-center mt-2 xs:mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
          <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[#915eff]" />
          <div className="w-0.5 sm:w-1 h-40 xs:h-48 sm:h-60 md:h-80 lg:h-96 xl:h-[28rem] violet-gradient" />
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
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' className="hover:scale-110 transition-transform duration-300">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;