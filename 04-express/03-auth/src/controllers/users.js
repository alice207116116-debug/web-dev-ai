import * as userService from "../services/users.js";

// 컨트롤러가 하는 일은 request -> service -> response 
// signup
export const signup = async (req, res) => {
    await userService.interUser(req.body);
    res.sendStatus(201);
};

// login
export const login = async (req, res) => {
  const result = await userService.login(req.body);
  if (result) {
    // 로그인 성공
    res.sendStatus(200);
  } else {
    // 로그인 실패 
    res.sendStatus(401);
  }
};