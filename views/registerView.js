(function () {
  // View: Register Screen. No business logic here.
  function render(message) {
    var ui = window.AppComponents;
    var content = [
      '<form class="form-stack" data-form="register">',
      ui.alert(message, 'error'),
      ui.inputField({
        id: 'name',
        label: 'Tên',
        placeholder: 'Nguyen Van A',
      }),
      ui.inputField({
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'student@example.com',
      }),
      ui.inputField({
        id: 'registerPassword',
        name: 'password',
        label: 'Mật khẩu',
        type: 'password',
        placeholder: 'Tạo mật khẩu',
      }),
      '<div class="button-row">',
      ui.button('Đăng ký', '', 'primary', 'submit', true),
      ui.button('Quay lại Đăng nhập', 'back-login', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Màn hình đăng ký', 'Tạo tài khoản thử nghiệm.', content, true);
  }

  window.RegisterView = {
    render: render,
  };
})();
