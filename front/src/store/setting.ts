import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Navigation = 'side' | 'head' | 'mix';

export const useSettingStore = defineStore('setting', () => {
  const navigation = ref<Navigation>('side');
  const useTabs = ref<boolean>(true);
  const theme = ref('side-dark');
  const contentClass = ref('common');

  function setNavigation(nav: Navigation) {
    navigation.value = nav;
  }
  function setTheme(value: string) {
    theme.value = value;
  }
  function setContentClass(className: string) {
    contentClass.value = className;
  }
  return { navigation, useTabs, theme, contentClass, setNavigation, setTheme, setContentClass };
});
