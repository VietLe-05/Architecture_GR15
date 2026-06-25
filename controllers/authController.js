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
        message: 'Vui lòng nhập email và mật khẩu.',
      };
    }

    var user = findUserByEmail(email);
    if (!user) {
      return {
        ok: false,
        message: 'Không tìm thấy tài khoản đã đăng ký với email này.',
      };
    }

    if (user.password !== password) {
      return {
        ok: false,
        message: 'Mật khẩu không đúng. Vui lòng thử lại.',
      };
    }

    return {
      ok: true,
      user: {
        name: user.name,
        email: user.email,
      },
      message: 'Đăng nhập thành công. Chào mừng bạn trở lại.',
    };
  }

  function register(name, email, password) {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return {
        ok: false,
        message: 'Vui lòng nhập đầy đủ tên, email và mật khẩu.',
      };
    }

    if (findUserByEmail(email)) {
      return {
        ok: false,
        message: 'Email này đã được đăng ký. Vui lòng đăng nhập hoặc dùng email khác.',
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
      message: 'Đăng ký thành công. Vui lòng đăng nhập.',
    };
  }

  window.AuthController = {
    login: login,
    register: register,
  };
})();
