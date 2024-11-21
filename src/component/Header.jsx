import { Heading } from "../component/foundations/Heading.jsx";
import { BodyText } from "../component/foundations/BodyText.jsx";
import SocialMedia from "../component/SocialMedia.jsx";

const Header = () => (
  <div className="relative px-4 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div className="max-w-2xl">
        <Heading level={1}>
        Dev Front, créateur de solutions élégantes et
        fonctionnelles.
        </Heading>
        <BodyText variant="paragraph" className="mt-6 ">
          Je suis Thomas Farre, un développeur web front-end, passionné par la
          création d'interfaces utilisateur intuitives et esthétiques. Avec une
          approche axée sur le design rationnel et minimaliste, j'exploite des
          outils modernes comme TailwindCSS, React, Vue et Storybook pour
          construire des expériences web engageantes et performantes. Explorons
          comment nous pouvons collaborer pour réaliser vos projets ambitieux !
        </BodyText>
        <SocialMedia />
      </div>
    </div>
  </div>
);

export default Header;
