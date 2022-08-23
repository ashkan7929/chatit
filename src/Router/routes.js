import Login from "../auth/Login";
import Register from "../auth/Register";
import Main from "../Main/Main";
import NotFound from "../Partials/NotFound";

export default [
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/auth/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Main
    },
    {
        component: NotFound
    }
]