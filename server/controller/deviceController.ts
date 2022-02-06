class DeviceController {
  async getDevice(req, res) {
    res.json({ id: 1, name: 'test name' });
  }
}

export default new DeviceController();
