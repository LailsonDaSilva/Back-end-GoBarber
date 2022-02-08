declare namespace Express{
    export interface Request{
        user:{
            id: string;
        }
    }
}

declare namespace Express{
    export interface Request{    
            file: Multer.File;
    }
}