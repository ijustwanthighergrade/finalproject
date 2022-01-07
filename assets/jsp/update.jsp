<%@page contentType="text/html;charset=utf-8" language="java" import="java.sql.*"%>
<%@include file="config.jsp" %>
<%
if(session.getAttribute("id") != null ){
    if(request.getParameter("id")!=null){
    sql = "UPDATE `members` SET `name`='"+request.getParameter("name")+"', `id`='"+request.getParameter("id")+"', `pwd`='"+request.getParameter("pwd")+"', `phone_number`='"+request.getParameter("phone_number")+"', `e-mail`='"+request.getParameter("e_mail")+"', `address`='"+request.getParameter("address")+"' WHERE `id`='"+session.getAttribute("id")+"'";
	//con.createStatement().execute(sql);
    //sql = "UPDATE `members` SET `pwd`='"+request.getParameter("pwd")+"' WHERE `id`='"+session.getAttribute("id")+"'";
	con.createStatement().execute(sql);	
	con.close();//結束資料庫連結
	out.print("更新成功!! 請<a href='personalinfor.jsp'>按此</a>回會員頁面!!");
	}
	else{
	  con.close();//結束資料庫連結	
	  out.print("更新失敗!! 請填寫完整，<a href='personalinfor.jsp'>按此</a>回會員頁面!!");
	}
}
else{
	con.close();//結束資料庫連結
%>
out.println("您尚未登入，請登入！ <a href='login.html'>按此</a>重新登入") ;
<%
}
%>
