import { css } from '@emotion/css';
import { useEffect, useState } from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';

export const ClockPanel = () => {
  const styles = useStyles2(getStyles);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return {
      date: `${year}/${month}/${day}`,
      time: `${hours}:${minutes}:${seconds}`
    };
  };

  const { date, time: timeStr } = formatDate(time);

  return (
    <div className={styles.container}>
      <div className={styles.clockWrapper}>
        <div className={styles.date}>{date}</div>
        <div className={styles.time}>{timeStr}</div>
      </div>
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent',
    }),
    clockWrapper: css({
      textAlign: 'center',
    }),
    date: css({
      fontSize: theme.typography.h4.fontSize,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing(0.5),
    }),
    time: css({
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.colors.text.primary,
    }),
  };
}; 