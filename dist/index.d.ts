import { ValidPasswordType } from "./enums/valid-password.enum";
export declare function validPassword(password: string, type?: ValidPasswordType): {
    validate?: boolean;
    errorMessage?: string;
};
