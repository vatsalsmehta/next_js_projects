import { Response } from "express";

export function errorResponse (err: Error, response:Response) {
    if (err instanceof CustomErrors) {
        return response.status(err.statusCode).send({
            "error": err.message
        })

    } else {
        // if error not matching any of the errors we have listed below then return 500
        return response.status(500).send({
            "error": err.message
        })
    }
}

export class CustomErrors extends Error {
    statusCode: number;
    details: any;

    constructor(message: string, details?: any, statusCode?: number) {
        super(message);
        this.details = details;
        this.statusCode = statusCode ?? 500;
    }
}

export class BadRequestError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 400);
    }
    
}

export class UnauthorizedError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 401);
    }
}

export class ForbiddenError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 403);
    }
}

export class NotFoundError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 404);
    }
}

export class ConflictError extends CustomErrors {
    constructor(message: string, details?: object) {
        super(message, details, 409);
    }
}

export class InternalServerError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 500);
    }
}

export class DependencyError extends CustomErrors {
    constructor(message: string, details?: any) {
        super(message, details, 502);
    }
}
