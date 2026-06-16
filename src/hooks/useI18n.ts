import { useTranslation } from 'react-i18next';

/**
 * Custom hook for using translations in components
 * Usage:
 * const { t, i18n } = useI18n();
 * const text = t('common.home'); // Get translated text
 * i18n.changeLanguage('th'); // Change language
 */
export const useI18n = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};
