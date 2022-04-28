import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from './Home';
import Quote from './Quote';
import Footer from '../components/Footer';

describe('Pages renders correctly', () => {
  it('Home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calculator page renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote page renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Footer renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
