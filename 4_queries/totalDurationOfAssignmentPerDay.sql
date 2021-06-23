SELECT DISTINCT day, count(assignments) AS number_of_assignments, SUM(assignments.duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;