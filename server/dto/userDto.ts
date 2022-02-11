export default class UserDto {
  id: number;
  email: string;
  role: string;
  isActivated: boolean;

  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.role = model.role;
    this.isActivated = model.isActivated;
  }
}
