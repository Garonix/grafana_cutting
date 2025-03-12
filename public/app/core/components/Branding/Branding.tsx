import { css, cx } from '@emotion/css';
import { FC } from 'react';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const LoginLogo: FC<BrandComponentProps & { logo?: string }> = ({ className, logo }) => {
  const logoStyle = css({
    maxWidth: '200px',
    height: 'auto',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });

  return (
    <img 
      className={cx(logoStyle, className)} 
      src={`${logo ? logo : 'public/img/custom-logo.svg'}`} 
      alt="Logo" 
    />
  );
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
      background: 'linear-gradient(135deg, #1e5799 0%, #207cca 35%, #2989d8 50%, #7db9e8 100%)',
      opacity: 0.9,
      transition: 'opacity 1s ease-in-out',
      zIndex: -1,
    },
    '&:after': {
      content: '""',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      background: 'url("public/img/background.svg")',
      backgroundSize: 'cover',
      opacity: 0.1,
      zIndex: -1,
      animation: 'backgroundFloat 20s ease-in-out infinite',
    },
    '@keyframes backgroundFloat': {
      '0%': {
        transform: 'scale(1) rotate(0deg)',
      },
      '50%': {
        transform: 'scale(1.1) rotate(1deg)',
      },
      '100%': {
        transform: 'scale(1) rotate(0deg)',
      },
    },
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  const menuLogoStyle = css({
    height: '32px',
    transition: 'filter 0.3s ease-in-out',
    '&:hover': {
      filter: 'brightness(1.2)',
    },
  });

  return (
    <img 
      className={cx(menuLogoStyle, className)} 
      src="public/img/custom-logo.svg" 
      alt="Logo" 
    />
  );
};

const LoginBoxBackground = () => {
  return css({
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
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
