(function () {
  var STORAGE_KEY = 'ai-diet-users';

  function getUsers() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Unable to read users from storage:', error);
      return [];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Unable to save users to storage:', error);
    }
  }

  function findUserByEmail(email) {
    var users = getUsers();
    return users.find(function (user) {
      return user.email.toLowerCase() === email.trim().toLowerCase();
    });
  }

  function login(email, password) {
    if (!email.trim() || !password.trim()) {
      return {
        ok: false,
        message: 'Please enter email and password.',
      };
    }

    var user = findUserByEmail(email);
    if (!user) {
      return {
        ok: false,
        message: 'No registered account found for that email.',
      };
    }

    if (user.password !== password) {
      return {
        ok: false,
        message: 'Incorrect password. Please try again.',
      };
    }

    return {
      ok: true,
      user: {
        name: user.name,
        email: user.email,
      },
      message: 'Login successful. Welcome back.',
    };
  }

  function register(name, email, password) {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return {
        ok: false,
        message: 'Please fill in name, email, and password.',
      };
    }

    if (findUserByEmail(email)) {
      return {
        ok: false,
        message: 'This email is already registered. Please log in or use another email.',
      };
    }

    var users = getUsers();
    users.push({
      name: name.trim(),
      email: email.trim(),
      password: password,
    });
    saveUsers(users);

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
