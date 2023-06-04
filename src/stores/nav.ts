import { defineStore } from 'pinia';

export const useNavStore = defineStore('navs', {
  state() {
    return {
      navs: [] as any[],
    };
  },
  getters: {
    tops(state) {
      return state.navs.filter(v => v.pid === 0);
    },
  },
  actions: {
    set(navs: any[]) {
      this.navs = navs;
    },
    getMenusByPid(pid: string) {
      return this.navs.filter(v => v.pid === pid);
    },
  },
});
