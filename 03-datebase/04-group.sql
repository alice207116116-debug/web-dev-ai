-- 집계 함수
select count(*) as 전체, count(car_type) as "차종 있음" from cars;
select 
   SUM(cost) as 총매출, round(AVG(cost)) as 평균,
   min(cost) as 최저, MAX(cost) as 최고,
   MIN(service_date) as 첫정비, MAX(service_date) as 최근정비
from maintenance_records; 

select * from cars;