import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledBigLogo = styled(motion.h1)`
  padding-top: ${({ theme }) => theme.spacing[20]};
  padding-bottom: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  /* font-size: 1rem; */
`

export const BigLogoWrapper = styled(motion.div)`
  max-width: 1800px;
  margin: auto;
/* background-color: ${({ theme }) => theme.color.black}; */
  /* height: 50vh; */
`
