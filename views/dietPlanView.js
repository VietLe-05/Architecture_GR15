(function () {
  // View: Diet Plan Screen. No diet generation logic here.
  function render(plan, status, message) {
    var ui = window.AppComponents;

    if (!plan) {
      return ui.card('Màn hình kế hoạch', '', ui.alert('Chưa có kế hoạch dinh dưỡng.', 'error'), true);
    }

    var content = [
      '<div class="content-stack">',
      ui.alert(message, 'info'),
      '<div class="metrics">',
      '<div class="metric"><span class="label-small">BMI</span><strong>' + ui.escapeHtml(plan.bmi) + '</strong></div>',
      '<div class="metric"><span class="label-small">Tình trạng</span><strong>' + ui.escapeHtml(plan.bmiStatus) + '</strong></div>',
      '<div class="metric"><span class="label-small">Calo</span><strong>' + ui.escapeHtml(plan.calories) + ' kcal</strong></div>',
      '</div>',
      '<div class="meal-list">',
      '<div class="meal-row"><span class="label-small">Bữa sáng</span><p>' + ui.escapeHtml(plan.breakfast) + '</p></div>',
      '<div class="meal-row"><span class="label-small">Bữa trưa</span><p>' + ui.escapeHtml(plan.lunch) + '</p></div>',
      '<div class="meal-row"><span class="label-small">Bữa tối</span><p>' + ui.escapeHtml(plan.dinner) + '</p></div>',
      '</div>',
      ui.alert(plan.note, 'success'),
      '<div class="status-line">Trạng thái hiện tại: <strong>' + ui.escapeHtml(status) + '</strong></div>',
      '<div class="button-row">',
      ui.button('Chấp nhận', 'accept-plan', 'primary', 'button', true),
      ui.button('Tạo lại kế hoạch', 'reject-plan', 'secondary', 'button', true),
      '</div>',
      ui.button('Quay lại', 'back-health', 'ghost', 'button', true),
      '</div>',
    ].join('');

    return ui.card(plan.name, 'Kế hoạch dinh dưỡng đề xuất từ dữ liệu mẫu.', content, false);
  }

  window.DietPlanView = {
    render: render,
  };
})();
