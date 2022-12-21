const whiteList = ["http://localhost:1234", "http://192.168.200.197:1234"];

const corsOption = {
  origin(origin, callback) {
    whiteList.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS"));
  },
};

export default corsOption;
