describe('Login Test', () => {
  it('should successfully log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://example.com/login');

    // Enter username
    cy.get('input[name="username"]').type('your-username');

    // Enter password
    cy.get('input[name="password"]').type('your-password');

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to the dashboard
    cy.url().should('include', '/dashboard');

    // Optionally, check if the dashboard contains specific elements
    cy.get('.welcome-message').should('contain', 'Welcome back');
  });
});
