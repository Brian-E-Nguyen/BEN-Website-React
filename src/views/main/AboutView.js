import { useEffect } from 'react';
import Backstory from '../../components/About/Backstory';
import Facts from '../../components/About/Facts';
import ImageGallery from '../../components/About/ImageGallery';
import Quote from '../../components/About/Quote';
import { AboutData } from '../../helper/JumbotronData';
import { AboutPageTitle } from '../../helper/PageTitleData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import AnimatedPage from '../../components/Animations/AnimatedPage';
const AboutView = () => {
  const jumboTitle = 'About Me';
  const jumboImage = AboutData.image;

  useEffect(() => {
    document.title = AboutPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='about'>
        <Jumbotron image={jumboImage} title={jumboTitle} />
        <Quote />
        <Facts />
        <Backstory />
        <ImageGallery />
      </div>
    </AnimatedPage>
  );
};

export default AboutView;
