import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import RootLayout from 'RootLayout';
import ErrorPage from 'routes/ErrorPage/ErrorPage';
import MainPage from 'routes/MainPage';
import ViewsPage from 'routes/ViewsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="main" index element={<MainPage />} />
      <Route path="views" element={<ViewsPage />} />
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
