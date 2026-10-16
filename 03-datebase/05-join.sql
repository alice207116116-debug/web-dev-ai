select id, name, plate from cars where id = 13; -- 차 정보
select car_id, service_date, item, memo from maintenance_records; -- 정비 이력

-- 테이블의 별칭을 부여하시는게 편함!
select c.id, name, plate, car_id, service_date, item, memo
from cars c
    join maintenance_records m on c.id = m.car_id; -- inner join (교집합, 공통으로 일치하는 값)

-- consultations + cars
select * 
from consultations s
    right join cars c on c.id = s.car_id; --  오른쪽 테이블 기준

select * 
from cars c
    left join consultations s on c.id = s.car_id; -- 왼쪽 테이블 기준

select * 
from cars c
    full join consultations s on c.id = s.car_id; -- 합집합(모든 데이터)
    
-- maintenance_schedules랑 cars 정보에서 plate, name, item, priority 조회
select plate, name, item, priority
from maintenance_schedules m
    join cars c on m.car_id = c.id;

-- cars, consultations, consultation_items 에서 
-- plate, contact, in_date, customer_request, work_details 조회 
select *
from cars car
    join consultations c on c.car_id = car.id
    join consultation_items ci on ci.consultation_id = c.id;

select * from cars;
select * from maintenance_records;