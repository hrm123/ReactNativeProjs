npm install rimraf -g
npm install -g react-native-cli
use react-native run-android for now (instead of built in task)
change android/app/build.gradle - entryFile: "artifacts/index.android.js"
In MainApplication.java add following method into the class -
  @Override
  protected String getJSMainModuleName() {
    return "artifacts/index.android";
  }
