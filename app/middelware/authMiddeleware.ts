import { withAuth, NextRequestWithAuth } from "next-auth/middleware"


const authMiddleware = withAuth(
  function middelware (request: NextRequestWithAuth) {
    console.log ("the request : ", request.nextUrl.pathname);
    console.log (request.nextauth.token);
}

) 

export default authMiddleware;