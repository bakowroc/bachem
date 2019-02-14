#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate serde_derive;

mod api;

fn main() {
    rocket::ignite()
        .mount("/product", routes![api::products::get_all, api::products::get_single])
        .mount("/mail", routes![api::mail::send_mail]).launch();
}