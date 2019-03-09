use crate::routes::get_mail;

pub fn run() {
    ::rocket::ignite().mount("/mail", routes![get_mail]).launch();
}