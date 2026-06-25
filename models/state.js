(function () {
  // Model: default health profile and app state.
  function createDefaultHealthProfile() {
    return {
      height: 170,
      weight: 65,
      bodyType: 'Normal',
      workingHours: 8,
      activityLevel: 'Medium',
    };
  }

  window.AppModels = {
    createDefaultHealthProfile: createDefaultHealthProfile,
    state: {
      currentScreen: 'login',
      user: null,
      healthProfile: createDefaultHealthProfile(),
      dietPlan: null,
      planStatus: 'Accepted',
      message: '',
    },
  };
})();
