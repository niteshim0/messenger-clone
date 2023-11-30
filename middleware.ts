//for protecting the routes
import {withAuth} from "next-auth/middleware";

export default withAuth({
    pages:{
      signIn:"/"
    }
});

export const config = {
  matcher: [
    "/users/:path*",
    "/conversations/:path*"
  ]
};