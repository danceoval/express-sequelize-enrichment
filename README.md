# Express Sequelize Enrichment

## Goal

You are the CTO of ACME Education Inc. Your job is to create an express-sequelize API for storing user data, their academic awards and their associated mentors.



## Specs

```
- only a user with 2 or more awards can be a mentor
- a user cannot mentor themselves
- HINT: a key part of this is removing a users mentees if their award count falls below 2.
```

### Models

```
- User 
can have mentors who are other users

users can belong to users AS mentors (many to one) /
users can be mentors to users AS mentees (one to many) ???
users as Mentors must have two or more awards
user cannot be his/her own mentor


- Award : 
owned by users 

advice:
avoid hooks, dude says they're tricky





```

### Routes

```
- GET /
- GET /users
- POST /users
- PUT /users/:id
- DELETE /users/:id
- POST /users/:userId/awards
- DELETE /users/:userId/awards/:id
```


### Extra Credit

```
- Front end for API (may be written however you want, Vanilla JS, Nunjucks, React, etc)
- Tests for Models (Mocha/Chai)
- Tests for Routes (Mocha/Chai + Supertest)
```

### Assessment
```
Grade = (# of Model/Route completed + Specs passed / 10)
+ 10 points for every Extra Credit spec completed.
```

### Hints
```
- first step - npm init + create a db in Postico
- second step - creating and deleting users 
- third step - creating and deleting awards 
- fourth step - adding and removing mentors for a user
- fifth step - focus on business rules

```

[Video Overview](https://www.youtube.com/watch?v=9GCQIg6HWmM&feature=youtu.be)

[Sample Demo](https://acme-user-mentors.herokuapp.com/users)


This assignment is Open book/Open notes. You may consulte any documentation/stackoverflow/class notes you need, as well as ask a fellow for help. 