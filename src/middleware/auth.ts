var isAuthenticated = function (req: any, res: any, next: any) {
  const bla = false;
  if (bla) {
    console.log("User is allowed");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export default isAuthenticated;
