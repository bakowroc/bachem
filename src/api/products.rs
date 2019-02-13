use rocket::http::RawStr;

#[get("/")]
pub fn get_all() -> String {
    "All products".to_string()
}

#[get("/<product_name>")]
pub fn get_single(product_name: &RawStr) -> String {
    format!("Single product: {}", product_name.as_str())
}