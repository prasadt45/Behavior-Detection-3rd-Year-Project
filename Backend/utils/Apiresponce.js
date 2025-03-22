class Apiresponce{
    constructor(statusCode , data , message="Success"){
        this.statusCode = statusCode; // HTTP status code to indicate success or error.
        this.data = data; // The actual response data, such as user info or results.
        this.message = message; // A human-readable message for clients.
        this.success = statusCode < 400; // Boolean indicating success (status codes < 400 are considered successful).
    }
}

export {Apiresponce}