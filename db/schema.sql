create database burgers_db;
use burgers_db;

create table burgers (
    id int not null auto_increment,
    name varchar(25) not null,
    devoured boolean default false,
    primary key (id)
);