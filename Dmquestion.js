const originalQuestions = [
  {
    q: "What is the primary purpose of information management within an organisation?",
    opts: ["To automate hardware maintenance", "To support organisational decision-making", "To reduce electricity consumption", "To eliminate software updates"],
    ans: 1
  },
  {
    q: "Which quality ensures that data is accurate, consistent, and uncorrupted?",
    opts: ["Scalability", "Integrity", "Efficiency", "Availability"],
    ans: 1
  },
  {
    q: "Constraints, transactions, and referential integrity are used in databases to achieve which quality?",
    opts: ["Security", "Integrity", "Scalability", "Availability"],
    ans: 1
  },
  {
    q: "Which quality of effective information management protects data from unauthorised access?",
    opts: ["Efficiency", "Availability", "Security", "Scalability"],
    ans: 2
  },
  {
    q: "Authentication, authorisation, and encryption are mechanisms implemented to ensure:",
    opts: ["Scalability", "Integrity", "Security", "Efficiency"],
    ans: 2
  },
  {
    q: "Which quality refers to a system's ability to handle growing data volumes and user loads?",
    opts: ["Scalability", "Availability", "Security", "Integrity"],
    ans: 0
  },
  {
    q: "Indexing, partitioning, and distributed databases primarily help achieve:",
    opts: ["Security", "Scalability", "Integrity", "Privacy"],
    ans: 1
  },
  {
    q: "Which quality is defined as queries executing within acceptable response times?",
    opts: ["Availability", "Scalability", "Integrity", "Efficiency"],
    ans: 3
  },
  {
    q: "Query optimisation, indexing, and caching are database techniques used to enhance:",
    opts: ["Efficiency", "Integrity", "Security", "Privacy"],
    ans: 0
  },
  {
    q: "Which quality ensures that data is accessible whenever users need it?",
    opts: ["Integrity", "Availability", "Scalability", "Security"],
    ans: 1
  },
  {
    q: "Replication, backup, and recovery mechanisms are database strategies applied to guarantee:",
    opts: ["Security", "Availability", "Efficiency", "Integrity"],
    ans: 1
  },
  {
    q: "How many key qualities must effective information management balance, according to the text?",
    opts: ["3", "4", "5", "6"],
    ans: 2
  },
  {
    q: "What critical database technique is mentioned as supporting both Scalability and Efficiency?",
    opts: ["Partitioning", "Indexing", "Encryption", "Backup"],
    ans: 1
  },
  {
    q: "What are critical operations for making large information repositories searchable?",
    opts: ["Caching and Encryption", "Analysis and Indexing", "Backup and Partitioning", "Authentication and Replication"],
    ans: 1
  },
  {
    q: "What is an index in a database?",
    opts: ["A backup file stored on an external disk", "A data structure that allows rapid location of records", "A security key used for encryption", "A set of integrity rules for table relationships"],
    ans: 1
  },
  {
    q: "Which two data structures are typically used to implement database indexes?",
    opts: ["Stack and Queue", "B-tree or hash table", "Linked list and Array", "Binary tree and Graph"],
    ans: 1
  },
  {
    q: "What operation occurs during a query execution if no indexes are present?",
    opts: ["A binary search", "A full table scan", "A hash lookup", "A partitioned jump"],
    ans: 1
  },
  {
    q: "Performing a full table scan is considered acceptable for:",
    opts: ["Databases with millions of rows", "Distributed databases", "Small tables", "Caching operations"],
    ans: 2
  },
  {
    q: "Running a query without indexes on a table with millions of rows is described as:",
    opts: ["Highly secure", "Moderately efficient", "Catastrophically slow", "Best practice"],
    ans: 2
  },
  {
    q: "What area governs who may access personal data and under what conditions?",
    opts: ["Information privacy", "Information scalability", "Information integrity", "Information indexing"],
    ans: 0
  },
  {
    q: "What does the acronym NDPR stand for in the context of Nigerian data privacy legislation?",
    opts: ["National Data Protection System", "Nigeria Data Protection Regulation", "Nigerian Digital Privacy Right", "National Database Protection Rule"],
    ans: 1
  },
  {
    q: "In what year was the NDPR enacted, as cited in the text?",
    opts: ["2015", "2017", "2019", "2021"],
    ans: 2
  },
  {
    q: "Under NDPR 2019, how must personal data be collected?",
    opts: ["Via public registry", "With consent", "Through automated tracking", "Without user knowledge"],
    ans: 1
  },
  {
    q: "NDPR 2019 requires that personal data must be stored:",
    opts: ["Securely", "Temporarily", "In an unencrypted format", "On local devices only"],
    ans: 0
  },
  {
    q: "According to NDPR 2019, personal data must not be transferred to third parties without:",
    opts: ["Payment", "Partitioning", "Authorisation", "Indexing"],
    ans: 2
  },
  {
    q: "Which of the following is NOT listed as a component of information management?",
    opts: ["Collection", "Organisation", "Destruction", "Storage and retrieval"],
    ans: 2
  },
  {
    q: "Transactions and constraints are key database features directly linked to maintaining:",
    opts: ["Data integrity", "Query optimization", "Database replication", "User access control"],
    ans: 0
  },
  {
    q: "Caching is a mechanism specifically cited to improve:",
    opts: ["Query efficiency", "System availability", "Data security", "Structural scalability"],
    ans: 0
  },
  {
    q: "Distributed databases and partitioning are methods primarily used to address issues with:",
    opts: ["Privacy rules", "Large data volumes and user loads", "Data accuracy constraints", "User authentication"],
    ans: 1
  },
  {
    q: "Which pair of qualities directly involves protecting access rights and maintaining user consent standards?",
    opts: ["Scalability and Efficiency", "Security and Information Privacy", "Availability and Integrity", "Analysis and Indexing"],
    ans: 1
  },
{
    q: "How many main components make up a database system?",
    opts: ["2", "3", "4", "5"],
    ans: 2
  },
  {
    q: "Which component of a database system is defined as an organised collection of persistent, structured data?",
    opts: ["Database Management System (DBMS)", "Database (DB)", "Application program", "User view"],
    ans: 1
  },
  {
    q: "The software layer that manages storage, retrieval, and security in a database system is the:",
    opts: ["Database (DB)", "Application Program", "Database Management System (DBMS)", "Internal schema"],
    ans: 2
  },
  {
    q: "Programs that interact with the DBMS via query languages or APIs to serve end users are called:",
    opts: ["Database Management Systems", "Application programs", "Internal architectures", "Data definitions"],
    ans: 1
  },
  {
    q: "Which group is included under the 'Users' component of a database system?",
    opts: ["End users, application developers, and DBAs", "System analysts, network engineers, and hardware managers", "Data routers, server admin, and web hosts", "Software architects only"],
    ans: 0
  },
  {
    q: "Defining schemas, tables, constraints, and relationships falls under which DBMS function?",
    opts: ["Data manipulation", "Data definition", "Transaction management", "Concurrency control"],
    ans: 1
  },
  {
    q: "Which SQL commands are examples of the Data Definition function?",
    opts: ["INSERT, UPDATE, DELETE", "BEGIN TRANSACTION, COMMIT", "CREATE TABLE, ALTER TABLE", "GRANT, REVOKE"],
    ans: 2
  },
  {
    q: "Inserting, updating, deleting, and querying data represents which DBMS function?",
    opts: ["Data manipulation", "Data definition", "Security and integrity", "Recovery management"],
    ans: 0
  },
  {
    q: "Which group of commands illustrates the Data Manipulation function?",
    opts: ["CREATE TABLE, ALTER TABLE", "INSERT, UPDATE, DELETE, SELECT", "GRANT, REVOKE, CHECK", "Redo/undo logs"],
    ans: 1
  },
  {
    q: "The primary purpose of Transaction Management in a DBMS is to ensure:",
    opts: ["Physical storage reduction", "ACID properties across concurrent operations", "Locking protocols and MVCC", "Logical data views for users"],
    ans: 1
  },
  {
    q: "Which SQL commands belong to Transaction Management?",
    opts: ["BEGIN TRANSACTION, COMMIT, ROLLBACK", "GRANT, REVOKE, CHECK", "INSERT, UPDATE, SELECT", "CREATE TABLE, ALTER TABLE"],
    ans: 0
  },
  {
    q: "Which DBMS function manages simultaneous access to prevent data anomalies?",
    opts: ["Recovery management", "Data definition", "Concurrency control", "Data manipulation"],
    ans: 2
  },
  {
    q: "Locking protocols and MVCC are examples used to implement:",
    opts: ["Recovery management", "Concurrency control", "Data definition", "Security and integrity"],
    ans: 1
  },
  {
    q: "Restoring a database to a consistent state after a system failure is the duty of:",
    opts: ["Recovery management", "Transaction management", "Data manipulation", "Data definition"],
    ans: 0
  },
  {
    q: "Redo/undo logs and checkpoints are mechanisms used in:",
    opts: ["Concurrency control", "Data definition", "Recovery management", "Security enforcement"],
    ans: 2
  },
  {
    q: "Enforcing access control and data validity rules is known as:",
    opts: ["Transaction management", "Security and integrity", "Data manipulation", "Concurrency control"],
    ans: 1
  },
  {
    q: "Which of the following represents examples of Security and Integrity enforcement?",
    opts: ["GRANT, REVOKE, CHECK constraints", "BEGIN TRANSACTION, COMMIT, ROLLBACK", "CREATE TABLE, ALTER TABLE", "Redo/undo logs"],
    ans: 0
  },
  {
    q: "The ANSI/SPARC architecture separates physical storage from user views using how many levels?",
    opts: ["2", "3", "4", "5"],
    ans: 1
  },
  {
    q: "Which level of the ANSI/SPARC architecture describes physical storage structures like files, indexes, and disk organisation?",
    opts: ["Conceptual level", "External level", "Internal level", "Logical level"],
    ans: 2
  },
  {
    q: "Which level of the ANSI/SPARC architecture describes the logical structure of the entire database, including tables, relationships, and constraints?",
    opts: ["Internal level", "Conceptual level", "External level", "Physical level"],
    ans: 1
  },
  {
    q: "The External level of the ANSI/SPARC architecture is primarily concerned with:",
    opts: ["Files and disk structures", "How specific user groups see portions of data", "Defining transaction boundaries", "Managing physical indexing"],
    ans: 1
  },
  {
    q: "What is defined as the ability to modify the schema at one level without affecting the schema at the next level?",
    opts: ["Data concurrency", "Data independence", "Data manipulation", "Data recovery"],
    ans: 1
  },
  {
    q: "Physical data independence refers to modifying the schema between which two levels?",
    opts: ["Conceptual → External", "Internal → Conceptual", "External → Logical", "Physical → External"],
    ans: 1
  },
  {
    q: "Reorganising storage structures on disk without changing the logical schema is an example of:",
    opts: ["Logical data independence", "Physical data independence", "Concurrency control", "Transaction management"],
    ans: 1
  },
  {
    q: "Logical data independence refers to modifying the schema between which two levels?",
    opts: ["Internal → Conceptual", "Conceptual → External", "External → Internal", "Physical → Internal"],
    ans: 1
  },
  {
    q: "Adding new tables or columns to a database without breaking existing user views demonstrates:",
    opts: ["Physical data independence", "Logical data independence", "Data integrity", "Data definition"],
    ans: 1
  },
  {
    q: "Which ANSI/SPARC level hides irrelevant database details from specific user groups?",
    opts: ["Internal level", "Conceptual level", "External level (views)", "Storage level"],
    ans: 2
  },
  {
    q: "What does the abbreviation 'DBA' stand for in database administration?",
    opts: ["Data Building Authority", "Database Administrator", "Data Business Analyst", "Database Automation"],
    ans: 1
  },
  {
    q: "MVCC in concurrency control stands for Multi-Version Concurrency Control. It works alongside which mechanism?",
    opts: ["Checkpoints", "Locking protocols", "APIs", "Data definition"],
    ans: 1
  },
  {
    q: "Which term describes data that remains stored reliably over time beyond execution?",
    opts: ["Transient data", "Volatile data", "Persistent data", "External data"],
    ans: 2
  },
{
    q: "How does the relational model organize data?",
    opts: ["Into physical binary pointers and graphs", "Into relations (tables) of tuples (rows) and attributes (columns)", "Into hierarchical document nodes", "Into key-value unstructured caches"],
    ans: 1
  },
  {
    q: "In a relational model, how are relationships between entities expressed?",
    opts: ["Through physical memory addresses", "Through disk block offsets", "Through shared key values", "Through embedded document arrays"],
    ans: 2
  },
  {
    q: "In relational terminology, a table corresponds to a relation, a row corresponds to a tuple, and a column corresponds to an:",
    opts: ["Attribute", "Entity", "Index", "Object"],
    ans: 0
  },
  {
    q: "Which SQL constraint enforces entity integrity in the provided student table example?",
    opts: ["CHECK", "FOREIGN KEY", "PRIMARY KEY", "DEFAULT"],
    ans: 2
  },
  {
    q: "Entity integrity requires that the primary key column must be:",
    opts: ["DEFAULT", "NOT NULL and unique", "A DECIMAL data type", "A foreign reference"],
    ans: 1
  },
  {
    q: "Which constraint in the student table ensures referential integrity?",
    opts: ["CHECK (gpa BETWEEN 0.00 AND 4.00)", "FOREIGN KEY (dept_id) REFERENCES department(dept_id)", "PRIMARY KEY (student_id)", "email VARCHAR(100) UNIQUE"],
    ans: 1
  },
  {
    q: "Referential integrity requires that the value of a foreign key in a child table must:",
    opts: ["Be greater than zero", "Exist in the primary key of the referenced table", "Be a unique string value", "Have a default current date"],
    ans: 1
  },
  {
    q: "The condition 'gpa must be between 0.00 and 4.00' enforced by a CHECK constraint is an example of:",
    opts: ["Entity integrity", "Referential integrity", "Domain integrity", "Physical independence"],
    ans: 2
  },
  {
    q: "What action is triggered ON DELETE in the foreign key constraint of the student table?",
    opts: ["CASCADE", "RESTRICT", "SET NULL", "NO ACTION"],
    ans: 1
  },
  {
    q: "What action is triggered ON UPDATE in the foreign key constraint of the student table?",
    opts: ["RESTRICT", "CASCADE", "SET DEFAULT", "IGNORE"],
    ans: 1
  },
  {
    q: "In the student table schema, what default value is assigned to the 'enrolled_on' column?",
    opts: ["0.00", "CURRENT_DATE", "NULL", "0"],
    ans: 1
  },
  {
    q: "Which data type and parameter are used for the 'gpa' column in the student table SQL definition?",
    opts: ["INT", "DECIMAL(3,2)", "VARCHAR(80)", "DATE"],
    ans: 1
  },
  {
    q: "Which column in the department table is defined with both NOT NULL and UNIQUE constraints?",
    opts: ["dept_id", "dept_name", "student_id", "gpa"],
    ans: 1
  },
  {
    q: "Semi-structured data models allow records to be flexible and:",
    opts: ["Fixed-schema", "Self-describing", "Non-hierarchical", "Strictly tabular"],
    ans: 1
  },
  {
    q: "Which of the following formats is cited as an example of a semi-structured data model?",
    opts: ["SQL tables", "JSON/XML documents", "Relational tuples", "Typed columns"],
    ans: 1
  },
  {
    q: "Regarding schema structure, the relational model uses a:",
    opts: ["Flexible, schema-optional structure", "Fixed, predefined schema", "No schema capability", "Self-describing schema only"],
    ans: 1
  },
  {
    q: "Regarding schema structure, semi-structured document models are:",
    opts: ["Fixed and predefined", "Flexible and schema-optional", "Strictly compiled", "Non-extensible"],
    ans: 1
  },
  {
    q: "The data format for a relational model consists of:",
    opts: ["JSON/XML documents with nested data", "Tables with typed columns", "Key-value text strings", "Binary trees"],
    ans: 1
  },
  {
    q: "The data format for semi-structured models consists of:",
    opts: ["Tables with typed columns", "JSON/XML documents with nested data", "Flat binary tables", "Fixed-length records"],
    ans: 1
  },
  {
    q: "How are relationships managed in semi-structured document databases?",
    opts: ["Foreign keys between tables only", "Embedded documents or references", "Primary key indices only", "System pointers"],
    ans: 1
  },
  {
    q: "How are relationships managed in the relational model?",
    opts: ["Embedded documents", "Foreign keys between tables", "Nested XML elements", "Physical pointers"],
    ans: 1
  },
  {
    q: "The relational model is best suited for:",
    opts: ["Unstructured and variable data", "Hierarchical tree logs", "Structured transactional data", "Schema-optional documents"],
    ans: 2
  },
  {
    q: "Semi-structured data models are best suited for:",
    opts: ["Structured transactional data", "Unstructured, variable, hierarchical data", "Strict tabular reporting", "Fixed numeric constraints"],
    ans: 1
  },
  {
    q: "What is the primary query language used for relational databases?",
    opts: ["MQL", "XQuery", "SQL", "JSONPath"],
    ans: 2
  },
  {
    q: "Which of the following is a query language used for semi-structured MongoDB databases?",
    opts: ["SQL", "MQL", "PostgreSQL", "PL/SQL"],
    ans: 1
  },
  {
    q: "Which query language is used to navigate and query JSON structures in semi-structured environments?",
    opts: ["SQL", "JSONPath", "MySQL", "DML"],
    ans: 1
  },
  {
    q: "Which query language is associated with XML document querying?",
    opts: ["SQL", "XQuery", "MQL", "CHECK"],
    ans: 1
  },
  {
    q: "In the department table definition, which constraint serves as the Primary Key?",
    opts: ["dept_name", "dept_id", "email", "gpa"],
    ans: 1
  },
  {
    q: "What does an 'ON DELETE RESTRICT' rule prevent?",
    opts: ["Inserting new rows in the student table", "Deleting a parent department row if referenced student rows exist", "Updating child foreign keys automatically", "Adding UNIQUE constraints"],
    ans: 1
  },
  {
    q: "What does an 'ON UPDATE CASCADE' rule perform?",
    opts: ["Deletes child rows when the parent row is updated", "Propagates updates in parent primary key values down to child foreign key values", "Restricts changing student GPA values", "Blocks schema changes"],
    ans: 1
  },
 {
    q: "Which SQL command is used to insert new rows into a table?",
    opts: ["ADD ROW", "INSERT INTO", "UPDATE", "CREATE TUPLE"],
    ans: 1
  },
  {
    q: "In the sample DML code provided, how many departments are inserted into the department table?",
    opts: ["2", "3", "4", "5"],
    ans: 1
  },
  {
    q: "What is the department ID assigned to 'Data Science' in the INSERT INTO department query?",
    opts: ["1", "2", "3", "101"],
    ans: 0
  },
  {
    q: "Which department is assigned department ID 2?",
    opts: ["Data Science", "Computer Science", "Statistics", "Mathematics"],
    ans: 1
  },
  {
    q: "How many total student records are inserted in the provided student INSERT query?",
    opts: ["3", "4", "5", "6"],
    ans: 2
  },
  {
    q: "What is the student_id for 'Amaka Obi' in the sample student dataset?",
    opts: ["1", "101", "102", "3.85"],
    ans: 1
  },
  {
    q: "Which department ID is 'Chioma Eze' assigned to in the dataset?",
    opts: ["1", "2", "3", "4"],
    ans: 0
  },
  {
    q: "What is the recorded GPA for student 'Emeka Nwosu'?",
    opts: ["3.15", "3.42", "3.78", "3.91"],
    ans: 2
  },
  {
    q: "Which student has a GPA of 3.15 and belongs to department ID 3?",
    opts: ["Bello Musa", "David Lawal", "Amaka Obi", "Chioma Eze"],
    ans: 1
  },
  {
    q: "In the first SELECT query, what table aliases are used for 'student' and 'department'?",
    opts: ["st and dp", "s and d", "stud and dept", "t1 and t2"],
    ans: 1
  },
  {
    q: "Which JOIN type is used in the query retrieving students with GPA >= 3.70?",
    opts: ["LEFT JOIN", "INNER JOIN (JOIN)", "RIGHT JOIN", "FULL OUTER JOIN"],
    ans: 1
  },
  {
    q: "What join condition connects the student and department tables in both SELECT queries?",
    opts: ["s.student_id = d.dept_id", "s.dept_id = d.dept_id", "s.gpa = d.dept_id", "s.email = d.dept_name"],
    ans: 1
  },
  {
    q: "What threshold filter is applied in the WHERE clause of the first SELECT query?",
    opts: ["s.gpa > 3.50", "s.gpa >= 3.70", "s.gpa = 4.00", "s.dept_id = 1"],
    ans: 1
  },
  {
    q: "In what direction is the output sorted in the query selecting students with GPA >= 3.70?",
    opts: ["ORDER BY s.gpa ASC", "ORDER BY s.gpa DESC", "ORDER BY s.full_name ASC", "ORDER BY s.dept_id DESC"],
    ans: 1
  },
  {
    q: "Based on the provided dataset, how many students have a GPA >= 3.70?",
    opts: ["1", "2", "3", "4"],
    ans: 2
  },
  {
    q: "Which student in the dataset has the highest GPA of 3.91?",
    opts: ["Amaka Obi", "Chioma Eze", "Emeka Nwosu", "Bello Musa"],
    ans: 1
  },
  {
    q: "Which aggregate function is used to calculate the number of students per department in the second SELECT query?",
    opts: ["SUM()", "COUNT()", "TOTAL()", "AVG()"],
    ans: 1
  },
  {
    q: "What alias is assigned to COUNT(s.student_id) in the aggregate query?",
    opts: ["total_students", "num_students", "student_count", "dept_count"],
    ans: 1
  },
  {
    q: "Which SQL function is combined with AVG(s.gpa) to round average GPA values to 2 decimal places?",
    opts: ["TRUNC()", "ROUND()", "CEIL()", "FORMAT()"],
    ans: 1
  },
  {
    q: "What alias is assigned to MAX(s.gpa) in the aggregate query?",
    opts: ["max_gpa", "top_gpa", "highest_gpa", "best_score"],
    ans: 1
  },
  {
    q: "Which type of join is used in the query calculating count and average GPA per department?",
    opts: ["JOIN (INNER)", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"],
    ans: 1
  },
  {
    q: "Why is a LEFT JOIN used instead of an INNER JOIN when calculating department metrics?",
    opts: ["To ignore non-matching student rows", "To include departments even if they have no registered students", "To run the query faster", "To filter out duplicate GPAs"],
    ans: 1
  },
  {
    q: "Which SQL clause is required to group results by department name prior to aggregating?",
    opts: ["WHERE d.dept_name", "GROUP BY d.dept_name", "ORDER BY d.dept_name", "HAVING d.dept_name"],
    ans: 1
  },
  {
    q: "Which clause is used to filter group results after aggregation in SQL?",
    opts: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
    ans: 1
  },
  {
    q: "What condition is evaluated in the HAVING clause of the aggregate query?",
    opts: ["COUNT(s.student_id) > 0", "AVG(s.gpa) >= 3.5", "MAX(s.gpa) = 4.00", "dept_id = 1"],
    ans: 0
  },
  {
    q: "How are the aggregated department results sorted in the final query?",
    opts: ["ORDER BY dept_name ASC", "ORDER BY avg_gpa DESC", "ORDER BY top_gpa ASC", "ORDER BY num_students DESC"],
    ans: 1
  },
  {
    q: "In SQL terminology, INSERT belongs to Data Manipulation Language (DML). Which category does CREATE TABLE belong to?",
    opts: ["DML", "DDL (Data Definition Language)", "DCL", "TCL"],
    ans: 1
  },
  {
    q: "What is the average GPA for the Data Science department students (Amaka 3.85, Chioma 3.91, Emeka 3.78)?",
    opts: ["3.80", "3.85", "3.88", "3.90"],
    ans: 1
  },
  {
    q: "How many students in the sample dataset belong to the 'Data Science' department (dept_id = 1)?",
    opts: ["1", "2", "3", "4"],
    ans: 2
  },
  {
    q: "If a new department 'Mathematics' (dept_id = 4) has no students, will it be included in the final output of the LEFT JOIN query with 'HAVING COUNT(s.student_id) > 0'?",
    opts: ["Yes, because LEFT JOIN includes all departments", "No, because HAVING COUNT(s.student_id) > 0 filters out departments with 0 students", "Yes, with null GPA values", "No, because LEFT JOIN excludes unmatched rows"],
    ans: 1
  },
  {
    q: "What is normalisation in database design?",
    opts: ["The process of merging all tables into a single flat file", "The process of organising a database schema to reduce data redundancy and improve data integrity", "The process of indexing foreign key columns for faster search", "The process of running automated backups"],
    ans: 1
  },
  {
    q: "How does normalisation reduce data redundancy and improve integrity?",
    opts: ["By converting SQL tables into JSON files", "By applying a series of formal rules called normal forms", "By removing all foreign key constraints", "By executing full table scans"],
    ans: 1
  },
  {
    q: "What requirement must be met for a table to be in First Normal Form (1NF)?",
    opts: ["Every determinant must be a candidate key", "All attributes must be atomic with no repeating groups or multi-valued attributes", "There must be no transitive dependencies", "There must be no partial dependencies"],
    ans: 1
  },
  {
    q: "Which specific anomaly is eliminated by achieving 1NF?",
    opts: ["Transitive dependencies", "Partial dependencies", "Repeating groups", "Determinant key anomalies"],
    ans: 2
  },
  {
    q: "A table that has attributes such as 'product1', 'qty1', 'product2', 'qty2' in a single row violates which normal form?",
    opts: ["1NF", "2NF", "3NF", "BCNF"],
    ans: 0
  },
  {
    q: "What are the two requirements for a table to be in Second Normal Form (2NF)?",
    opts: ["Must be in 1NF and have no transitive dependencies", "Must be in 1NF and every non-key attribute must be fully functionally dependent on the entire primary key", "Must be in 2NF and have atomic values", "Must have a single integer primary key"],
    ans: 1
  },
  {
    q: "Which anomaly is eliminated by converting a 1NF table into 2NF?",
    opts: ["Repeating groups", "Partial dependencies", "Transitive dependencies", "Candidate key dependencies"],
    ans: 1
  },
  {
    q: "What is a partial dependency?",
    opts: ["When an attribute depends on a non-key attribute", "When a non-key attribute depends on only a portion of a composite primary key", "When a key attribute depends on an external table", "When two candidate keys overlap"],
    ans: 1
  },
  {
    q: "In the 1NF table example `order_items_1NF (order_id, product_id, customer, quantity)`, why does a partial dependency exist?",
    opts: ["Because quantity depends on customer", "Because customer depends only on order_id rather than the full composite key (order_id, product_id)", "Because product_id depends on customer", "Because order_id depends on quantity"],
    ans: 1
  },
  {
    q: "What primary key structure exists in `order_items_1NF`?",
    opts: ["Single primary key on order_id", "Composite primary key on (order_id, product_id)", "Surrogate key on customer", "Foreign key on quantity"],
    ans: 1
  },
  {
    q: "To resolve the partial dependency in `order_items_1NF` and achieve 2NF, how is the table decomposed?",
    opts: ["Into a single table with JSON arrays", "Into two tables: `orders` and `order_items`", "By adding product2 and qty2 columns", "By removing the primary key"],
    ans: 1
  },
  {
    q: "In the 2NF schema decomposition, what is the primary key of the `orders` table?",
    opts: ["customer_id", "order_id", "product_id", "quantity"],
    ans: 1
  },
  {
    q: "In the 2NF `order_items` table, what forms the composite primary key?",
    opts: ["(order_id, customer_id)", "(order_id, product_id)", "(product_id, quantity)", "(customer_id, product_id)"],
    ans: 1
  },
  {
    q: "What requirement must be satisfied for a relation to be in Third Normal Form (3NF)?",
    opts: ["Must be in 1NF and eliminate repeating groups", "Must be in 2NF and have no non-key attribute transitively dependent on the primary key", "Must be in BCNF and eliminate composite keys", "Must have no foreign key references"],
    ans: 1
  },
  {
    q: "Which type of anomaly is eliminated by applying 3NF rules?",
    opts: ["Partial dependencies", "Repeating groups", "Transitive dependencies", "Atomic attribute anomalies"],
    ans: 2
  },
  {
    q: "What is a transitive dependency?",
    opts: ["When a non-key attribute depends on another non-key attribute which in turn depends on the primary key", "When a primary key depends on a foreign key", "When a non-key attribute depends on half of a composite key", "When attributes contain multi-valued sets"],
    ans: 0
  },
  {
    q: "If `customer_name` depends on `customer_id`, and `customer_id` depends on `order_id`, what type of dependency exists between `order_id` and `customer_name`?",
    opts: ["Partial dependency", "Transitive dependency", "Atomic dependency", "Direct dependency"],
    ans: 1
  },
  {
    q: "To convert a schema from 2NF to 3NF when `customer_name` depends on `customer_id` (which depends on `order_id`), what action is required?",
    opts: ["Combine customer_name into order_items", "Decompose so customer details are moved to a separate `customers` table", "Merge orders and order_items into one table", "Remove customer_id"],
    ans: 1
  },
  {
    q: "What does the abbreviation BCNF stand for?",
    opts: ["Basic Computer Normal Form", "Boyce-Codd Normal Form", "Binary Condition Normal Form", "Base Constraints Normal Form"],
    ans: 1
  },
  {
    q: "What is the requirement for a table to be in Boyce-Codd Normal Form (BCNF)?",
    opts: ["Every non-key attribute must be atomic", "Every determinant must be a candidate key", "Composite primary keys are forbidden", "Foreign keys must be unique"],
    ans: 1
  },
  {
    q: "How does BCNF relate to 3NF in terms of strictness?",
    opts: ["BCNF is less strict than 3NF", "BCNF is a stricter form of 3NF", "BCNF allows transitive dependencies while 3NF does not", "BCNF applies only to unnormalised tables"],
    ans: 1
  },
  {
    q: "Which normal form addresses remaining anomalies present in 3NF when overlapping candidate keys exist?",
    opts: ["1NF", "2NF", "3NF", "BCNF"],
    ans: 3
  },
  {
    q: "An unnormalised table (UNF) typically contains:",
    opts: ["Fully decomposed relations", "Repeating groups or multi-valued attributes", "Strict BCNF compliance", "No functional dependencies"],
    ans: 1
  },
  {
    q: "In relational design, what is a determinant?",
    opts: ["An attribute, or set of attributes, on which another attribute is fully functionally dependent", "A foreign key pointing to an external view", "An index that speeds up table scans", "A constraint enforcing domain bounds"],
    ans: 0
  },
  {
    q: "In the SQL definition for `order_items`, how is the relationship to `products` established?",
    opts: ["quantity INT PRIMARY KEY", "product_id INT REFERENCES products(product_id)", "customer_id INT UNIQUE", "order_id INT CHECK (order_id > 0)"],
    ans: 1
  },
  {
    q: "In the SQL definition for `orders`, `customer_id` is defined as a foreign key pointing to which table?",
    opts: ["products(product_id)", "customers(customer_id)", "order_items(order_id)", "users(user_id)"],
    ans: 1
  },
  {
    q: "Which attribute in `order_items` is constrained with `NOT NULL`?",
    opts: ["order_id", "product_id", "quantity", "customer_id"],
    ans: 2
  },
  {
    q: "If an attribute depends on the entire primary key and the primary key consists of a single column, partial dependencies:",
    opts: ["Are automatically impossible", "Must still be checked", "Require BCNF decomposition", "Violate 1NF"],
    ans: 0
  },
  {
    q: "Order of normalisation steps follows which progression?",
    opts: ["3NF → 2NF → 1NF → BCNF", "UNF → 1NF → 2NF → 3NF → BCNF", "1NF → 3NF → 2NF → BCNF", "BCNF → 1NF → 2NF → 3NF"],
    ans: 1
  },
  {
    q: "Ensuring that every non-key column directly describes the entity identified by the primary key (and nothing else) is the core principle of:",
    opts: ["Transaction processing", "Normalisation", "Indexing", "Distributed caching"],
    ans: 1
  },
  {
    q: "Database security aims to protect data from which of the following risks?",
    opts: ["Unauthorised access, disclosure, modification, and destruction", "Index fragmentation and cache misses", "Schema normalisation and partial dependencies", "Network latency and slow disk speeds"],
    ans: 0
  },
  {
    q: "What are the three pillars of database security mentioned in the text?",
    opts: ["Integrity, Scalability, Availability", "Authentication, Authorisation, Audit trails", "Encryption, Partitioning, Indexing", "1NF, 2NF, 3NF"],
    ans: 1
  },
  {
    q: "Verifying the identity of users before granting access (using passwords, tokens, or biometrics) is known as:",
    opts: ["Authorisation", "Authentication", "Audit trailing", "Concurrency control"],
    ans: 1
  },
  {
    q: "Defining what an authenticated user is permitted to do in a database system is known as:",
    opts: ["Authentication", "Authorisation", "Checkpointing", "Write-ahead logging"],
    ans: 1
  },
  {
    q: "Which SQL commands are primarily used to implement database authorisation?",
    opts: ["CREATE and ALTER", "GRANT and REVOKE", "INSERT and DELETE", "BEGIN and COMMIT"],
    ans: 1
  },
  {
    q: "Logging all data access and modification events for accountability and forensics is called:",
    opts: ["Audit trails", "Authentication", "Transaction isolation", "Undo logging"],
    ans: 0
  },
  {
    q: "Which SQL statement is used to define a new security role in a database?",
    opts: ["CREATE USER", "CREATE ROLE", "GRANT ROLE", "SET ROLE"],
    ans: 1
  },
  {
    q: "In the sample SQL code, what privilege is granted to the `lecturer` role on the `student` table?",
    opts: ["UPDATE", "INSERT", "SELECT", "DELETE"],
    ans: 2
  },
  {
    q: "What mechanism is used in the SQL example to hide sensitive columns (such as email and gpa) from certain user groups?",
    opts: ["Indexes", "Database Views (`CREATE VIEW`)", "Checkpoints", "Write-ahead logs"],
    ans: 1
  },
  {
    q: "Which columns are made visible in the `student_public` view example?",
    opts: ["email, gpa, enrolled_on", "student_id, full_name, dept_id", "student_id, gpa, email", "full_name, email, enrolled_on"],
    ans: 1
  },
  {
    q: "Which SQL command is used to remove granted privileges when a user's role changes?",
    opts: ["DELETE", "REVOKE", "DROP", "REMOVE"],
    ans: 1
  },
  {
    q: "Concurrency control ensures that simultaneous database transactions produce correct results as if they executed:",
    opts: ["In parallel without coordination", "Serially", "Uncontrolled", "In reverse order"],
    ans: 1
  },
  {
    q: "What occurs during a 'Dirty Read' anomaly?",
    opts: ["Transaction T1 re-executes a query and finds new rows added by T2", "Transaction T1 reads data written by T2, which later rolls back", "Transaction T1 reads the same row twice and finds it modified by T2", "Transaction T1 locks a table permanently"],
    ans: 1
  },
  {
    q: "Which isolation level prevents Dirty Reads?",
    opts: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
    ans: 1
  },
  {
    q: "What occurs during a 'Non-repeatable Read' anomaly?",
    opts: ["T1 reads data written by T2 that rolls back", "T1 reads the same row twice, but T2 modifies it between reads", "T1 re-executes a query and sees newly inserted rows", "T1 cannot read data because of an uncommitted log"],
    ans: 1
  },
  {
    q: "Which isolation level prevents Non-repeatable Reads?",
    opts: ["READ COMMITTED", "REPEATABLE READ", "READ UNCOMMITTED", "WAL LEVEL"],
    ans: 1
  },
  {
    q: "What occurs during a 'Phantom Read' anomaly?",
    opts: ["T1 reads uncommitted data from T2", "T1 re-executes a query and new rows added by T2 appear", "T1 modifies a row that T2 deleted", "T1 reads dirty data"],
    ans: 1
  },
  {
    q: "Which isolation level provides the highest protection and prevents Phantom Reads?",
    opts: ["READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE", "READ UNCOMMITTED"],
    ans: 2
  },
  {
    q: "What is the primary objective of database recovery mechanisms?",
    opts: ["To enforce 3NF compliance", "To restore the database to a consistent state after a failure", "To hide sensitive user columns", "To prevent dirty reads"],
    ans: 1
  },
  {
    q: "What is the core rule of Write-Ahead Logging (WAL)?",
    opts: ["Every change is recorded in a log before it is applied to the database", "Logs are written only after transactions are committed to disk", "Database snapshots are taken every hour", "Uncommitted transactions are automatically committed"],
    ans: 0
  },
  {
    q: "On system recovery under Write-Ahead Logging (WAL), what is done with the log?",
    opts: ["It is erased completely", "It is replayed to restore state", "It is converted to a view", "It is ignored"],
    ans: 1
  },
  {
    q: "What are checkpoints in a database recovery system?",
    opts: ["SQL constraints that check column value ranges", "Periodic snapshots of the database state that limit how far back the recovery log must be replayed", "User privileges that check access credentials", "Isolation levels that block dirty reads"],
    ans: 1
  },
  {
    q: "What happens to uncommitted transactions at the time of a system failure during recovery?",
    opts: ["They are redone", "They are undone", "They are automatically committed", "They are ignored"],
    ans: 1
  },
  {
    q: "What happens to committed transactions at the time of a system failure during recovery?",
    opts: ["They are undone", "They are redone", "They are revoked", "They are rolled back"],
    ans: 1
  },
  {
    q: "Which recovery mechanism handles both uncommitted and committed transactions after a crash?",
    opts: ["Grant/Revoke", "Undo/Redo", "Check constraints", "Serializability"],
    ans: 1
  },
  {
    q: "How does checkpointing improve recovery time?",
    opts: ["By preventing non-repeatable reads", "By limiting how far back the recovery log must be replayed", "By automatically granting privileges", "By enforcing referential integrity"],
    ans: 1
  },
  {
    q: "In the SQL example, `student_assistant` is granted access to which specific relation?",
    opts: ["student table", "department table", "student_public view", "lecturer role"],
    ans: 2
  },
  {
    q: "Which statement accurately describes the relationship between isolation levels and concurrency anomalies?",
    opts: ["READ COMMITTED prevents Phantom Reads", "REPEATABLE READ prevents Non-repeatable Reads", "SERIALIZABLE allows Dirty Reads", "READ COMMITTED prevents all anomalies"],
    ans: 1
  },
  {
    q: "Which security pillar covers passwords, security tokens, and biometric verification?",
    opts: ["Authorisation", "Authentication", "Audit trails", "Concurrency control"],
    ans: 1
  },
  {
    q: "In database security, granting SELECT on a view instead of a base table is a method for enforcing:",
    opts: ["Physical data independence and principle of least privilege", "Database recovery", "Checkpointing", "Write-Ahead Logging"],
    ans: 0
  }
];
