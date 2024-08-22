import { RefreshToken } from "./refresh-token.model";
import { UserModel } from "./user.model";

export interface AuthenticateModel {
	user: UserModel;
	accessToken: string;
	refreshToken: RefreshToken;
}
