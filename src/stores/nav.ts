import { defineStore } from 'pinia';

export interface Nav {
  id: number;
  pid: number;
  subjectName: string;
  subjectNameKey: string;
}
export interface NavTree extends Nav {
  children?: this[];
}

export const useNavStore = defineStore('navs', {
  state() {
    return {
      navs: [] as Nav[],
    };
  },
  getters: {
    tops(state) {
      return state.navs.filter(v => v.pid === 0);
    },
  },
  actions: {
    set(navs: Nav[]) {
      this.navs = navs;
    },
    getMenusByPid(pid: number) {
      return this.navs.filter(v => v.pid === pid);
    },
    getParents(id: number) {
      const ret = [] as Nav[];
      let current = this.navs.find(v => v.id === id);
      while (current) {
        ret.unshift(current);
        current = this.navs.find(v => v.id === current!.pid);
      }
      return ret;
    },
    getSmartBrothers(id: number) {
      const current = this.navs.find(v => v.id === id);
      if (current?.pid === 0) {
        return {
          ...current,
          children: this.navs.filter(v => v.pid === current.id),
        } as NavTree;
      }
      if (current) {
        const parent = this.navs.find(v => v.id === current.pid);
        if (parent) {
          return {
            ...parent,
            children: this.navs.filter(v => v.pid === current.pid),
          } as NavTree;
        }
      }
      return null;
    },
    getCurrent(id: number) {
      return this.navs.find(v => v.id === id);
    },
    getNavByKey(key: string) {
      return this.navs.find(v => v.subjectNameKey === key);
    },
  },
});
