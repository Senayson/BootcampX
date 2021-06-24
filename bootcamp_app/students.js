const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'Dmoi10mots',
  host: 'localhost',
  database: 'bootcampx'
});
let args = process.argv.slice(2);

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${args[0]}%'
LIMIT ${args[1]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});