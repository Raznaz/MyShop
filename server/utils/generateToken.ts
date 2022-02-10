import jwt from 'jsonwebtoken';

export const generateJwtToken = (id: number, email: string, role: string) => {
  const token = jwt.sign({ id, email, role }, process.env.SECRET_KEY);

  return token;
};
