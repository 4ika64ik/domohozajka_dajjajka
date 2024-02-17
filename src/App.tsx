import { TheHeader } from 'components/Header/TheHeader.tsx';
import { OurPartners } from 'components/Sections/Partners/OurPartners.tsx';
import { OurCourses } from 'components/Sections/Courses/OurCourses.tsx';
import { OurFeatures } from 'components/Sections/Features/OurFeatures.tsx';
import { BestPlatform } from 'components/Sections/BestPlatfrom/BestPlatform.tsx';
import { SupportSection } from 'components/Sections/Support/SupportSection.tsx';
import './App.css'

function App() {
  return (
    <>
     <header>
       <TheHeader />
     </header>
      <main>
        <OurPartners />
        <OurCourses />
        <OurFeatures />
        <BestPlatform />
        <SupportSection />
      </main>
    </>
  )
}

export default App
