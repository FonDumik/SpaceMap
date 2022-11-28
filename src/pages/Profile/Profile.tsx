import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { mainStateSelector, mainStateUserSelector } from "../../selectors";
import { useDefaultStyles } from "../../models/main/styles";

export const Profile: React.FC = () => {
  const mainState = useSelector(mainStateSelector);
  const userState = useSelector(mainStateUserSelector);
  const classes = useStyles();
  const defaultClasses = useDefaultStyles();
  return (
    <>
      {mainState.additional.isUserAuthorized ? (
        <div className={defaultClasses.defaultSize}>
          <div className={classes.userProfileWrapper}>
            <div className={classes.userLayout}>
              {/* ФОТО ПОЛЬЗОВАТЕЛЯ */}
              <img
                src={userState?.userPhotoUrl ?? ""}
                alt={`${userState?.nickname}img`}
                className={classes.userPhotoImg}
              />
              <Typography variant='h5' className={classes.userRole}>
                {userState?.role}
              </Typography>
            </div>
            <div className={`${classes.userLayout} ${classes.userInfoWrapper}`}>
              {/* ИНФО О ПОЛЬЗОВАТЕЛЕ */}
              <Typography
                variant='h2'
                component='div'
                className={defaultClasses.mainTitle}>
                {userState?.name}
                <Typography variant='h6' align='center'>
                  {userState?.nickname}
                </Typography>
                <Typography variant='h6' align='center'>
                  {userState?.email}
                </Typography>
              </Typography>
              <div className={classes.userInfoBlock}>
                <Typography
                  variant='subtitle2'
                  component='div'
                  className={classes.userInfoBlockTitle}>
                  Город:{" "}
                  <Typography variant='h4'>{userState?.residence}</Typography>
                </Typography>
                <Typography
                  variant='body1'
                  component='div'
                  className={classes.userInfoBlockTitle}>
                  Создано меток:
                  <Typography variant='h4'>23</Typography>
                </Typography>
                <Typography
                  variant='body1'
                  component='div'
                  className={classes.userInfoBlockTitle}>
                  Посетил меток:
                  <Typography variant='h4'>56</Typography>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Typography
          variant='h4'
          component='div'
          className={defaultClasses.centeredObject}>
          Вы не авторизованы
        </Typography>
      )}
    </>
  );
};
