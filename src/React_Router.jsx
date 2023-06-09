import { Form, Link, NavLink, Navigate, Outlet } from 'react-router-dom'

export const _Form = () => <Form method="post" action="/path" />
export const _Link = () => <Link to="/path" />
export const _NavLink = () => <NavLink to="/path" />
export const _Navigate = () => <Navigate to="/path" />
export const _Outlet = () => <Outlet />
