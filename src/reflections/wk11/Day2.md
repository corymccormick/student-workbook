# Day 2
# # Dotnet WebAPI's > Relationships, and answer the following questions

1. What is the difference between a primary key and a foreign key?

The difference between a primary key and a foriegn key is the primaty key is an unique identifing value, and the foreign key is that primary key used on another table to refernce that data.

2. What is an Alias?
An Alias is an declared abbreviation of a table name. It could be used for condesing code and creating new properties on join to enable the abilty to get a value in the case of duplicate names. 

3. Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:

CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE doctorsPatients (
  id INT NOT NULL AUTO_INCREMENT,
  doctorId INT NOT NULL,
  patientId INT NOT NULL,

  FOREIGN KEY (doctorId)
    REFERENCES doctors(id),
  FOREIGN KEY (patientId)
    REFERENCES patients(id),
)

SELECT FROM doctorsPatients dp
INNER JOIN doctors d  ON d.id = dp.doctorId
INNER JOIN patients p ON p.id = dp.patientId;

Afternoon Project:https://github.com/corymccormick/knights.git