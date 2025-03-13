/**
 * @file Welcome.tsx
 * @brief This file defines the WelcomeBanner component, which is displayed on the Grafana welcome page.
 *
 * The WelcomeBanner component provides helpful links to Grafana documentation, tutorials, community resources, and the public Slack channel.
 * It is designed to be responsive and adapt to different screen sizes.
 */

import { css } from '@emotion/css';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';

// 定义帮助选项，包括标签和链接
const helpOptions = [
  { value: 0, label: 'Documentation', href: 'https://grafana.com/docs/grafana/latest' },
  { value: 1, label: 'Tutorials', href: 'https://grafana.com/tutorials' },
  { value: 2, label: 'Community', href: 'https://community.grafana.com' },
  { value: 3, label: 'Public Slack', href: 'http://slack.grafana.com' },
];

// WelcomeBanner 组件
export const WelcomeBanner = () => {
  // 使用 useStyles2 hook 获取样式
  const styles = useStyles2(getStyles);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Grafana</h1>
      <div className={styles.help}>
        <h3 className={styles.helpText}>Need help?</h3>
        <div className={styles.helpLinks}>
          {helpOptions.map((option, index) => {
            return (
              <a
                key={`${option.label}-${index}`}
                className={styles.helpLink}
                href={`${option.href}?utm_source=grafana_gettingstarted`}
              >
                {option.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// 定义样式
const getStyles = (theme: GrafanaTheme2) => {
  return {
    container: css({
      display: 'flex',
      backgroundSize: 'cover',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 3),

      // 响应式布局：在大屏幕上，背景位置为 0px，flex 布局方向为 column，对齐方式为 flex-start，内容居中
      [theme.breakpoints.down('lg')]: {
        backgroundPosition: '0px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      },

      // 响应式布局：在小屏幕上，padding 为 theme.spacing(0, 1)
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 1),
      },
    }),
    title: css({
      marginBottom: 0,

      // 响应式布局：在大屏幕上，marginBottom 为 theme.spacing(1)
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(1),
      },

      // 响应式布局：在中等屏幕上，字体大小为 theme.typography.h2.fontSize
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h2.fontSize,
      },
      // 响应式布局：在小屏幕上，字体大小为 theme.typography.h3.fontSize
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h3.fontSize,
      },
    }),
    help: css({
      display: 'flex',
      alignItems: 'baseline',
    }),
    helpText: css({
      marginRight: theme.spacing(2),
      marginBottom: 0,

      // 响应式布局：在中等屏幕上，字体大小为 theme.typography.h4.fontSize
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h4.fontSize,
      },

      // 响应式布局：在小屏幕上，不显示
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }),
    helpLinks: css({
      display: 'flex',
      flexWrap: 'wrap',
    }),
    helpLink: css({
      marginRight: theme.spacing(2),
      textDecoration: 'underline',
      textWrap: 'nowrap',

      // 响应式布局：在小屏幕上，marginRight 为 theme.spacing(1)
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(1),
      },
    }),
  };
};
