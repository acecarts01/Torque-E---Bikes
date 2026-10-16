'use client'
// Pages that still use the motion library import this once: people who ask their system for reduced motion get no animations.
import { MotionGlobalConfig } from 'motion/react'

if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
  MotionGlobalConfig.skipAnimations = true
}
