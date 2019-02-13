use rocket::response::content::Json;

#[derive(Serialize, Deserialize)]
struct Data {
    respond_email: String,
    subject: String,
    content: String
}

#[post("/send", format = "json", data = "<data>")]
pub fn send_mail(data: Json<Data>) -> String{
    "OK".to_string()
}