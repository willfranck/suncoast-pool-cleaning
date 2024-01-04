import { keyframes } from '@emotion/react'


export const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
