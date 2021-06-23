SELECT teachers.name as teacher, students.name as student,
assignments.name, completed_at - started_at AS duration
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
JOIN assignments ON assignments.id = assignment_submissions.assignment_id
ORDER BY duration;
