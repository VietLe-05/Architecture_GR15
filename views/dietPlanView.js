(function () {
  // View: Diet Plan Screen. No diet generation logic here.
  function render(plan, status, message) {
    var ui = window.AppComponents;

    if (!plan) {
      return ui.card('Diet Plan Screen', '', ui.alert('No diet plan found.', 'error'), true);
    }

    var content = [
      '<div class="content-stack">',
      ui.alert(message, 'info'),
      '<div class="metrics">',
      '<div class="metric"><span class="label-small">BMI</span><strong>' + ui.escapeHtml(plan.bmi) + '</strong></div>',
      '<div class="metric"><span class="label-small">Status</span><strong>' + ui.escapeHtml(plan.bmiStatus) + '</strong></div>',
      '<div class="metric"><span class="label-small">Calories</span><strong>' + ui.escapeHtml(plan.calories) + ' kcal</strong></div>',
      '</div>',
      '<div class="meal-list">',
      '<div class="meal-row"><span class="label-small">Breakfast</span><p>' + ui.escapeHtml(plan.breakfast) + '</p></div>',
      '<div class="meal-row"><span class="label-small">Lunch</span><p>' + ui.escapeHtml(plan.lunch) + '</p></div>',
      '<div class="meal-row"><span class="label-small">Dinner</span><p>' + ui.escapeHtml(plan.dinner) + '</p></div>',
      '</div>',
      ui.alert(plan.note, 'success'),
      '<div class="status-line">Current status: <strong>' + ui.escapeHtml(status) + '</strong></div>',
      '<div class="button-row">',
      ui.button('Accept Plan', 'accept-plan', 'primary', 'button', true),
      ui.button('Reject Plan', 'reject-plan', 'secondary', 'button', true),
      '</div>',
      ui.button('Back', 'back-health', 'ghost', 'button', true),
      '</div>',
    ].join('');

    return ui.card(plan.name, 'Suggested diet plan from mock data.', content, false);
  }

  window.DietPlanView = {
    render: render,
  };
})();
