(function () {
  // Model: default health profile and app state.
  function createDefaultHealthProfile() {
    return {
      height: 170,
      weight: 65,
      bodyType: 'Bình thường',
      workingHours: 8,
      activityLevel: 'Trung bình',
    };
  }

  window.AppModels = {
    createDefaultHealthProfile: createDefaultHealthProfile,
    state: {
      currentScreen: 'login',
      user: null,
      healthProfile: createDefaultHealthProfile(),
      dietPlan: null,
      planStatus: 'Đã chấp nhận',
      message: '',
    },
  };
})();
