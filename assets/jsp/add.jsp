<!-- Step 0: import library -->
<%@ page import = "java.sql.*, java.util.*"%>
<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<html>
<head>
<title>add</title>
</head>
<body>
<%
try {
//Step 1: 載入資料庫驅動程式 
    Class.forName("com.mysql.jdbc.Driver");
    try {
//Step 2: 建立連線 	
        String url="jdbc:mysql://localhost/?serverTimezone=UTC";
        String sql="";
        Connection con=DriverManager.getConnection(url,"root","1234");
        if(con.isClosed())
           out.println("連線建立失敗");
        else {
//Step 3: 選擇資料庫   
           sql="use members";
           con.createStatement().execute(sql);
		   request.setCharacterEncoding("UTF-8");  
           String new_name=request.getParameter("name");
           String new_id=request.getParameter("id");
		   String new_pwd=request.getParameter("pwd");
		   String new_phone_number=request.getParameter("phone_number");
		   String new_e_mail=request.getParameter("e_mail");
		   String new_address=request.getParameter("address");
           java.sql.Date new_date=new java.sql.Date(System.currentTimeMillis());
//Step 4: 執行 SQL 指令	
           sql="INSERT members (`name`, `id`, `pwd`, `phone_number`, `e-mail`, `address`) ";
           sql+="VALUES ('" + new_name + "', ";
           sql+="'"+new_id+"\', ";
           sql+="'"+new_pwd+"', ";
           sql+="'"+new_phone_number+"', ";   
           sql+="'"+new_e_mail+"', ";
           sql+="'"+new_address+"')"; 		   

           con.createStatement().execute(sql);
//Step 6: 關閉連線
           con.close();
//Step 5: 顯示結果 
          //直接顯示最新的資料
          out.print("註冊成功!! 請<a href='commoditiylist.jsp'>按此</a>回會員頁面!!");
       }
    }
    catch (SQLException sExec) {
           out.println("格式錯誤!! 請<a href='commoditiylist.jsp'>按此</a>回重新註冊!!");
    }
}
catch (ClassNotFoundException err) {
   out.println("class錯誤"+err.toString());
}
%>
</body>
</html>