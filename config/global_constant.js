WEBSITE_TITLE           = "Kendra G Singles Live";
WEBSITE_ADMIN_NAME      = "admin";
WEBSITE_FRONT_NAME      = "/";
API_URL                 = "/api/";
WEBSITE_URL             = process.env.URL;
WEBSITE_FRONT_URL       = process.env.FRONT_URL;
WEBSITE_ADMIN_URL       = process.env.URL+"admin/";
WEBSITE_API_URL         = process.env.URL+"api/";
WEBSITE_ROOT_PATH       = process.env.HOME_PATH;
FRONT_END_NAME          = "/";
FRONT_END_FOLDER_NAME   = "front"


WEBSITE_JS_FILE_PATH        = WEBSITE_URL + "admin/assets/";
WEBSITE_CSS_FILE_PATH       = WEBSITE_URL + "admin/assets/";
WEBSITE_IMAGE_FILE_PATH     = WEBSITE_URL + "admin/assets/images/";
WEBSITE_ADMIN_FILE_PATH     = "./../modules/admin/";
WEBSITE_FRONTEND_FILE_PATH  = "./../modules/frontend/";
WEBSITE_ADMIN_MODULE_PATH   = WEBSITE_ROOT_PATH + "/modules/admin/";
WEBSITE_LAYOUT_PATHS        = WEBSITE_ROOT_PATH + "/modules/front/layout/";
WEBSITE_LAYOUT_PATH         = WEBSITE_ROOT_PATH + "/modules/frontend/layout/"; 
WEBSITE_MODULES_PATH    	= WEBSITE_ROOT_PATH + "/modules/"+FRONT_END_FOLDER_NAME+"/";

/** Root file */
BASE_FILE_PATH = WEBSITE_ROOT_PATH + "/public/frontend/uploads/";
BASE_FILE_URL  = WEBSITE_URL + "frontend/uploads/";

/** User file path */
USER_FILE_PATH  = BASE_FILE_PATH + "users/";
USER_FILE_URL   = BASE_FILE_URL + "users/";

/** Product file path */
PRODUCT_FILE_PATH  = BASE_FILE_PATH + "products/";
PRODUCT_FILE_URL   = BASE_FILE_URL + "products/";

/** Ckeditor file path */
CKEDITOR_FILE_PATH 	= BASE_FILE_PATH + "ckeditor/";
CKEDITOR_FILE_URL 	= BASE_FILE_URL + "ckeditor/";

/** Slider file path */
SLIDER_FILE_PATH = BASE_FILE_PATH + "sliders/";
SLIDER_FILE_URL = BASE_FILE_URL + "sliders/";

/** Our team file path */
TEAM_FILE_PATH = BASE_FILE_PATH + "teams/";
TEAM_FILE_URL = BASE_FILE_URL + "teams/";

/** Testimonial file path */
TESTIMONIAL_FILE_PATH = BASE_FILE_PATH + "testimonials/";
TESTIMONIAL_FILE_URL  = BASE_FILE_URL + "testimonials/";

NO_IMAGE_URL = BASE_FILE_URL + "no_image.png";
PDF_IMAGE_URL = BASE_FILE_URL + "pdf.png";

VALID_IMAGE_EXTENSIONS = ["jpg", "png", "jpeg"];
NOT_VALID_IMAGE_ERROR  = "The file extensions are jpg, png and jpeg";

STATUS_ERROR   = "error";
STATUS_SUCCESS = "success";
ADMIN_GLOBAL_ERROR= "error";

SORT_DESC = -1;
SORT_ASC  = 1;

DEFAULT_LIMIT = 5;
DEFAULT_SKIP  = 5;

DEFAULT_API_LIMIT = 12;
DEFAULT_API_SKIP  = 12;

NOTIFICATION_LIMIT = 10;

/** Admin date format **/
BIRTHDAY_FORMAT  = "DD/MM/YYYY";
DATE_TIME_FORMAT = "DD/MM/YYYY ";
DEFAULT_DATE_TIME_FORMAT = "DD-MM-YYYY h:mm A";


/** Global status **/
ACTIVE 		            = 1;
INACTIVE 	            = 0;
DEACTIVE 		        = 0;
DELETED 		        = 1;
NOT_DELETED           	= 0;
NOT 		            = 0;
VERIFIED              	= 1;
NOT_VERIFIED          	= 0;
REJECTED          		= 2;
NOT_EXPIRED           	= 0;
EXPIRED                	= 1; 
NO_SKIP   	          	= 0;
NO_LIMIT  		        = 0;
NOT_SENT 		        = 0;
SENT     	            = 1;


/** User role id */
ROLE_ID_ADMIN 		= 1;
ROLE_ID_USER 	  	= 2;


/** Default mongo id */
DEFAULT_MONGOID = "9e9999999999d999c0be9b99"


/** FILE  **/
FILE_EXTENSIONS                    = ["jpeg", "jpg", "png", "pdf"];
FILE_EXTENSIONS_ERROR_MESSAGE      = "Invalid file, valid file extensions are " + FILE_EXTENSIONS + ". ";
FILE_MIME_EXTENSIONS               = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
FILE_MIME_EXTENSIONS_ERROR_MESSAGE = "Invalid file, valid image mime types are " + FILE_MIME_EXTENSIONS + ". ";

/** IMAGE */
IMAGE_EXTENSIONS                    = ["jpeg", "jpg", "png",];
IMAGE_EXTENSIONS_ERROR_MESSAGE      = "Invalid file, valid file extensions are " + IMAGE_EXTENSIONS + ". ";
IMAGE_MIME_EXTENSIONS               = ["image/jpeg", "image/jpg", "image/png"];
IMAGE_MIME_EXTENSIONS_ERROR_MESSAGE = "Invalid file, valid image mime types are " + IMAGE_MIME_EXTENSIONS + ". ";

/** VIDEO */
ALLOWED_VIDEO_EXTENSIONS 			=	["mp4","3gpp","x-ms-wmv"]; 
ALLOWED_VIDEO_ERROR_MESSAGE			= 	"Please select valid file, Valid file extensions are "+ALLOWED_VIDEO_EXTENSIONS.join(", ")+".";
ALLOWED_VIDEO_MIME_EXTENSIONS 		= 	["video/mp4","video/3gpp","video/x-ms-wmv"];
ALLOWED_VIDEO_MIME_ERROR_MESSAGE	= 	"Please select valid mime type, Valid mime types are "+ALLOWED_VIDEO_MIME_EXTENSIONS.join(", ")+".";

EXPORT_FILTERED         = "export_filtered";
VALIDATE_STRING_ROUND   = 10;
OTP_NUMBER_ROUND        = 4;
BCRYPT_SALT_ROUND       = 10;
ORDER_ID_ROUND   		= 9;
PASSWORD_MIN_LENGTH     = 6;
PASSWORD_MAX_LENGTH     = 20;
PASSWORD_ALPHANUMERIC_REGEX = [/^[A-Za-z0-9_@./#&+-]*$/];  // /^[A-Za-z0-9-+()]*$/;
NOT_ALLOWED_CHARACTERS_FOR_REGEX = ['(',')','+','*','?','[',']'];
EMAIL_REGEX = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
PASSWORD_REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,50}$";
NAME_REGEX = "^([a-z|A-Z]){2,}((?: [a-z|A-Z]{2,})){0,4}$";
DESCRIPTION_REGEX = "^(?![0-9]*$)(?![ #?!@$%^&*--]*$)[0-9a-zA-Z_@./#&+--,()\n$ ]+((?: [a-z|A-Z|0-9|_@./#&+--,%*$ ()\n]+)*)$"
ADDRESS_REGEX = "^(?![0-9]*$)(?![ #?!@$%^&*--]*$)[0-9a-zA-Z_@./#&+--,()\n$ ]+((?: [a-z|A-Z|0-9|_@./#&+--,%*$ ()\n]+)*)$"

/** mobile length  */
MOBILE_MIN_LENGTH = 7;
MOBILE_MAX_LENGTH = 15;

COLLATION_VALUE = { locale: "en_US", caseLevel: true};

/*** Character length validation */
MIN_NAME_LIMIT = 2;
MAX_NAME_LIMIT = 20;
MIN_CHARACTER_NAME_LIMIT 		= 2;
MAX_CHARACTER_NAME_LIMIT 		= 50;
MIN_CHARACTER_TITLE_LIMIT 		= 2;
MAX_CHARACTER_TITLE_LIMIT 		= 500;
MIN_CHARACTER_DESCRIPTION_LIMIT = 9; //with html tags
MAX_CHARACTER_DESCRIPTION_LIMIT = 20000;
MIN_COUNTRY_CODE_LIMIT = 2;
MAX_COUNTRY_CODE_LIMIT = 6;
MIN_DIAL_CODE_LIMIT = 1;
MAX_DIAL_CODE_LIMIT = 5;
MIN_PHONE_NUMBER_LIMIT = 6;
MAX_PHONE_NUMBER_LIMIT = 16;


USER_VERIFICATION_TYPE_EMAIL    = 'email';
USER_VERIFICATION_TYPE_MOBILE   = 'mobile';

NOT_ALLOWED_TAGS = [/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi];
NOT_ALLOWED_EMOJI= [';)',';)'];

/* One day in seconds */
// ONE_DAY_IN_SECONDS = 84600;
ONE_DAY_IN_SECONDS = 30000;
/* Random number length */
DEFAULT_RANDOM_NUMBER_LENGTH  = 6;
/** JWT config */
JWT_CONFIG = {
    algorithm   : 'RS256',
    private_key : 'kendra_12334_singles_56789_app',
    expire_time : '12h'
}


/*** Setting input type dropdown */
SETTING_INPUT_TYPE_DROPDOWN = [
	{
		input_id	: "text",
		input_name	: "Text"
	},
	{
		input_id	: "textarea",
		input_name	: "Textarea"
	}
];

/*** Setting validate type dropdown */
SETTINGS_VALIDATE_TYPE_DROPDOWN = [
	{
		input_id	: "number",
		input_name	: "Number"
	},
	{
		input_id	: "float",
		input_name	: "Float"
	},
	{
		input_id	: "percentage",
		input_name	: "Percentage"
	},
];

/** Search status for user **/
USER_STATUS_SEARCH_DROPDOWN = [
	{
		status_id	: ACTIVE,
		status_name	: "Active"
	},
	{
		status_id	: DEACTIVE,
		status_name	: "Inactive"
	},
	// {
	// 	status_id	: VERIFIED,
	// 	status_name	: "Verified"
	// },
	// {
	// 	status_id	: NOT_VERIFIED,
	// 	status_name	: "Not Verified"
	// }
];



/** Search gender for user **/
USER_GENDER_DROPDOWN = [
	{
		status_id	: "Male",
		status_name	: "Male"
	},
	{
		status_id	: "Female",
		status_name	: "Female"
	},
	{
		status_id	: "Other",
		status_name	: "Other"
	},
];


WEBSITE_SOCKET_URL  = process.env.URL;
NOTIFICATION_USER_SIGNUP_REQUEST = 'signup';
NOTIFICATION_MESSAGES = {
	'signup' : {
		'title' : 'User Signup'
	}
}

READ		= 1;
NOT_READ	= 0;

SEEN 		= 1;
NOT_SEEN 	= 0;

READ_ONLY	= 1;
NOT_READ_ONLY	= 0;

/** Notification type */
NOTIFICATION_USER_SIGNUP_REQUEST = 'signup';

FLASH_SETTING = "5000";
PROJECT_DEFAULT_EMAIL = "superadminkendrag@getnada.com";
ADMIN_FOOTER_HEADING = "2022 © Kendra G Singles Live";

REQUIRED = 1;
EDITABLE = 1;

/*** API status */
API_STATUS_SUCCESS  = true;
API_STATUS_ERROR    = false;
API_STATUS_UNAUTHORIZED	= 401;

API_STATUS_CODE_OK              = 200;
API_STATUS_CODE_NO_CONTENT      = 204;
API_STATUS_CODE_BAD_REQUEST     = 400;
API_STATUS_CODE_UNAUTHORIZED    = 401;
API_STATUS_CODE_NOT_FOUND       = 404;



USER_TYPES_SPECIAL = 1;
USER_TYPES_NORMAL  = 2;
USER_TYPES_SERVICE_PROVIDER = 3;

USER_TYPES = {};
USER_TYPES[USER_TYPES_SPECIAL] = "Special";
USER_TYPES[USER_TYPES_NORMAL]  = "User";
USER_TYPES[USER_TYPES_SERVICE_PROVIDER] = "Service Provider";