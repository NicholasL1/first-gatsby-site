// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this website by following the gatsby documentation.</p>
      <StaticImage 
        src="../images/lebron.jpg" 
        alt='Lebron dunking a basketball'
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage