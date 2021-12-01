Feature('LoginNavigate');

Scenario('Login to Demo site', ({ I }) => {
  // 나는 이 페이지에 있는가
  I.amOnPage('/Login.html')

  // 해당하는 곳에 text를 채워라
  I.fillField("UserName", "admin")
  I.fillField("Password", "password")

  // input 중 type=submit인 것을 클릭하라
  I.click("//input[@type='submit']")

  // 요소가 페이지에 나타날 때까지 기다린다(기본적으로 1초 동안 기다림, 두번째 param에서 시간 설정가능)
  // 요소는 CSS 또는 XPath로 찾을 수 있습니다.
  I.waitForElement({xpath: "//input[@name='Initial']"})

  // output 폴더에 스크린샷으로 저장하라
  I.saveScreenshot('loggedIn.jpg')

  // 드롭다운 선택에서 옵션을 선택합니다.
  // 필드는 레이블로 검색됩니다 | 이름 | CSS | XPath. 옵션은 보이는 텍스트 또는 값으로 선택됩니다.
  I.selectOption({css: 'select[name=TitleId]'}, "Mr.")

  I.saveScreenshot('selectOption.jpg')

  // 멈춰~!
  pause()
  // Interactive shell started
  // pause 후에는 terminal에서 명령어를 통해서 test가 가능합니다.
  //
  // I.checkOption("Hindi") // checkbox의 Hindi에 체크
  // I.fillField("FirstName", "Karthik")
});
