(function () {
  // View: Login Screen. No business logic here.
  function render(message) {
    var ui = window.AppComponents;
    var typeLower = message ? message.toLowerCase() : '';
    var alertType = typeLower.indexOf('success') >= 0 || typeLower.indexOf('thành công') >= 0 ? 'success' : 'error';
    var content = [
      '<form class="form-stack" data-form="login">',
      ui.alert(message, alertType),
      ui.inputField({
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'student@example.com',
      }),
      ui.inputField({
        id: 'password',
        label: 'Mật khẩu',
        type: 'password',
        placeholder: 'Nhập mật khẩu',
      }),
      '<div class="button-row">',
      ui.button('Đăng nhập', '', 'primary', 'submit', true),
      ui.button('Chuyển sang Đăng ký', 'go-register', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Màn hình đăng nhập', 'Nhập thông tin tài khoản để tiếp tục.', content, true);
  }

  window.LoginView = {
    render: render,
  };
})();
