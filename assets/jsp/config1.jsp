<%
	Class.forName("com.mysql.jdbc.Driver");
	String url2="jdbc:mysql://localhost/?serverTimezone=UTC";
	Connection con2=DriverManager.getConnection(url2,"root","1234");
	String sql2="use `demo`";
	con2.createStatement().execute(sql2);
	%>