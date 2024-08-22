import { RefreshToken } from "./refresh-token.model";

export interface AuthenticateModel {
	accessToken: string;
	refreshToken: RefreshToken;
}
