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
        label: 'Chiều cao',
        type: 'number',
        min: '1',
        step: '0.1',
        value: profile.height,
        unit: 'cm',
      }),
      ui.inputField({
        id: 'weight',
        label: 'Cân nặng',
        type: 'number',
        min: '1',
        step: '0.1',
        value: profile.weight,
        unit: 'kg',
      }),
      ui.selectField({
        id: 'bodyType',
        label: 'Kiểu cơ thể',
        value: profile.bodyType,
        options: models.bodyTypes,
      }),
      ui.inputField({
        id: 'workingHours',
        label: 'Giờ làm việc',
        type: 'number',
        min: '1',
        step: '1',
        value: profile.workingHours,
        unit: 'giờ',
      }),
      ui.selectField({
        id: 'activityLevel',
        label: 'Mức độ vận động',
        value: profile.activityLevel,
        options: models.activityLevels,
      }),
      '</div>',
      '<div class="button-row">',
      ui.button('Tính kế hoạch dinh dưỡng', '', 'primary', 'submit', true),
      ui.button('Đặt lại', 'reset-health', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Màn hình sức khỏe', 'Nhập thông tin sức khỏe để tính BMI và calo.', content, false);
  }

  window.HealthInputView = {
    render: render,
  };
})();
