export interface User {
    name: string;
    email: string;
    password: string;
    accountType: 'Cliente' | 'Vendedor';
    acceptedTerms: boolean;
}  