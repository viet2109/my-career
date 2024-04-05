import AboutUs from "~/pages/AboutUs";
import Home from "~/pages/Home";
import QuizHolland from "~/pages/QuizHolland";
import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";

import DefaultLayout from "~/layouts/DefaultLayout";

import config from "~/config";
import Advise from "~/pages/Advise";
import Experience from "~/pages/Experience";
import Result from "~/pages/Result";
import PageNotFound from "~/pages/PageNotFound";
import Profile from "~/pages/Profile";
import SignUpRole from "~/pages/SignUpRole";
import ForgotPassword from "~/pages/ForgotPassword";
import ResetPassword from "~/pages/ResetPassword";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  {
    path: config.routes["about-us"],
    component: AboutUs,
    layout: DefaultLayout,
  },

  {
    path: config.routes.experience,
    component: Experience,
    layout: DefaultLayout,
  },
  { path: config.routes.advise, component: Advise, layout: DefaultLayout },
  { path: config.routes.signin, component: SignIn, layout: DefaultLayout },
  { path: config.routes.signup, component: SignUp, layout: DefaultLayout },
  {
    path: config.routes["signup-role"],
    component: SignUpRole,
    layout: DefaultLayout,
  },
  { path: config.routes.profile, component: Profile, layout: DefaultLayout },
  { path: config.routes["forgot-password"], component: ForgotPassword, layout: DefaultLayout },
  { path: config.routes["reset-password"], component: ResetPassword, layout: DefaultLayout },
  { path: config.routes["page-not-found"], component: PageNotFound },
];

const privateRoutes = [
  { path: config.routes.quiz, component: QuizHolland, layout: DefaultLayout },
  { path: config.routes.result, component: Result, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
