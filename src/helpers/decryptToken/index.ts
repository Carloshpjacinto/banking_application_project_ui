type DecryptToken = {
  id: number;
  name: string;
  CPF: string;
  exp: number;
};

export const decryptToken = (accessToken: string): DecryptToken => {
  const userData = accessToken.split('.')[1];
  const userPayloadString = Buffer.from(userData, 'base64').toString();
  const { sub, name, exp, CPF } = JSON.parse(userPayloadString);
  return { id: sub, name, exp, CPF };
};
