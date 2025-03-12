import { css, cx } from '@emotion/css';
import { FC } from 'react';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const LoginLogo: FC<BrandComponentProps & { logo?: string }> = ({ className, logo }) => {
  return <img className={className} src={`${logo ? logo : 'public/img/custom-logo.svg'}`} alt="Logo" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const background = css({
    '&:before': {
      content: '""',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      background: '#ffffff',
      opacity: 1,
      transition: 'opacity 3s ease-in-out',
    },
  });

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/custom-logo.svg" alt="Logo" />;
};

const LoginBoxBackground = () => {
  return css({
    background: '#ffffff',
    backgroundSize: 'cover',
  });
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = '监控平台';
  static LoginTitle = '欢迎使用监控平台';
  static HideEdition = true;
  static GetLoginSubTitle = (): null | string => {
    return '登录以继续';
  };
}
