import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),  // This is your home route
  {
    path: '/register',
    file: 'routes/register.tsx',
  },
  {
    path: '/login',
    file: 'routes/login.tsx',
  },
  {
    path: '/tripform',
    file: 'routes/tripform.tsx'
  }
] satisfies RouteConfig;
