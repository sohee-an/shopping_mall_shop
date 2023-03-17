# REST API

HTTP 요청 리스트

#### user

### GET

- /find/:id : user 개인정보 찾기(admin만 가능함)
- / : newUsersNumber(true,false) (admin만 가능함)
  -/state : 월별 총 사용자

### delete

- / : 회원탈퇴

### put

- /:id :user update

#### product

### GET

- /find/:id : product 정보
- / : all product, category별 정보(쿼리:category)

### POST

- / :create product

### PUT

- /:id : update product

### DELETE

- /:id :product delete

#### order

### GET

-/find/:userId : user의 오더들 정보

- / : all orders
  -/income: 이번달과 이전 달 수입

### POST

- / :order create

### PUT

- /:id : order update (admin만)

### DELETE

- /:id : order delete

### cart

### GET

-/find/:id : user의 cart정보

- / : all cart

### POST

- / :cart create

### PUT

- /:id : cart update (admin만)

### DELETE

- /:id : cart delete

### auth

### POST

- /register : 회원가입
  -/login: 로그인
