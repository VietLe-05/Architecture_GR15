(function () {
  // View: Register Screen. No business logic here.
  function render(message) {
    var ui = window.AppComponents;
    var content = [
      '<form class="form-stack" data-form="register">',
      ui.alert(message, 'error'),
      ui.inputField({
        id: 'name',
        label: 'Name',
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
        label: 'Password',
        type: 'password',
        placeholder: 'Create password',
      }),
      '<div class="button-row">',
      ui.button('Register', '', 'primary', 'submit', true),
      ui.button('Back to Login', 'back-login', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Register Screen', 'Create a simple mock account.', content, true);
  }

  window.RegisterView = {
    render: render,
  };
})();
