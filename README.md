# practice-fp

마플의 FxJS, FxDOM, FxSQL을 활용하여 함수형 프로그래밍 연습하기

## 구동 방법

- 데이터베이스 구동  (PostgreSQL)

### Run - root folder

```bash
npm i
npm start
```

### URL

- client: http://localhost:1234
- server: http://localhost:8080

### .env 파일 생성 - server folder

```
PORT=8080

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
