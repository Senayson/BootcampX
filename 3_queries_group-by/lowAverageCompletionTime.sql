SELECT students.name, avg(assignment_submissions.duration) as suggested_averagetime, avg(assignments.duration) as average_time
FROM students
JOIN assignment_submissions ON students.id = student_id
JOIN assignments ON assignment_id = assignments.id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING avg(assignment_submissions.duration) > avg(assignments.duration)
ORDER BY suggested_averagetime;
