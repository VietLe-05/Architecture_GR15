(function () {
  // Component layer: reusable UI helpers.
  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function card(title, subtitle, content, narrow) {
    return [
      '<section class="card ' + (narrow ? 'card--narrow' : '') + '">',
      '<div class="card__header">',
      '<h2>' + escapeHtml(title) + '</h2>',
      subtitle ? '<p>' + escapeHtml(subtitle) + '</p>' : '',
      '</div>',
      content,
      '</section>',
    ].join('');
  }

  function alert(message, type) {
    if (!message) {
      return '';
    }

    return '<div class="alert alert--' + (type || 'info') + '">' + escapeHtml(message) + '</div>';
  }

  function inputField(config) {
    var id = config.id;
    var unitClass = config.unit ? ' field--unit' : '';
    var value = config.value || '';
    var min = config.min ? ' min="' + escapeHtml(config.min) + '"' : '';
    var step = config.step ? ' step="' + escapeHtml(config.step) + '"' : '';
    var unit = config.unit ? '<span class="field__unit">' + escapeHtml(config.unit) + '</span>' : '';

    return [
      '<label class="field' + unitClass + '" for="' + escapeHtml(id) + '">',
      '<span class="field__label">' + escapeHtml(config.label) + '</span>',
      '<span class="field__control">',
      '<input class="input" id="' + escapeHtml(id) + '" name="' + escapeHtml(config.name || id) + '"',
      ' type="' + escapeHtml(config.type || 'text') + '"',
      ' value="' + escapeHtml(value) + '"',
      ' placeholder="' + escapeHtml(config.placeholder || '') + '"' + min + step + ' />',
      unit,
      '</span>',
      '</label>',
    ].join('');
  }

  function selectField(config) {
    var selectedValue = config.value || '';
    var options = config.options
      .map(function (option) {
        var selected = option === selectedValue ? ' selected' : '';
        return '<option value="' + escapeHtml(option) + '"' + selected + '>' + escapeHtml(option) + '</option>';
      })
      .join('');

    return [
      '<label class="field" for="' + escapeHtml(config.id) + '">',
      '<span class="field__label">' + escapeHtml(config.label) + '</span>',
      '<select class="select" id="' + escapeHtml(config.id) + '" name="' + escapeHtml(config.name || config.id) + '">',
      options,
      '</select>',
      '</label>',
    ].join('');
  }

  function textareaField(config) {
    return [
      '<label class="field" for="' + escapeHtml(config.id) + '">',
      '<span class="field__label">' + escapeHtml(config.label) + '</span>',
      '<textarea class="textarea" id="' + escapeHtml(config.id) + '"',
      ' name="' + escapeHtml(config.name || config.id) + '"',
      ' placeholder="' + escapeHtml(config.placeholder || '') + '">',
      escapeHtml(config.value || ''),
      '</textarea>',
      '</label>',
    ].join('');
  }

  function button(label, action, variant, type, full) {
    return [
      '<button class="button button--' + (variant || 'primary') + (full ? ' button--full' : '') + '"',
      ' type="' + escapeHtml(type || 'button') + '"',
      ' data-action="' + escapeHtml(action || '') + '">',
      escapeHtml(label),
      '</button>',
    ].join('');
  }

  window.AppComponents = {
    alert: alert,
    button: button,
    card: card,
    escapeHtml: escapeHtml,
    inputField: inputField,
    selectField: selectField,
    textareaField: textareaField,
  };
})();
