import { cypress } from 'cypress';

describe('Creating aStudy', () => {


  it('Displays the message in the list', () => {
    cypress.visit('http://localhost:3000/login');

    cypress.get('[data-testid="username"]')
      .type('ExternalDashboard.User1')

    cypress.get('[data-testid="password"]')
      .type('g^qnGBs%ra$1%6U')

    cypress.get('[data-testid="loginButton"]')
      .click();

    cypress.get('[data-testid="studies"]')
      .click();

    cypress.get('[data-testid="createStudy"]')
      .click();

  });
});
