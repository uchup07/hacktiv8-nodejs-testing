# Hacktiv8 NodeJS Testing

This Application for Assignment 3: Testing

* Testing For GetAllPhotos
* Testing for GetOnePhotoByID
* Testing for CreatePhoto

# Table of Contents
- [Hacktiv8 NodeJS Testing](#hacktiv8-nodejs-testing)
- [Table of Contents](#table-of-contents)
    - [How To](#how-to)
      - [1. Install NPM Package](#1-install-npm-package)
      - [2. Create environment](#2-create-environment)
      - [3. RUNNING THE APPS](#3-running-the-apps)
      - [4. Start Using The Apps](#4-start-using-the-apps)
        - [Register](#register)
      - [5. Test Apps](#5-test-apps)

### How To

First Clone Application

```
git clone https://github.com/uchup07/hacktiv8-nodejs-testing.git
```

#### 1. Install NPM Package

```cmd
npm install
```

#### 2. Create environment

rename file ``.env.example`` to ``.env``

```cmd
mv .env.example .env
```

Configuration for database on ``.env``

```
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=photoalbum
DB_HOST=localhost
DB_PORT=5432

APP_PORT=3000

JWT_SECRET_KEY=rahasia
```

Before Running Application create database name on postgres like ``DB_NAME`` above, and after that on command line or terminal

**Table Migration**

```
npx sequelize db:migrate
```

**Seeding Data**

**User Data**
```
npx sequelize db:seed --seed 20230109054941-seeding_user_datas.js
```

**Photo Data**
```
npx sequelize db:seed --seed 20230109040236-seeding_photo_datas.js
```

**Photo Data with UserId**
```
npx sequelize db:seed --seed 20230109055533-seeding_photo_datas_with_user_id_1.js
```

** Make sure all of data inserts on tables.

---

#### 3. RUNNING THE APPS

```cmd
npm run start
```

#### 4. Start Using The Apps

Now, using any HTTP Client like [POSTMAN](https://www.getpostman.com/apps)

##### Register

``POST http://localhost:3000/register``

Parameters Body

| Parameter              | Value                    |
| ---------------------- | ------------------------ |
| username               | admin                    |
| email                  | admin@admin.com          |
| password               | password                 |

Response ``Status 200``

```
{
    "id": number,
    "username": "admin",
    "email": "admin@admin.com",
    "password": "password"
}
```

#### 5. Test Apps

```cmd
npm run test
```

