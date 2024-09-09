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
DECLARE @storeName nvarchar(100)= 'HYOJUNG';

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
JOIN  
    점포코드 j ON m.점포코드 = j.점포코드 
WHERE  
    m.일자 BETWEEN @startDate AND @endDate 
	AND j.HOMEPAGE =@storeName
GROUP BY 
    s.품명 
)
SELECT *  
FROM TblView  
WHERE  RowNum >= @next  AND RowNum <= @to

GO

--lấy bill bị hủy
DECLARE @startDate DATE = '2024-08-05';
DECLARE @endDate DATE = '2024-09-07';
DECLARE @next int= 1;
DECLARE @to int = 100;
DECLARE @storeName nvarchar(100)= 'HYOJUNG';

WITH TblView AS ( 
SELECT  
	m.수정일 as modificatonDate,
    m.매출합계 as saleAmount, 
	m.매출수량 as quantity,
	s.품명 as itemName,
	j.HOMEPAGE as storeName,
	ROW_NUMBER() OVER (ORDER BY m.수정일 desc) AS RowNum  
FROM 
    상품코드 s 
JOIN  
    매출상품 m ON s.바코드 = m.바코드 
JOIN  
    점포코드 j ON m.점포코드 = j.점포코드 
WHERE  
    m.일자 BETWEEN @startDate AND @endDate 
	AND j.HOMEPAGE =@storeName
	AND m.매출합계 <0
)
SELECT *  
FROM TblView  
WHERE  RowNum >= @next  AND RowNum <= @to


GO

--lấy doanh thu theo khoảng thời gian ngày

DECLARE @startDate DATE = '2024-08-05';
DECLARE @endDate DATE = '2024-09-07';
DECLARE @next int= 1;
DECLARE @to int = 100;
DECLARE @storeName nvarchar(100)= 'HYOJUNG';

WITH TblView AS ( 
    SELECT s.점포코드 AS StoreCode1
      ,s.[점포구분]
      ,[거래형태]
      ,s.[상호] as 상호1
      ,[대표자]
      ,[대표자ID]
      ,[전화번호]
      ,[팩스번호]
      ,[EMAIL]
      ,[HOMEPAGE]
      ,[점포총면적]
      ,[매장면적]
      ,[주차대수]
      ,[종업원수]
      ,[은행명]
      ,[계좌번호]
      ,[예금주]
      ,[거래시작일]
      ,[거래종료일]
      ,[사업자번호1]
      ,[사업자번호2]
      ,[사업자번호3]
      ,[우편번호]
      ,[주소]
      ,[상세주소]
      ,[업태]
      ,[종목]
      ,[조회순]
      ,[거래등급]
      ,[BRAND_ID]
      ,[BRAND_NAME]
      ,[VIETTEL_ID]
      ,[VIETTEL_PW]
      ,[TEMPLATECODE]
      ,[INVOICESERIES]
	  ,m.[점포코드]as StoreCode2
      ,[일자]
      ,[포스번호]
      ,[전표번호]
      ,[전표구분]
      ,[사원코드]
      ,[시]
      ,[분]
      ,[총수량]
      ,[금액]
      ,[할인]
      ,[할인율]
      ,[소계할인]
      ,[소계할인율]
      ,[공급가액]
      ,[세액]
      ,[면세]
      ,[합계금액]
      ,[비고]
      ,[현금]
      ,[현금영수증]
      ,[신용카드]
      ,[포인트]
      ,[타사상품권]
      ,[자사상품권]
      ,[외상]
      ,[사용]
      ,[기타지불]
      ,[고객카드]
      ,[보너스점수]
      ,[보너스적용]
      ,[거래처코드]
      ,m.[상호] 
      ,[전잔액]
      ,[입금액]
      ,[총잔액]
      ,[계산서발행]
      ,[거래순번]
      ,[받은돈]
      ,[거스름]
      ,[등록자]
      ,[등록일]
      ,[수정자]
      ,[수정일]
      ,[upload]
      ,[bLock]
      ,[dLockDate]
      ,[INVOICE_NO]
      ,[TRANSACTION_ID]
      ,[RESERVATION_CODE]
      ,[QR_CODE]
      ,ROW_NUMBER() OVER (ORDER BY 일자 desc) AS RowNum 
    FROM 점포코드 s 
	 JOIN 
        매출전표 m ON s.점포코드 = m.점포코드
	WHERE  m.[일자] >=@startDate AND m.[일자] <=@endDate  AND s.상호 like @storeName)
SELECT * 
FROM TblView 
WHERE  RowNum >= @next  AND RowNum <= @to  

GO





  