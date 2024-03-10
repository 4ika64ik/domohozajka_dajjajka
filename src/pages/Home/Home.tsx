import {FC} from "react";
import {TheHeader} from "components/Header/TheHeader.tsx";
import {OurFeatures} from "components/Sections/Features/OurFeatures.tsx";
import {BestPlatform} from "components/Sections/BestPlatfrom/BestPlatform.tsx";
import {TheFooter} from "components/Footer/Footer.tsx";
import Reviews from "components/Sections/Reviews/Reviews.tsx";

export const Home: FC = () => {
  return (
    <>
      <header>
        <TheHeader />
      </header>
      <main>
        <OurFeatures />
        <BestPlatform />
        <Reviews />
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  )
}