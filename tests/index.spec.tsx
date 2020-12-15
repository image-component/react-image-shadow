/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ImageShadow from '../src';

describe('imageShadow', () => {
  const testSrc =
    'https://github.com/image-component/react-image-shadow/blob/main/image/red.png?raw=true';

  it('render', () => {
    let wrapper;

    act(() => {
      wrapper = mount(<ImageShadow src={testSrc} />);
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('className', () => {
    const wrapper = mount(<ImageShadow className="test-class" src={testSrc} />);
    expect(wrapper.find('.test-class').length).toBeTruthy();
  });

  it('shadowBlur', () => {
    const wrapper = mount(<ImageShadow shadowBlur={10} src={testSrc} />);
    const node = wrapper.find('.react-image-shadow-card');
    expect(node.prop('style')?.filter).toEqual('blur(10px)');
  });

  it('shadowHover', () => {
    const wrapper = mount(<ImageShadow shadowHover src={testSrc} />);
    expect(wrapper.find('.react-image-shadow-hover').length).toBeTruthy();
  });

  it('shadowRadius', () => {
    const wrapper = mount(<ImageShadow shadowRadius={20} src={testSrc} />);
    const node = wrapper.find('.react-image-shadow-img');
    expect(node.prop('style')?.borderRadius).toEqual('20px');
  });

  it('style', () => {
    const wrapper = mount(
      <ImageShadow
        style={{
          color: 'red',
        }}
        src={testSrc}
      />,
    );
    const node = wrapper.find('.react-image-shadow');
    expect(node.prop('style')?.color).toEqual('red');
  });

  it('width', () => {
    const wrapper = mount(<ImageShadow width={100} src={testSrc} />);
    const node = wrapper.find('.react-image-shadow-img');
    expect(node.prop('width')).toEqual(100);
  });

  it('alt', () => {
    const wrapper = mount(<ImageShadow alt="alt" src={testSrc} />);
    const node = wrapper.find('.react-image-shadow-img');
    expect(node.prop('alt')).toEqual('alt');
  });
});
