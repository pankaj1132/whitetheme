import { motion } from 'framer-motion';
import Ayushi from '../assets/Ayushi.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(78,251,159,0.25)' },
};

const shimmer = {
  initial: { backgroundPosition: '200% 0' },
  hover: {
    backgroundPosition: '-200% 0',
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};

const Founder = () => {
  return (
    <motion.div
      className="py-20 px-6 flex justify-center"
      style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.img
          src={Ayushi}
          alt="Ayushi Yadav, Founder"
          className="w-[280px] h-[380px] object-cover rounded-xl shadow-lg border-4"
          style={{ borderColor: 'var(--theme-purple)' }}
          variants={cardVariants}
          whileHover="hover"
          whileTap="hover"
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <section className="max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-10 h-[1.5px]" style={{ background: 'var(--theme-yellow)' }}></span>
            <h2 className="font-extrabold text-sm uppercase leading-none tracking-wide" style={{ color: 'var(--theme-purple)' }}>
              Meet the Founder
            </h2>
          </div>
          <h1 className="font-extrabold text-3xl sm:text-4xl leading-tight mb-4">
            Ayushi Yadav
          </h1>
          <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--theme-yellow)' }}>Founder & HR Leader</h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#555' }}>
            Ayushi Yadav brings 8 years of rich experience in Human Resources, having worked across various industries and later founding a tech organization herself. Her journey has given her deep insights into the unique HR challenges faced by startups and small businesses.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#888' }}>
            A strong believer in <span style={{ color: 'var(--theme-purple)', fontWeight: 600 }}>
              "skills can be taught, but passion must be felt"
            </span>, Ayushi blends structure with empathy. As a cultural leader, she builds HR systems that empower teams, drive ownership, and cultivate purpose.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <motion.span
              className="px-4 py-1 rounded-full text-xs font-bold transition-all duration-300 shimmer"
              style={{ background: 'var(--theme-yellow)', color: '#222' }}
              variants={shimmer}
              initial="initial"
              whileHover="hover"
            >
              Empathy
            </motion.span>
            <motion.span
              className="px-4 py-1 rounded-full text-xs font-bold transition-all duration-300 shimmer"
              style={{ background: 'var(--theme-purple)', color: '#fff' }}
              variants={shimmer}
              initial="initial"
              whileHover="hover"
            >
              Leadership
            </motion.span>
            <motion.span
              className="px-4 py-1 rounded-full text-xs font-bold border transition-all duration-300 shimmer"
              style={{ background: '#fff', color: 'var(--theme-purple)', borderColor: 'var(--theme-purple)', borderWidth: 1 }}
              variants={shimmer}
              initial="initial"
              whileHover="hover"
            >
              HR Strategy
            </motion.span>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Founder;

