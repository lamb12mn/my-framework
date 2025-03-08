import dayjs, { locale } from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import updateLocale from 'dayjs/plugin/updateLocale';
import { localStg } from '@/utils/localforage/storage';
dayjs.extend(updateLocale);
/**
 * Set dayjs locale
 *
 * @param lang
 */
export function setDayjsLocale(lang: App.I18n.LangType = 'zh-CN') {
  const localMap = {
    'zh-CN': 'zh-cn',
    'en-US': 'en'
  } satisfies Record<App.I18n.LangType, string>;

  const l = lang || localStg.get('lang') || 'zh-CN';
  debugger;
  dayjs.updateLocale(localMap[l], {
    weekStart: 3
  });
  console.log(11111111111, localMap[l]);
  locale(localMap[l]);
}
