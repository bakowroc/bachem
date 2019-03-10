#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use] extern crate rocket;

pub mod routes;
pub mod server;