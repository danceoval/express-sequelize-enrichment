# Express Sequelize Enrichment

## Goal

You are the CTO of ACME Education Inc. Your job is to create an app for storing user's data, their academic awards and their associated mentors.

## Specs

```
- only a user with 2 or more awards can be a mentor
- a user cannot mentor themselves
- HINT: a key part of this is removing a users mentees if their award count falls below 2.
```

### Models

```
- User
- Award
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

### React Components
```
- UserList : a list of all users
- AddUser : a form for adding a new user to the list/db
- UserComponent : an individual user
	- Each UserComponent must have:
		- A list of awards (if any)
		- A 'Remove Mentor' button, if the user has a mentor
		- A 'Set Mentor' form, with a selection of all available users
		- A 'Delete Award' button that removes an award on click
		- A 'Delete User' button that removes the user on click
```

### Front-End 
```
- See the sample website for an idea of the front-end flow
- The front-end for the app should be written in React (Redux, React-Router and any other additional libraries are Extra Credit)
- Use axios for any AJAX requests for your API routes
```


### Extra Credit

```
- Tests for Models (Mocha/Chai)
- Tests for Routes (Mocha/Chai + Supertest)
- Responsive Design
- Redux state management
```

### Assessment
```
Grade = 
	Completed Models (2) + Completed Routes (7) + Front End Specs (8) / 17 + 10pts per Extra Credit
```

### Hints
```
- first step - npm init + create a db in Postico
- second step - creating and deleting users 
- third step - creating and deleting awards 
- fourth step - adding and removing mentors for a user
- fifth step - Add front end in React
- sixth step - add AJAX requests based on API routes and add to event listeners
- seventh step - add extra business logic


```

[Video Overview](https://www.youtube.com/watch?v=9GCQIg6HWmM&feature=youtu.be)

[Sample Demo](https://acme-user-mentors.herokuapp.com/users)


This assignment is Open book/Open notes. You may consulte any documentation/stackoverflow/class notes you need, as well as ask a fellow for help. 