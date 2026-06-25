(function () {
  // View: Login Screen. No business logic here.
  function render(message) {
    var ui = window.AppComponents;
    var alertType = message && message.toLowerCase().indexOf('success') >= 0 ? 'success' : 'error';
    var content = [
      '<form class="form-stack" data-form="login">',
      ui.alert(message, alertType),
      ui.inputField({
        id: 'username',
        label: 'Username',
        placeholder: 'student01',
      }),
      ui.inputField({
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
      }),
      '<div class="button-row">',
      ui.button('Login', '', 'primary', 'submit', true),
      ui.button('Go to Register', 'go-register', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Login Screen', 'Enter account information to continue.', content, true);
  }

  window.LoginView = {
    render: render,
  };
})();
