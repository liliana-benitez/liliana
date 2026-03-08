import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Mail } from "lucide-react"

const PROPS_LIST = [1, 2, 3, 4, 5, 6, 7]
const CIRCLE_RADIUS = 190

const Hero = () => {
  const [activeId, setActiveId] = useState(1)
  const avatarRef = useRef(null)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-24 py-24 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-24">
        {/* Avatar */}
        <div className="flex-1 relative w-full max-w-[400px] aspect-square flex items-center justify-center order-2 lg:order-1">
          {/* middle */}
          <div
            ref={avatarRef}
            className="relative z-10 w-[70%] aspect-square flex items-center justify-center pointer-events-none"
          >
            <AnimatePresence>
              <motion.img
                key={activeId}
                src={`/assets/about-me/${activeId}.png`}
                alt="Avatar"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          {/* floating props */}
          <div className="absolute inset-0 pointer-events-none">
            {PROPS_LIST.map((id, index) => {
              const angle = index * (360 / PROPS_LIST.length) * (Math.PI / 180)
              const x = Math.cos(angle) * CIRCLE_RADIUS
              const y = Math.sin(angle) * CIRCLE_RADIUS

              return (
                <div
                  key={id}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    width: "70px", // Reduced
                    height: "70px", // Reduced
                    zIndex: 20
                  }}
                >
                  <motion.div
                    onClick={() => setActiveId(id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full h-full pointer-events-auto cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full h-full rounded-2xl bg-bg-dark/60 border border-accent-purple/20 p-2 shadow-2xl backdrop-blur-md flex items-center justify-center group"
                    >
                      <img
                        src={`/assets/about-me/${id}-prop.png`}
                        alt={`Prop ${id}`}
                        className="w-full h-full object-contain pointer-events-none group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* right text */}
        <div className="flex-1 space-y-6 order-1 lg:order-2 text-center lg:text-left z-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-fg flex flex-wrap justify-center lg:justify-start gap-x-2">
              <span>Hi, I'm </span>
              <span className="text-accent-cyan min-w-[120px] md:min-w-[180px]">
                {/* <Typewriter
                  options={{
                    strings: [
                      "Liliana.",
                      "a developer.",
                      "a creator.",
                      "a mentor."
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    cursor: "|"
                  }}
                /> */}
                <TypeAnimation
                  sequence={[
                    "Liliana.",
                    2000,
                    "a developer.",
                    2000,
                    "a creator.",
                    2000,
                    "a mentor.",
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-fg-muted max-w-md mx-auto lg:mx-0 leading-relaxed font-sans">
              I'm passionate about building scalable, high-impact products and
              empowering women in the tech community.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <a
              href="mailto:lilibenitezdev@gmail.com"
              className="group relative flex items-center gap-3 px-6 py-3 bg-transparent border border-accent-cyan/40 hover:border-accent-cyan rounded-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-cyan/5 group-hover:bg-accent-cyan/10 transition-colors" />
              <Mail
                className="text-accent-cyan group-hover:scale-110 transition-transform"
                size={18}
              />
              <span className="font-mono text-base text-fg group-hover:text-accent-cyan transition-colors">
                Say hi!
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
