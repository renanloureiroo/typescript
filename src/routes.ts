// import { Router } from "express"

import { Request, Response } from "express"

import CreateCourseService from "./CreateCourseService"

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Dani",
  })

  CreateCourseService.execute({
    name: "ReactJs",
    educator: "Diego",
    duration: 10,
  })

  return response.send()
}
