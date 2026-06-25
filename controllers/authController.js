(function () {
  // Controller: handles login/register validation.
  function login(username, password) {
    if (!username.trim() || !password.trim()) {
      return {
        ok: false,
        message: 'Please enter username and password.',
      };
    }

    return {
      ok: true,
      message: '',
    };
  }

  function register(name, email, password) {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return {
        ok: false,
        message: 'Please fill in name, email, and password.',
      };
    }

    return {
      ok: true,
      user: {
        name: name.trim(),
        email: email.trim(),
      },
      message: 'Register success. Please login.',
    };
  }

  window.AuthController = {
    login: login,
    register: register,
  };
})();
