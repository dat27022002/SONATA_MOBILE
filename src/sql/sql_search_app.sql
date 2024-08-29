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



WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  일자 = '2024-08-07'
)
SELECT * 
FROM TblView 
WHERE  RowNum >= 1  AND RowNum <= 10 



--lấy doanh thu then tháng 
WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  YEAR(일자) = 2024 AND MONTH(일자) = 8
)
SELECT * 
FROM TblView 
WHERE  RowNum >= 1  AND RowNum <= 1000 



WITH TblView AS ( 
    SELECT *, 
           ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 매출전표 
	WHERE  YEAR(일자) = @year AND MONTH(일자) = @month
)
SELECT * 
FROM TblView 
WHERE  RowNum >= 1  AND RowNum <= 1000 



  