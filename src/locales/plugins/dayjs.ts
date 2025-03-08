import { extend } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { setDayjsLocale } from '../dayjs';

export function setupDayjs() {
  extend(localeData);

  setDayjsLocale();
}
