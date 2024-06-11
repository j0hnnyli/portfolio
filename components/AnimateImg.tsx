'use client'
import { motion, useScroll, useInView, useAnimation} from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
}

const AnimateImg = ({ children } : Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animate = useAnimation()

  useEffect(() => {
    if(isInView){
      animate.start('visible')
    }else{
      animate.start('leave')
    }
  }, [isInView, animate])

  const variant = {
    hidden : {x : '+100vw', rotate: 180},
    visible : {x: 0, rotate: 0},
    leave : {x: '-100vw', rotate: -180}
  }



  return (
      <motion.div
        ref={ref}
        variants={variant}
        initial='hidden'
        animate='visible'
        exit='exit'
        transition={{duration: .5}}
      >
        {children}
      </motion.div>
  )
}

export default AnimateImg