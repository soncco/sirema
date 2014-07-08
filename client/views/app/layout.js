Template.layout.rendered = function() {
  $('#login-sign-in-link').text('Login ▾');
  $('.login-close-text').text('Cerrar');
  $('#login-username-or-email-label').text('Nombre de usuario o e-mail');
  $('#login-password-label').text('Contraseña');
  $('#signup-link').text('Crear una contraseña');
  $('#forgot-password-link').text('Olvidaste tu contraseña?');
  $('#login-buttons-forgot-password').text('Recuperar');
  $('#back-to-login-link').text('Login');
  $('#login-username-label').text('Usuario');
  $('#login-buttons-open-change-password').text('Cambiar contraseña');
  $('#login-buttons-logout').text('Salir');
  if ($('#login-buttons-password').text().indexOf('Entrar') != -1) {
    $('#login-buttons-password').text('Login');
  } else {
    $('#login-buttons-password').text('Crear contraseña');
  }
  $('.login-button').addClass('btn btn-warning');
  $('.login-button').removeClass('login-button login-button-form-submit');
  if ($('.message.error-message').text().indexOf('Username must be at least 3 characters long') != -1) {
    $('.message.error-message').text('El usuario debe tener al menos 3 caracteres');
  } else if ($('.message.error-message').text().indexOf('Incorrect password') != -1 || $('.message.error-message').text().indexOf('User not found') != -1) {
    $('.message.error-message').text('Usuario/Contraseña errada');
  }
  $('#login-old-password-label').text('Contaseña Actual');
  $('#login-buttons-do-change-password').text('Cambiar Contraseña');
  $('#reset-password-new-password-label').text('Nueva Contraseña');
  $('#login-buttons-reset-password-button').text('Cambiar');
  if ($('.message.info-message').text().indexOf('Email sent') != -1) $('.message.info-message').text('E-mail enviado');
  $('#just-verified-dismiss-button').parent().html('Email verificado <div class="btn btn-warning" id="just-verified-dismiss-button">Ocultar</div>');
};