import React, { useEffect } from "react";
import s from "./HW12.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeId, InitStateType } from "./bll/themeReducer";

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
];

const HW12 = () => {
  const dispatch = useDispatch();

  const themeId = useSelector(
    (state: { theme: InitStateType }) => state.theme.themeId
  );

  const change = (id: number) => {
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div id={"hw12"} style={{ padding: "0 30px" }}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>

      <div className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          options={themes}
          onChangeOption={change}
        />
      </div>
    </div>
  );
};

export default HW12;
