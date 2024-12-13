export class AnalyzeUtils {
  constructor(options = {}) {
    this.data = {};
    this.init(options);
  }
  init(options) {
    const { name } = options;
    this.data = {
      name,
    };
  }
  static analyze(data) {
    console.log("analyze");
  }
}
