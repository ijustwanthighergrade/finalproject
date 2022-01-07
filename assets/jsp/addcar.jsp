<%@ page import = "java.sql.*, java.util.*"%>
<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<html>
<head>
<title>add</title>
</head>
<body>
<%
	Class.forName("com.mysql.jdbc.Driver");
	String url="jdbc:mysql://localhost/?serverTimezone=UTC";
	Connection con=DriverManager.getConnection(url,"root","1234");
	String sql="use `demo`";
	con.createStatement().execute(sql);
	
           String productid=request.getParameter("productid");
		   String number=request.getParameter("number");
		   sql="select * from product where id="+productid;
		   ResultSet rs=con.createStatement().executeQuery(sql);
	       rs.next(); 
           String name=rs.getString(8);
           String src=rs.getString(6);
		   String money=rs.getString(7);
           con.close();
	
//Step 4: 執行 SQL 指令	
           Class.forName("com.mysql.jdbc.Driver");
		   String url1="jdbc:mysql://localhost/?serverTimezone=UTC";
           String sql1="";
           Connection con1=DriverManager.getConnection(url1,"root","1234");
		   sql1="USE `car`";
           con1.createStatement().execute(sql1);
		   sql1="SELECT * FROM `car`";
           sql1="INSERT car (`id`, `name`, `number`, `money`, `src`) ";
           sql1+="VALUES ('" + productid + "', ";
           sql1+="'"+name+"\', ";
		   sql1+="'"+number+"', ";
           sql1+="'"+money+"', ";
           sql1+="'"+src+"')"; 	
		   con1.createStatement().execute(sql1);		   
//Step 6: 關閉連線
	con1.close();
	out.print("加入成功!! 請<a href='commoditiylist.jsp'>按此</a>回商品頁面!!");
%>
</body>
</html>