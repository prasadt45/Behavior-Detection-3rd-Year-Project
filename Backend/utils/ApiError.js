class ApiError extends Error{
    constructor(
        statusCode , 
        message = "Something Went Wrong" ,
        errors = [] , 
        stack = ""
    ){
        super(message); // Call the parent (Error) class constructor with the message.
        this.statusCode = statusCode; // HTTP status code to indicate error type.
        this.data = null; // Placeholder for any data (usually null in errors).
        this.message = message; // Error message for debugging or client communication.
        this.success = false; // Always `false` for errors.
        this.errors = errors; // Additional error details, e.g., an array of issues.

        // Set the stack trace. Use the provided stack if given; otherwise, capture it.
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture the stack trace for debugging.
        }
    }
}

export {ApiError}