import React from 'react'
import { Title } from '../About/AboutElement'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Wrapper,Links } from './ProjectsElements'

export const Projects = () => {
  return (
      <>
        <Title>Feature Projects</Title>
    <Wrapper>
        <ProjectCard/>
    </Wrapper>
    <Links><a href='/'>See All</a></Links>
    </>
  )
}
