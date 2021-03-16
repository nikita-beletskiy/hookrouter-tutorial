import { A } from 'hookrouter';
import { useRoutes } from 'hookrouter';
import AboutMe from '../components/AboutMe';
import AboutMyCat from '../components/AboutMyCat';
import AboutMyDog from '../components/AboutMyDog';
import Page from '../components/Page';

const routes = {
  '/me': () => <AboutMe />,
  '/cat': () => <AboutMyCat />,
  '/dog': () => <AboutMyDog />
};

const About = () => {
  const match = useRoutes(routes);

  return (
    <Page title='About'>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <span style={{ marginRight: '20px' }}>
          <A href='/about/me'>About Me</A>
        </span>
        <span style={{ marginRight: '20px' }}>
          <A href='/about/cat'>About My Cat</A>
        </span>
        <span style={{ marginRight: '20px' }}>
          <A href='/about/dog'>About My Dog</A>
        </span>
      </div>
      {match || <div>Basic About Page</div>}
    </Page>
  );
};

export default About;
