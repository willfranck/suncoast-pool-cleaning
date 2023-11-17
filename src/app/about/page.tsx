import NavBar from '@components/navBar'
import aboutContent from '@data/content'


export default function AboutPage() {
  const aboutInfo1 = aboutContent.about.paragraph1
  const aboutInfo2 = aboutContent.about.paragraph2

  
  return (
    <main>
      <NavBar />
      <p>{aboutInfo1}</p>
      <p>{aboutInfo2}</p>
    </main>
  )
}
