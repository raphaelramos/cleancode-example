// Bad
// Use 2 or fewer ideally arguments
// The function must have single responsibility

function createUserAndSendEmail(name, city, jobId, active) {
    console.log(name)
    console.log('email sent')
}
createUserAndSendEmail('Raphael', 'Uberlândia', 5, true);

// Good

function createUser({name, city, jobId, active}) {
    console.log(name)
}
function sendEmail() {
    console.log('email sent')
}
createUser({
    name: 'Raphael',
    city: 'Uberlândia',
    jobId: 5,
    active: true
});
sendEmail();