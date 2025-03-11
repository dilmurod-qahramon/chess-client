import { Roles } from '../../core/types/roles.enum';

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  roles: Roles[];
}
