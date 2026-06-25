(function () {
  // Main application: navigation and event binding between View and Controller.
  var state = window.AppModels.state;
  var app = document.getElementById('app');
  var screenChip = document.getElementById('screenChip');

  var screenLabels = {
    login: 'Login',
    register: 'Register',
    health: 'Health Input',
    diet: 'Diet Plan',
    result: 'Result',
  };

  function setScreen(screen, message) {
    state.currentScreen = screen;
    state.message = message || '';
    render();
  }

  function readHealthProfile(form) {
    return {
      height: Number(form.height.value),
      weight: Number(form.weight.value),
      bodyType: form.bodyType.value,
      workingHours: Number(form.workingHours.value),
      activityLevel: form.activityLevel.value,
    };
  }

  function render() {
    screenChip.textContent = screenLabels[state.currentScreen];

    if (state.currentScreen === 'login') {
      app.innerHTML = window.LoginView.render(state.message);
      return;
    }

    if (state.currentScreen === 'register') {
      app.innerHTML = window.RegisterView.render(state.message);
      return;
    }

    if (state.currentScreen === 'health') {
      app.innerHTML = window.HealthInputView.render(state.healthProfile, state.message);
      return;
    }

    if (state.currentScreen === 'diet') {
      app.innerHTML = window.DietPlanView.render(state.dietPlan, state.planStatus, state.message);
      return;
    }

    app.innerHTML = window.ResultView.render(state.dietPlan, state.planStatus, state.message);
  }

  function handleLogin(form) {
    var result = window.AuthController.login(form.username.value, form.password.value);

    if (!result.ok) {
      setScreen('login', result.message);
      return;
    }

    setScreen('health');
  }

  function handleRegister(form) {
    var result = window.AuthController.register(form.name.value, form.email.value, form.password.value);

    if (!result.ok) {
      setScreen('register', result.message);
      return;
    }

    state.user = result.user;
    setScreen('login', result.message);
  }

  function handleHealth(form) {
    var profile = readHealthProfile(form);
    var validationMessage = window.HealthController.validateProfile(profile);

    if (validationMessage) {
      state.healthProfile = profile;
      setScreen('health', validationMessage);
      return;
    }

    state.healthProfile = profile;
    state.dietPlan = window.DietController.createDietPlan(profile, 0);
    state.planStatus = 'Accepted';
    setScreen('diet');
  }

  function handleFeedback(form) {
    var message = window.FeedbackController.submitFeedback(form.feedback.value);
    setScreen('result', message);
  }

  app.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    var formName = form.dataset.form;

    if (formName === 'login') {
      handleLogin(form);
    }

    if (formName === 'register') {
      handleRegister(form);
    }

    if (formName === 'health') {
      handleHealth(form);
    }

    if (formName === 'feedback') {
      handleFeedback(form);
    }
  });

  app.addEventListener('click', function (event) {
    var button = event.target.closest('[data-action]');

    if (!button) {
      return;
    }

    var action = button.dataset.action;

    if (action === 'go-register') {
      setScreen('register');
    }

    if (action === 'back-login') {
      setScreen('login');
    }

    if (action === 'reset-health') {
      state.healthProfile = window.AppModels.createDefaultHealthProfile();
      setScreen('health');
    }

    if (action === 'back-health') {
      setScreen('health');
    }

    if (action === 'accept-plan') {
      setScreen('result', 'Diet plan accepted successfully.');
    }

    if (action === 'reject-plan') {
      state.dietPlan = window.DietController.createAlternativePlan(state.healthProfile, state.dietPlan);
      state.planStatus = 'Alternative';
      setScreen('diet', 'Alternative diet plan generated.');
    }

    if (action === 'new-plan') {
      state.healthProfile = window.AppModels.createDefaultHealthProfile();
      state.dietPlan = null;
      state.planStatus = 'Accepted';
      setScreen('health');
    }
  });

  // Initialize app by fetching data first
  window.AppModels.fetchMealPlans().then(function () {
    render();
  });
})();
