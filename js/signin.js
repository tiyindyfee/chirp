document.getElementById('btnSignin').addEventListener('click', function() {
  signin()
})

document.getElementById('password').addEventListener('keypress', function(e) {
  if (e.charCode === 13) {
    signin()
  }
})

function signin() {
  var input = {
    username: document.getElementById('username').value.toLowerCase(),
    password: document.getElementById('password').value
  }

  fetchApi('POST', '/signin', input, function(response, statusCode) {

    if (statusCode >= 200 && statusCode < 300) {
      saveToken(response.auth_token)
      redirect('timeline.html')
    }
    else {
      alert(response.error)
    }

  })
}
