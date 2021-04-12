const mysql = require('mysql');


// db connection
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_DATABASE || 'devconnector';

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});

db.connect((err, res) => {
  if(err) throw new Error(err);

  // CREATING THE DATABASE (done)
  db.query(`CREATE DATABASE ${database}`);

  // CREATING THE TABLES

  // Users table
  db.query(`CREATE TABLE Users (
              id int NOT NULL AUTO_INCREMENT, 
              email varchar(255) NOT NULL, 
              password varchar(255) NOT NULL,
              UNIQUE(email),
              PRIMARY KEY(id)
            )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // ConfirmEmails table
  db.query(`
    CREATE TABLE ConfirmEmails (
      userId int NOT NULL,
      email varchar(255) NOT NULL,
      verCode varchar(255) NOT NULL,
      expires datetime NOT NULL,
      isVerified boolean NOT NULL,
      UNIQUE(email),
      FOREIGN KEY(userId) REFERENCES Users(id)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // Profiles table
  db.query(`
    CREATE TABLE Profiles (
      profileId int NOT NULL AUTO_INCREMENT,
      userId int NOT NULL,
      profStatus enum('Developer', 'Junior Developer', 'Senior Developer', 'Manager', 'Student or Learning', 'Instructor or Teacher', 'Intern', 'Other') NOT NULL,
      company varchar(255),
      website varchar(255),
      location varchar(255),
      githubUsername varchar(255),
      bioShort varchar(255),
      UNIQUE(userId),
      FOREIGN KEY (userId) REFERENCES Users(id),
      PRIMARY KEY(profileId)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // SocialLinks table
  db.query(`
    CREATE TABLE SocialLinks (
      profileId int NOT NULL,
      mediaName enum('twitter', 'facebook', 'youtube', 'linkedin', 'instagram') NOT NULL,
      link varchar(255) NOT NULL,
      FOREIGN KEY(profileId) REFERENCES Profiles(profileId)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // Experiences table
  db.query(`
    CREATE TABLE Experiences (
      profileId int NOT NULL,
      jobTitle varchar(255) NOT NULL,
      company varchar(255) NOT NULL,
      location varchar(255),
      fromDate date,
      toDate date,
      currentJob boolean,
      jobDescription varchar(510),
      FOREIGN KEY(profileId) REFERENCES Profiles(profileId) 
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // Educations table
  db.query(`
    CREATE TABLE Educations (
      profileId int NOT NULL,
      schoolOrBootcamp varchar(255) NOT NULL,
      degreeOrCertificate varchar(255) NOT NULL,
      field varchar(255),
      fromDate date,
      toDate date, 
      currentSchool boolean,
      programDescription varchar(510),
      FOREIGN KEY(profileId) REFERENCES Profiles(profileId)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });



  // Posts table
  db.query(`
    CREATE TABLE Posts (
      postId int NOT NULL AUTO_INCREMENT,
      authorId int NOT NULL,
      body text NOT NULL,
      PRIMARY KEY(postId),
      FOREIGN KEY(authorId) REFERENCES Users(id)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // Reactions table
  db.query(`
    CREATE TABLE Reactions (
      authorId int NOT NULL,
      postId int NOT NULL,
      reaction enum('like', 'dislike') NOT NULL,
      FOREIGN KEY(authorId) REFERENCES Users(id),
      FOREIGN KEY(postId) REFERENCES Posts(postId)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });

  // Comments table
  db.query(`
    CREATE TABLE Comments (
      authorId int NOT NULL,
      postId int NOT NULL,
      comment text(1020) NOT NULL,
      FOREIGN KEY(authorId) REFERENCES Users(id),
      FOREIGN KEY(postId) REFERENCES Posts(postId)
    )
  `, (err, res) => {
    if(err) throw new Error(err);
    console.log(res);
  });
});