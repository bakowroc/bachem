use rocket_contrib::json::{Json};

#[derive(Serialize, Deserialize)]
pub struct Mail {
    pub returning_email: String,
    pub subject: String,
    pub content: String
}

#[post("/send", format = "application/json", data = "<_data>")]
pub fn send_mail(_data: Json<Mail>) -> Json<Mail> {
    return _data;
}
