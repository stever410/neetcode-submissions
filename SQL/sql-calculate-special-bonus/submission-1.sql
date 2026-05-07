-- Write your query below
select employee_id, 
    CASE 
        WHEN employee_id % 2 = 1 and name not like 'M%'
            THEN salary
        ELSE 0 
    END as bonus
from employees e
order by employee_id;