import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/mainpage";
import DetailPage from "../pages/DetailPage/detailpage";
import {useDispatch} from "react-redux";
import {getCharacters} from "../requests/getCharacters";
import {setData} from "../redux/slices/dataSlice";

const MainRoutes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    ( async () => {
      try {
        const data = await getCharacters()
        dispatch(setData(data))
      } catch (e) {
        console.log(e)
      }
    } )()
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/:id'} element={<DetailPage />} />
    </Routes>
  );
};

export default MainRoutes;