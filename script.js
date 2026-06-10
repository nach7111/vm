document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the page from refreshing automatically
    event.preventDefault(); 
    
    // Grab the values the user typed in
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // A simple, temporary check for demonstration purposes
    if (username === "admin" && password === "X01013809") {
        alert("Sign-in successful! Welcome back.");
    } else {
        alert("Invalid username or password. Try 'admin' and 'admin'.");
    }
});
