use H_HYOJUNG_VIETTEL

SELECT *
FROM 매출전표


--lấy tên bảng
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = '매출전표';


--lấy doanh thu theo ngày 
WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  일자 = @date
)
SELECT * 
FROM TblView 
WHERE  RowNum >= @next  AND RowNum <= @to 

-----------------
WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  일자 = '2024-08-07'
)
SELECT * 
FROM TblView 
WHERE  RowNum >= 1  AND RowNum <= 10 



--lấy doanh thu theo tháng 
WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  YEAR(일자) = 2024 AND MONTH(일자) = 8
)
SELECT * 
FROM TblView 
WHERE  RowNum >= 1  AND RowNum <= 1000 
----------------------
WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  YEAR(일자) = @year AND MONTH(일자) = @month 
)
SELECT * 
FROM TblView 
WHERE  RowNum >= @next  AND RowNum <= @to 

--lấy doanh thu theo tên sản phẩm
DECLARE @startDate DATE = '2024-08-05';
DECLARE @endDate DATE = '2024-09-05';
DECLARE @next int= 1;
DECLARE @to int = 100;

WITH TblView AS ( 
    SELECT 
    s.품명 , 
    SUM(m.매출금액) AS 매출금액, 
    SUM(m.매출수량) AS 매출수량,
	ROW_NUMBER() OVER (ORDER BY s.품명 asc) AS RowNum 
FROM 
    상품코드 s
JOIN 
    매출상품 m ON s.바코드 = m.바코드
WHERE 
    m.일자 BETWEEN @startDate AND @endDate
GROUP BY 
    s.품명
)
SELECT * 
FROM TblView 
WHERE  RowNum >= @next  AND RowNum <= @to








  