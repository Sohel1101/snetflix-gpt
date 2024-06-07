import Login from './Login'
import Browse from './Browse'
import MovieCast from './MovieCast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/cast",
            element: <MovieCast />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body