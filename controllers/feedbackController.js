(function () {
  // Controller: handles final feedback submission.
  function submitFeedback(feedback) {
    if (!feedback.trim()) {
      return 'Feedback submitted with no extra note.';
    }

    return 'Feedback submitted successfully.';
  }

  window.FeedbackController = {
    submitFeedback: submitFeedback,
  };
})();
