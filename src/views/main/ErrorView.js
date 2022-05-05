import { useEffect } from 'react';
import { ErrorData } from '../../helper/JumbotronData';
import { ErrorPageTitle } from '../../helper/PageTitleData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import AnimatedPage from '../../components/Animations/AnimatedPage';
const ErrorView = () => {
  const jumboImage = ErrorData.image;
  const jumboTitle = ErrorData.title;
  const jumboDescription = ErrorData.description;

  useEffect(() => {
    document.title = ErrorPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='error'>
        <Jumbotron
          image={jumboImage}
          title={jumboTitle}
          description={jumboDescription}
        />
      </div>
    </AnimatedPage>
  );
};

export default ErrorView;
