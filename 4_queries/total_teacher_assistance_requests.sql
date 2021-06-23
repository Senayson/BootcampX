SELECT teachers.name, count(assistance_requests) as total_assistance_requests
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;