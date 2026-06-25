(function () {
  // View: Result / Feedback Screen. No feedback logic here.
  function render(plan, status, message) {
    var ui = window.AppComponents;

    if (!plan) {
      return ui.card('Màn hình kết quả', '', ui.alert('Không tìm thấy kế hoạch dinh dưỡng đã chọn.', 'error'), true);
    }

    var summary = plan.name + ': ' + plan.breakfast + '; ' + plan.lunch + '; ' + plan.dinner + '.';
    var content = [
      '<form class="form-stack" data-form="feedback">',
      ui.alert(message, message ? 'success' : 'info'),
      '<div class="summary-box">',
      '<span class="label-small">Kế hoạch đã chọn</span>',
      '<p>' + ui.escapeHtml(summary) + '</p>',
      '</div>',
      '<div class="summary-box">',
      '<span class="label-small">Trạng thái</span>',
      '<p><strong>' + ui.escapeHtml(status) + '</strong></p>',
      '</div>',
      ui.textareaField({
        id: 'feedback',
        label: 'Phản hồi',
        placeholder: 'Viết phản hồi của bạn ở đây',
      }),
      '<div class="button-row">',
      ui.button('Gửi phản hồi', '', 'primary', 'submit', true),
      ui.button('Tạo kế hoạch mới', 'new-plan', 'secondary', 'button', true),
      '</div>',
      '</form>',
    ].join('');

    return ui.card('Màn hình kết quả / phản hồi', 'Kết quả cuối cùng sau khi chọn kế hoạch.', content, false);
  }

  window.ResultView = {
    render: render,
  };
})();
