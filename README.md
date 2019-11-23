**Student Name**:  Sushma Cheneerkuppum Sreedharan

**NetID**: rg4984

# Homework #10 Solution

## Question 1 

### (a)

**See all tours**

Path: http://hogwarts.tour.com/tour-management/toursInfo

Roles: Guest, Customer, Admin

Method: GET

Success: OK (200)
Error: NOT FOUND (404), BAD REQUEST (400)

### (b)
**Get info on a specific tour**

Path: http://hogwarts.tour.com/tour-management/toursInfo/{tour-id}

Roles: Guest, Customer, Admin

Method: GET

Success: OK (200)
Error: NOT FOUND (404), BAD REQUEST (400)

### (c)
**Add a new tour**

Path: http://hogwarts.tour.com/tour-management/admin/addTour/{tour-id}

Roles: Admin

Method: POST

Success: CREATED (201)
Error:  204 (No Content)

### (d)
**Edit a tour**

Path: http://hogwarts.tour.com/tour-management/admin/editTour/{tour-id}

Roles: Admin

Method: PUT

Success: 201 (Created)
Error: 204 (No Content) 


### (e)
**Delete a tour**

Path: http://hogwarts.tour.com/tour-management/admin/deleteTour/{tour-id}

Roles: Admin

Method: DELETE

Success: 202 (Accepted)
Error: 404 (NOT FOUND) 

## Question 2

### (a) Allow a user to see all the tours they are signed up for

Path: http://hogwarts.tour.com/tour-management/users/{id}/toursInfo

### (b) Allow a user to signup

Path: http://hogwarts.tour.com/tour-management/users/{id}/signup

### (c) Allow a user to remove themselves

Path: http://hogwarts.tour.com/tour-management/users/{id}/removeUser

### (d) Get all the customers signed up on a particular tour

Path: http://hogwarts.tour.com/tour-management/customer/{id}/signup/tourInfo/{tour-id}

