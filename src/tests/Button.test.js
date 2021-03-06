import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should render the element button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should check if `clickHandler` is working', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button clickHandler={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
