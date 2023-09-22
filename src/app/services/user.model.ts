export interface User {
	uid: string;
	email: string;
	numberOfRatings?: number;
	displayName: string;
	userScore?: number;
	canEdit?: any[];
	courses?: any[];
	voted?: any[];
}