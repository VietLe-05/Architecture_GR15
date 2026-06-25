(function () {
  // View: Result / Feedback Screen. No feedback logic here.
  function render(plan, status, message) {
    var ui = window.AppComponents;

    if (!plan) {
      return ui.card('Result Screen', '', ui.alert('No selected diet plan found.', 'error'), true);
    }

    var summary = plan.name + ': ' + plan.breakfast + '; ' + plan.lunch + '; ' + plan.dinner + '.';
    var content = [
      '<form class="form-stack" data-form="feedback">',
      ui.alert(message, message ? 'success' : 'info'),
      '<div class="summary-box">',
      '<span class="label-small">Diet plan selected</span>',
      '<p>' + ui.escapeHtml(summary) + '</p>',
      '</div>',
      '<div class="summary-box">',
      '<span class="label-small">Status</span>',
      '<p><strong>' + ui.escapeHtml(status) + '</strong></p>',
      '</div>',
      ui.textareaField({
        id: 'feedback',
        label: 'Feedback',
        placeholder: 'Write your feedback here',
      }),
      '<div class="button-row">',
      ui.button('Submit Feedback', '', 'primary', 'submit', true),
      ui.button('Create New Plan', 'new-plan', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Result / Feedback Screen', 'Final result after choosing a plan.', content, false);
  }

  window.ResultView = {
    render: render,
  };
})();
