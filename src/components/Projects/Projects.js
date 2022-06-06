import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Wrapper,H1,Links } from './ProjectsElements'

export const Projects = () => {
  return (
      <>
        <H1>Feature Projects</H1>
    <Wrapper>
        <ProjectCard/>
    </Wrapper>
    <Links><a href='/'>See All</a></Links>
    </>
  )
}
