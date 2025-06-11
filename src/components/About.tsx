import { motion } from 'framer-motion'
import Ayushi from '../assets/Ayushi.png'

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const cardVariants = {
  hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(78,251,159,0.25)' },
}

const About = () => {
  return (
    <motion.div
      id="about"
      className=""
      style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        <img alt="Portrait of a man with red and blue double exposure effect on black background" className="w-[320px] h-[480px] object-cover flex-shrink-0" height="480" src={Ayushi} width="320"/>
        <section className="max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-10 h-[1.5px]" style={{ background: 'var(--theme-yellow)' }}></span>
            <h2 className="font-extrabold text-sm uppercase leading-none tracking-wide" style={{ color: 'var(--theme-purple)' }}>
              About Us – QuikHR
            </h2>
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight mb-6">
            Who We Are
          </h1>
          <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: '#555' }}>
            QuikHR was born out of a simple idea—small businesses deserve great HR too. We’re not just consultants; we become your HR team, embedding ourselves into your culture and operations so you can focus on building your business, while we build your people.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-sm max-w-lg">
            <motion.p
              whileHover="hover"
              variants={cardVariants}
              className="transition-all duration-200"
              style={{ color: 'var(--theme-purple)' }}
            >
              <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>
                Phone:
              </span>
              +009 321 23456
            </motion.p>
            <motion.p
              whileHover="hover"
              variants={cardVariants}
              className="transition-all duration-200"
              style={{ color: 'var(--theme-purple)' }}
            >
              <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>
                Residence:
              </span>
              gurgoan
            </motion.p>
            <motion.p
              whileHover="hover"
              variants={cardVariants}
              className="transition-all duration-200"
              style={{ color: 'var(--theme-purple)' }}
            >
              <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>
                Email:
              </span>
              hello@Quickhire.com
            </motion.p>
            <motion.p
              whileHover="hover"
              variants={cardVariants}
              className="transition-all duration-200"
              style={{ color: 'var(--theme-purple)' }}
            >
              <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>
                Address:
              </span>
              12/7, Mc Street, Gurgoan
            </motion.p>
            <motion.p
              whileHover="hover"
              variants={cardVariants}
              className="transition-all duration-200"
              style={{ color: 'var(--theme-purple)' }}
            >
              <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>
                Website:
              </span>
              www.Quickhire.com
            </motion.p>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default About