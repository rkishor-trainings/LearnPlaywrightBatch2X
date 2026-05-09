var name = "Pramod";

var firstName = "Pramod";
var lastName = "Dutta";

//Camel Case - first word lowercase, subsequent words capitalized (Most common in JS)
var firstName = "Pramod";
var lastName = "Dutta";
var userEmailAddress = "test@example.com";
var isUserLoggedIn = true;
var getUserData = function() {};

// Snake Case - all lowercase with underscores
var first_name = "Pramod";
var last_name = "Dutta";
var user_email_address = "test@example.com";
var is_user_logged_in = true;
var get_user_data = function() {};

// Pascal Case - every word capitalized (Commonly used for classes/constructors)
var FirstName = "Pramod";
var LastName = "Dutta";
var UserEmailAddress = "test@example.com";
var IsUserLoggedIn = true;
// class UserProfile {}  - Classes typically use PascalCase
// function Person() {}  - Constructors use PascalCase

// Screaming Snake Case / SCREAMING_CASE - all uppercase with underscores (Constants)
var FIRST_NAME = "Pramod";
var LAST_NAME = "Dutta";
var USER_EMAIL_ADDRESS = "test@example.com";
var MAX_LOGIN_ATTEMPTS = 5;
var API_BASE_URL = "https://api.example.com";
var PI = 3.14159;

// Hungarian Notation - prefix indicates the data type or purpose (older convention)
var sFirstName = "Pramod";          // s = string
var sLastName = "Dutta";
var nAge = 30;                      // n = number
var bIsActive = true;               // b = boolean
var arrNames = ["Pramod", "Dutta"]; // arr = array
var objUser = { name: "Pramod" };   // obj = object
var fnGetData = function() {};      // fn = function
var elButton = null;                // el = DOM element
var iCount = 0;                     // i = integer
var fPrice = 99.99;                 // f = float

// Note: Kebab-case (hyphen-separated) is NOT valid for JS identifiers
// var user-email = "test";  // ❌ Invalid - hyphens are not allowed
// It is commonly used in CSS class names and HTML attributes though






