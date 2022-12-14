# practice-fp

마플의 FxJS, FxDOM, FxSQL을 활용하여 함수형 프로그래밍 연습하기

- 구동 방법
    - [Run](#run)
    - [URL](#url)
    - [.env](#env)
    - [DDL](#ddl)

<br>

## 구동 방법

데이터베이스 구동  (PostgreSQL)

### Run

```bash
npm i
npm start
```

### URL

프로젝트 루트 폴더에서 실행

- client: http://localhost:1234
- server: http://localhost:3000

### .env 파일 생성

```
PORT=3000

user=""
pw=""
db=""
table_todo=todo
```

### DDL

```sql
CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  is_completed BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
);
```