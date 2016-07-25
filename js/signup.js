document.getElementById('btnSignup').addEventListener('click', function() {

  var input = {
    username: document.getElementById('username').value.toLowerCase().replace(' ', '_'),
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    avatar: document.getElementById('photo').value
  }

  fetchApi('POST', '/users', input, function(response, statusCode) {

    if (statusCode >= 200 && statusCode < 300) {
      saveToken(response.auth_token)
      redirect('timeline.html')
    }
    else if (statusCode === 422) {
      redirect('signin.html')
    }

  })

})
