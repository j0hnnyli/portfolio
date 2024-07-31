'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView} from 'framer-motion'

type Props = {
  children: ReactNode,
}

const AnimateVisible = ({ children } : Props) => {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true } )
  const animate = useAnimation()

  const variant = {
    hidden: {scale:0 , opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5, ease: 'easeInOut',
      }
    }
  }

  useEffect(() => {
    if(isInview){
      animate.start('visible')
    }
  }, [animate, isInview])

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial='hidden'
      animate={animate}
    >
      {children}
    </motion.div>
  )
}

export default AnimateVisible