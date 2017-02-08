# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
first_name      | string    | not null, primary key
last_name       | string    | not null, indexed
user_name       | string    | not null, indexed, unique
password_digest | integer   | not null
session_token   | integer   | not null, indexed, unique

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
list_id     | integer   | not null, foreign key (references notebooks), indexed
done        | boolean   |

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
