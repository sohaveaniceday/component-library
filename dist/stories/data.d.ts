export declare const clientDatum: {
    id: string;
    name: string;
    slug: string;
    active: boolean;
    users: ({
        id: string;
        emailAddress: string;
        name: string;
        picture: string;
        emailVerified: boolean;
        createdAt: string;
        lastLogin: string;
        blocked: boolean;
        identities: {
            id: string;
            connection: string;
            provider: string;
        }[];
        internal: boolean;
        termsAccepted: boolean;
        termsAcceptedTimestamp: string;
        active: boolean;
        permissions?: undefined;
    } | {
        id: string;
        emailAddress: string;
        name: string;
        picture: string;
        emailVerified: boolean;
        createdAt: string;
        lastLogin: string;
        blocked: boolean;
        identities: {
            id: string;
            connection: string;
            provider: string;
        }[];
        termsAccepted: boolean;
        termsAcceptedTimestamp: string;
        permissions: string[];
        internal: boolean;
        active?: undefined;
    })[];
    getRelatedEntities: ({ users }: any) => {
        users: any;
    };
};
export declare const userData: {
    id: string;
    emailAddress: string;
    name: string;
    picture: string;
    emailVerified: boolean;
    createdAt: string;
    lastLogin: string;
    blocked: boolean;
    identities: {
        id: string;
        connection: string;
        provider: string;
    }[];
    internal: boolean;
    termsAccepted: boolean;
    termsAcceptedTimestamp: string;
    active: boolean;
}[];
