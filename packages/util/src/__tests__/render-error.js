import { render } from 'enzyme';
import renderError from '../render-error';

describe('renderError', () => {
  it('renders', () => {
    const wrapper = render(renderError());
    expect(wrapper).toMatchSnapshot();
  });
});
