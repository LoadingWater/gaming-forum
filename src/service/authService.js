export function makeAuthService({ httpService }) {
  return {
    login,
    signup
  };

  async function login(form) {
      const res = await httpService.post('/signin', form);
      return res;
  }

  async function signup(form) {
    try {
      const res = await httpService.post('/signup', form);
      return res;
    } catch (e) {
      throw new Error(e);
    }
  }
}
