(function () {
  // View: Health Input Screen. No calculation logic here.
  function render(profile, message) {
    var ui = window.AppComponents;
    var models = window.AppModels;
    var content = [
      '<form class="form-stack" data-form="health">',
      ui.alert(message, 'error'),
      '<div class="health-grid">',
      ui.inputField({
        id: 'height',
        label: 'Height',
        type: 'number',
        min: '1',
        step: '0.1',
        value: profile.height,
        unit: 'cm',
      }),
      ui.inputField({
        id: 'weight',
        label: 'Weight',
        type: 'number',
        min: '1',
        step: '0.1',
        value: profile.weight,
        unit: 'kg',
      }),
      ui.selectField({
        id: 'bodyType',
        label: 'Body Type',
        value: profile.bodyType,
        options: models.bodyTypes,
      }),
      ui.inputField({
        id: 'workingHours',
        label: 'Working Hours',
        type: 'number',
        min: '1',
        step: '1',
        value: profile.workingHours,
        unit: 'hours',
      }),
      ui.selectField({
        id: 'activityLevel',
        label: 'Activity Level',
        value: profile.activityLevel,
        options: models.activityLevels,
      }),
      '</div>',
      '<div class="button-row">',
      ui.button('Calculate Diet Plan', '', 'primary', 'submit', true),
      ui.button('Reset', 'reset-health', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Health Input Screen', 'Enter health information for BMI and calories.', content, false);
  }

  window.HealthInputView = {
    render: render,
  };
})();
