export const classStore = {
  classList: [],
  add(className) {
    this.classList.push(className);
  },
  clear() {
    this.classList = [];
  },
};