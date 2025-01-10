class AuthService {
  
  // Check if the user is logged in by retrieving the token from localStorage
  loggedIn() {
    const token = this.getToken();
    this.isTokenExpired()
    return token;
  }

  isTokenExpired() {
    // TODO: return a value that indicates if the token is expired
    const savedAuth = localStorage.getItem("auth")
    let tokenExpired=true
    if (savedAuth) {
      const tokenPayload = JSON.parse(window.atob(savedAuth.split(".")[1]))
      console.log(tokenPayload)
      console.log(Math.floor(Date.now()/1000))
      tokenExpired=Math.floor(Date.now()/1000) > tokenPayload.exp
    }
    if (tokenExpired) {
      localStorage.removeItem("auth")
      // location.href="/login"
    }
  }

  // Retrieve the JWT token from localStorage
  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  // Store the JWT token in localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the JWT token from localStorage and redirect to the home page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// Export an instance of the AuthService class
export default new AuthService();
