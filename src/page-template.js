const generateTeamleader = teamleaderArr => {
    return `
      <section class="my-3" id="teamleader">
        <h2 class="text-dark bg-primary p-2 text-center">Teamleader</h2>
        <div class="flex-row justify-center">
        ${teamleaderArr
        .map(({ employeeName, employeeID, employeeEmail, employeeRole, officeNumber }) => {
          return `
                  <div class="card w-75">
                      <div class="card-header flex-row justify-space-between">
                          <div><strong><i class="fas fa-chess-king"></i> ${employeeName}</strong> <span>(${employeeRole})</span></div>
                          <div class="text-right"><strong>ID: ${employeeID}</strong></div>
                      </div>
                      <div class="card-body text-center">
                          <div class="bg-primary round-corners"><strong>E-mail</strong></div>
                          <div class="m-2"><a href="mailto:${employeeEmail}">${employeeEmail}</a></div>
                          <div class="bg-primary round-corners mt-3"><strong>Office Location</strong></div>
                          <div class="m-2">${officeNumber}</div>
                      </div>
                  </div>`;
        })
      }
        </div>
      </section>
    `
  };
  
  const generateEmployee = employeeArr => {
    return `
      <section class="my-3" id="employee">
        <h2 class="text-dark bg-primary p-2 text-center">Employee</h2>
        <div class="flex-row justify-space-between">
        ${employeeArr
        .map(({ employeeName, employeeID, employeeEmail, employeeRole, gitHubUsername }) => {
          return `
                  <div class="card w-50">
                      <div class="card-header flex-row justify-space-between">
                          <div><strong><i class="fas fa-chess-knight"></i> ${employeeName}</strong> <span>(${employeeRole})</span></div>
                          <div class="text-right"><strong>ID: ${employeeID}</strong></div>
                      </div>
                      <div class="card-body text-center">
                          <div class="bg-primary round-corners"><strong>E-mail</strong></div>
                          <div class="m-2"><a href="mailto:${employeeEmail}">${employeeEmail}</a></div>
                          <div class="bg-primary round-corners mt-3"><strong>GitHub</strong></div>
                          <div class="m-2"><a href="https://github.com/${gitHubUsername}" target="_blank">${gitHubUsername}</a></div>
                      </div>
                  </div>
                  `;
        })
        .join('')}
        </div>
      </section>
    `;
  };
  
  
  const generateNewcomer = newcomerArr => {
    return `
      <section class="my-3" id="newcomer">
        <h2 class="text-dark bg-primary p-2 text-center">Newcomer</h2>
        <div class="flex-row justify-space-between">
        ${newcomerArr
        .map(({ employeeName, employeeID, employeeEmail, employeeRole, employeeSchool }) => {
          return `
                  <div class="card w-50">
                      <div class="card-header flex-row justify-space-between">
                          <div><strong><i class="fas fa-chess-pawn"></i> ${employeeName}</strong> <span>(${employeeRole})</span></div>
                          <div class="text-right"><strong>ID: ${employeeID}</strong></div>
                      </div>
                      <div class="card-body text-center">
                          <div class="bg-primary round-corners"><strong>E-mail</strong></div>
                          <div class="m-2"><a href="mailto:${employeeEmail}">${employeeEmail}</a></div>
                          <div class="bg-primary round-corners mt-3"><strong>School</strong></div>
                          <div class="m-2">${employeeSchool}</div>
                      </div>
                  </div>
                  `;
        })
        .join('')}
        </div>
      </section>
    `;
  };
  
  module.exports = teamMembers => {
    const teamleaders = [];
    const employees = [];
    const newcomers = [];
  
    // Seperate team members into seperate Arrays
    teamMembers.forEach(function (item) {
      if (item.employeeRole === "Employee") {
        employees.push(item);
      }
      else if (item.employeeRole === "Newcomer") {
        newcomers.push(item);
      }
      else {
        teamleaders.push(item);
      }
    });
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
      ${generateTeamleader(teamleaders)}
      ${generateEmployee(employees)}
      ${generateNewcomer(newcomers)}    
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Yasmein Yang</h3>
      </footer>
    </body>
    </html>
    `;
  }