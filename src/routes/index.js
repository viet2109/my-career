import AboutUs from "~/pages/AboutUs";
import Home from "~/pages/Home";
import QuizHolland from "~/pages/QuizHolland";
import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";

import DefaultLayout from "~/layouts/DefaultLayout";

import config from "~/config";
import Advise from "~/pages/Advise";
import Experience from "~/pages/Experience";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes["about-us"], component: AboutUs, layout: DefaultLayout },
  { path: config.routes.quiz, component: QuizHolland, layout: DefaultLayout },
  { path: config.routes.experience, component: Experience, layout: DefaultLayout },
  { path: config.routes.advise, component: Advise, layout: DefaultLayout },
  { path: config.routes.signin, component: SignIn, layout: DefaultLayout },
  { path: config.routes.signup, component: SignUp, layout: DefaultLayout }
  
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };

