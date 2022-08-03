import { Produto } from '../entities/Produto';

declare module 'express-serve-static-core' {
    
    interface Request {
        produto?: Produto | null
    }

    interface Response {
        produto?: Produto | null
    }
    
}
