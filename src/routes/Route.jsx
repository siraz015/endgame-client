import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CollegeDetails from "../components/CollegeCard/CollegeDetails";
import CollegeRoute from "../components/CollegeRoute/CollegeRoute";
import AdmissionRoute from "../components/AdmissionRoute/AdmissionRoute";
import AddAdmission from "../components/AdmissionRoute/AddAdmission";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MyCollege from "../pages/MyCollege/MyCollege";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/collegeDetails/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({params}) => fetch(`https://endgame-task-server-chi.vercel.app/collegeDetails/${params.id}`)
            },
            {
                path: '/allColleges',
                element: <CollegeRoute></CollegeRoute>
            },
            {
                path: '/admissionRoute',
                element: <AdmissionRoute></AdmissionRoute>
            },
            {
                path: '/addAdmission/:id',
                element: <AddAdmission></AddAdmission>,
                loader: ({params}) => fetch(`https://endgame-task-server-chi.vercel.app/collegeDetails/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/mycollege',
                element: <MyCollege></MyCollege>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);