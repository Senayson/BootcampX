const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'Dmoi10mots',
  host: 'localhost',
  database: 'bootcampx'
});
let args = process.argv.slice(2);
let cohortname = args[0];
let queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests)
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohortname}'
GROUP BY teacher, cohort
ORDER BY teacher`;

pool.query(queryString)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});