import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home'
import Quiz from "../Quiz/Quiz";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Statistics from "../Statistics/Statistics";
import { loadQuizData } from "../DataLoader/DataLoader";
export const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:loadQuizData,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/quiz',
            element:<Quiz></Quiz>
        },
        {
            path:'/quiz/:id',
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
            element:<Quiz></Quiz>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        }
    ]
}])