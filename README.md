# ✨서비스 소개

## shopping-mall-shop

<div align="middle">


![](shoppingMall_mainpage.gif)
    


    
</div>



<br>
<br>

# ⚙ 기술스택

<div align="middle">

<img src="https://img.shields.io/badge/Javascript-3178C6?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/StyledComponent-C43BAD?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
    <img src="https://img.shields.io/badge/reduxToolkit-007?style=for-the-badge&logo=redux-toolkit&logoColor=white">
     <img src="https://img.shields.io/badge/firebase-007FF?style=for-the-badge&logo=firebase&logoColor=white">
   
<br>
<br>
- reducx-toolkit, firebase를  공부하기 위해서 쇼핑몰 프로젝트를 진행하였습니다. 
<br>
 - styled-components와 ReactJs는 이미 알고 있지만 좀 더 적응을 하기 위해 사용했습니다.

<br>
<br>


    
    

# 사용자

- login,register: 로그인,로그아웃,회원가입 구현
- 메인페이지 : 상품 카테고리별로 이동 가능하게 구현
- productDetail: 상품의 자세한 내용이 적혀있음, 상품의 수량 색깔을
  골라서 장바구니로 이동 가능함
  (navbar에서 장바구니에 넣은 상품 갯수를 알 수 있음)

- 반응형으로 구현

  ![](반응형.gif)

- 메인페이지들

![](shoppingMall_mainpage.gif)

- 필터를 통해 카테코리,사이즈별로 제품을 볼 수 있음
- 가격이 높은 순서, 낮은 순서 등으로 제품을 볼 수 있음
- 클릭시 제품 상세페이지로 감
- 제품의 색상은 좀 더 시각화가 잘 될수 있게 색깔로 표현함

![](shoppingMall_fillter.gif)

- stripe를 통해 결제를 구현함
- 실제로 결제 후에 성공하면 성공페이지로 넘어감
- 유저가 쇼핑을 더 할지 아니면 결제를 할지 선택할 수 있음

![](shoppingMall_order.gif)

# Adimn


- login: admin 자격이 있어야 메인 페이지를 볼 수 있음


## homePage
 - /: 월별 사용자를 그래프로 볼 수 있음
 - 최근 사용자를 볼 수 있음( 인원수 조정 가능 현재는 5명으로 조정함 )
 - 주문 내역을 확인할 수 있음
 - Revanue : 이번달과 작년달의 매출을 확인할 수 있음


- userPage
  /user : user 목록을 한번에 볼수 있음

  ![](userList.png)

  /user/:userId:(edit버튼) user의 자세한 정보를 볼수 있음, 개인정보 업데이트 가능

  ![](userDetail.png)

- Products
  제품들을 한번에 다 확인할 수 있음
  제품을 추가 삭제할 수 있음

  ![](productList.png)

  상품 상세페이지

  ![](productDetail.png)

  /product/:id : (edit버튼) 상품을 편집할수 있음
  /newproduct 로 가면 새로운 상품을 등록할 수 있음(firebase사용)

  ![](admin-product.gif)

  ![](adminPage-user.gif)
  
 ### 백엔드 
 api.md에 적어놓음

## 나중에 추가할 기능

- 장바구니에서 수량 고칠수 있게
- 주문 상품을 장바구니에서 골라서 주문할 수 있게
- 주문 내역 구현
