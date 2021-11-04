// import { Router } from "express"

import { Request, Response } from "express"

import CreateCourseService from "./CreateCourseService"

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute("Nodejs", 10, "Dani")

  return response.send()
}
