import Home from "~/pages/Home";
import AboutUs from "~/pages/AboutUs";
import AboutUsMission from "~/pages/AboutUsMission";
import AboutUsTeam from "~/pages/AboutUsTeam";
import CoursePupil from "~/pages/CoursePupil";
import CourseStudent from "~/pages/CourseStudent";
import CourseGraduate from "~/pages/CourseGraduate";
import QuizHolland from "~/pages/QuizHolland";
import QuizDISC from "~/pages/QuizDISC";
import Career from "~/pages/Career";
import CareerMajor from "~/pages/CareerMajor";
import CareerSchool from "~/pages/CareerSchool";
import CareerTeam from "~/pages/CareerTeam";
import EventSchedule from "~/pages/EventSchedule";
import EventBook from "~/pages/EventBook";
import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";

import  DefaultLayout from "~/layouts/DefaultLayout";

import config from "~/config";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes["about-us"].index, component: AboutUs, layout: DefaultLayout },
  { path: config.routes["about-us"].misson, component: AboutUsMission, layout: DefaultLayout },
  { path: config.routes["about-us"].team, component: AboutUsTeam, layout: DefaultLayout },
  { path: config.routes.course.pupil, component: CoursePupil, layout: DefaultLayout },
  { path: config.routes.course.student, component: CourseStudent, layout: DefaultLayout },
  { path: config.routes.course.graduate, component: CourseGraduate, layout: DefaultLayout },
  { path: config.routes.quiz.holland, component: QuizHolland, layout: DefaultLayout },
  { path: config.routes.quiz.disc, component: QuizDISC, layout: DefaultLayout },
  { path: config.routes.career.index, component: Career, layout: DefaultLayout },
  { path: config.routes.career.major, component: CareerMajor, layout: DefaultLayout },
  { path: config.routes.career.school, component: CareerSchool, layout: DefaultLayout },
  { path: config.routes.career.team, component: CareerTeam, layout: DefaultLayout },
  { path: config.routes.event.schedule, component: EventSchedule, layout: DefaultLayout },
  { path: config.routes.event.book, component: EventBook, layout: DefaultLayout },
  { path: config.routes.signin, component: SignIn, layout: DefaultLayout },
  { path: config.routes.signup, component: SignUp, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
