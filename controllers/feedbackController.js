(function () {
  // Controller: handles final feedback submission.
  function submitFeedback(feedback) {
    if (!feedback.trim()) {
      return 'Đã gửi phản hồi mà không có ghi chú thêm.';
    }

    return 'Phản hồi đã được gửi thành công.';
  }

  window.FeedbackController = {
    submitFeedback: submitFeedback,
  };
})();
