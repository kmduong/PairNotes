export interface Note {
    id?: string;
    content?: string;
    upvotes?: number; 
    voted?: any[];
    downVoted?: any[];
    tags?: any[];
    name?: string;
    lecture?: string;
    course?: string;
    ownedBy?: string;
    ownedByID?: string;
    canEdit?: any[];
}