 # Day 3
 # # Dotnet WebAPI's > Welcome to SQL, and answer the following questions

1. In a SQL table, what is the difference between information in a row and information in a column?

 In an SQL table the difference between information in a row versus a column is a column is the the key and row contains a value for that key.  

2. Demonstrate the basic structure for creating a new table called characters with the values name, age, description as strings, and an int id.

CREATE TABLE characters(
  name VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  description VARCHAR NOT NULL,
  id INT NOT NULL
);

3. What is the difference between the following statements:

DELETE FROM table_name;
DROP TABLE table_name;

The difference between the above statements is delete from table will remove all data from the table, while drop table will delete the entire table.

afternoon challenge: https://github.com/corymccormick/knights