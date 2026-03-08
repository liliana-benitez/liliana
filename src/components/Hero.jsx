import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Typewriter from "typewriter-effect"
import { Mail } from "lucide-react"

const PROPS_LIST = [1, 2, 3, 4, 5, 6]
const CIRCLE_RADIUS = 320

const Hero = () => {
  const [activeId, setActiveId] = useState(1)
  const avatarRef = useRef(null)
  const [dropTarget, setDropTarget] = useState(false)

  const handleDragEnd = (event, info, id) => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect()
      const { x, y } = info.point

      const isOver =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom

      if (isOver) {
        // Delay to allow snap-back to start before switching styles
        setTimeout(() => setActiveId(id), 100)
      }
    }
    setDropTarget(false)
  }

  const handleDrag = (event, info) => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect()
      const { x, y } = info.point
      const isOver =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      if (isOver !== dropTarget) setDropTarget(isOver)
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col xl:flex-row items-center justify-center px-6 lg:px-24 pt-24 pb-12 overflow-hidden gap-12"
    >
      <div className="flex-1 relative w-full max-w-[500px] aspect-square flex items-center justify-center">
        {/* Drop Zone Glow */}
        <AnimatePresence>
          {dropTarget && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-accent-purple blur-[120px] rounded-full z-0"
            />
          )}
        </AnimatePresence>

        {/* Center Avatar */}
        <div
          ref={avatarRef}
          className="relative z-10 w-[80%] aspect-square flex items-center justify-center pointer-events-none"
        >
          <AnimatePresence>
            <motion.img
              key={activeId}
              src={`/assets/about-me/${activeId}.png`}
              alt="Avatar"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

        {/* Floating Props */}
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
                  width: "96px",
                  height: "96px",
                  zIndex: 20
                }}
              >
                <motion.div
                  drag
                  dragSnapToOrigin={true}
                  dragMomentum={false}
                  onDrag={handleDrag}
                  onDragEnd={(e, info) => handleDragEnd(e, info, id)}
                  whileHover={{ scale: 1.1 }}
                  whileDrag={{ scale: 1.2, zIndex: 100 }}
                  className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
                >
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full rounded-3xl bg-bg-dark/60 border border-accent-purple/20 p-3 shadow-2xl backdrop-blur-md flex items-center justify-center group"
                  >
                    <img
                      src={`/assets/about-me/${id}-prop.png`}
                      alt={`Prop ${id}`}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
