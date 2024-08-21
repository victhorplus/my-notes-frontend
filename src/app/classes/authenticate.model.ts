export interface AuthenticateModel {
	accessToken: string;
	refreshToke: {
		id: number;
		userId: string;
		expiresIn: string;
		updatedAt: string;
		createdAt: string;
	};
}