import { Body, Controller, Post, Req } from "@nestjs/common";

@Controller("auth")
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin/local")
  signin(@Req() request: { user: UserDocument }) {
    return this.authService.signinLocal(request.user);
  }

  @Post("signup/local")
  signup(@Body() body: CreateUserDto) {
    return this.authService.signupLocal(body);
  }
}
