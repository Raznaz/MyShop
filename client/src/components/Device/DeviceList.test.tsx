import DeviceList from './DeviceList';
import { shallow } from 'enzyme';
import DeviceItem from './DeviceItem';

describe('Device List', () => {
  it('should work', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<DeviceList />);
    });

    it('should render DeviceItem', () => {
      expect(wrapper.find(DeviceItem)).toHaveLength(1);
    });
  });
});
