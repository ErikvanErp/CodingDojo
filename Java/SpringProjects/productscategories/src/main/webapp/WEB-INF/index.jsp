<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<title>Products and Categories</title>
</head>
<body>
	<div class="container col-8 mx-auto">
	
		<div class="navbar">
			<nav>
				<h1>Home Page</h1>
			</nav>
		</div>
		
		<div class="row">
			<div class="col">
				<a href="products/new" class="btn btn-outline-secondary mx-1">New Product</a>
				<a href="categories/new" class="btn btn-outline-secondary mx-1">New Category</a>
			</div>
		</div>
		
		<div class="row mt-3">
			<div class="col col-6">
			<h2>Products</h2>
				<ul>
					<c:forEach var="product" items="${ products }">
						<li>
							<a href="/products/${ product.id }/show">
								<c:out value="${ product.name }"/>
							</a>
						</li>
					</c:forEach>
				</ul>
			</div>

			<div class="col col-6">
			<h2>Categories</h2>
				<ul>
					<c:forEach var="category" items="${ categories }">
						<li>
							<a href="/categories/${ category.id }/show">
								<c:out value="${ category.name }"/>
							</a>
						</li>
					</c:forEach>
				</ul>
			</div>
		</div>		
		
	</div>
</body>
</html>