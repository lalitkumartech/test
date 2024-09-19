import React from 'react'
import Header from '../Header'
import Banner from './landing-page/Banner'
import FeatureCard from './landing-page/FeatureCard'
import Courses from './landing-page/Courses'
import CourseList from './landing-page/CourseList'

export default function Layout() {
  return (
    <>
      <Header/>
      <Banner/>
      <FeatureCard/>
      <Courses/>
      <CourseList/>
    </>
  )
};
