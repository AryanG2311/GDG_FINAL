import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/common/Button';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <ScrollProgressBar />
      <motion.div 
        className="relative min-h-screen"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1580570598977-4b2412d01bbc?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
          initial={{ filter: 'brightness(0.65) blur(4px)' }}
          animate={{ 
            filter: isHovering 
              ? 'brightness(0.75) blur(0px)' 
              : 'brightness(0.65) blur(4px)' 
          }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-extrabold text-white mb-8 font-serif tracking-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ 
                  color: '#90EE90',
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Find Your Perfect Cow Breed
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-green-50/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Get personalized recommendations based on genetic factors, physical characteristics,
              and health parameters.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/form">
                <Button className="text-lg px-10 py-4 bg-gradient-to-r from-[#2e7d32] to-[#66bb6a] 
hover:bg-gradient-to-bl hover:from-[#1b5e20] hover:to-[#43a047] 
text-white font-medium rounded-xl shadow-md hover:shadow-lg 
transition-all duration-300 focus:ring-4 focus:ring-green-300">
                  Start Assessment
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Floating elements for visual interest */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-green-500/20 blur-xl"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-green-300/10 blur-xl"
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
