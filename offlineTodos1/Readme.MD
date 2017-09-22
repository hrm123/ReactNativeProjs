npm install rimraf -g
npm install -g react-native-cli
use react-native run-android for now (instead of built in task)
change android/app/build.gradle - entryFile: "artifacts/index.android.js"
In MainApplication.java add following method into the class -
  @Override
  protected String getJSMainModuleName() {
    return "artifacts/index.android";
  }


Todos
1. If invalid password is given when reopening the app, app displays the initial todos and not the persisted todos.. need to fix this.
2. Event and time based reminder for tasks to be done yet.