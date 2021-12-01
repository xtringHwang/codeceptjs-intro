const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  multiple: {
    basic: {
      // $ npx codeceptjs run-multiple basic 명령어를 통해 다수의 브라우저를 동시에 테스트 가능하다
      browers: ['chrome', 'firefox'],
    }
  },
  helpers: {
    Puppeteer: {
      url: 'http://executeautomation.com/demosite',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-intro',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
