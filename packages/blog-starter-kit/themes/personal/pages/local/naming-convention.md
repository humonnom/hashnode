## 들어가며

"좋은 코드는 읽기 쉬운 코드다"라는 말을 들어보셨을 거예요. 그리고 그 읽기 쉬운 코드의 가장 기본이 되는 것이 바로 \*\*네이밍(이름 짓기)\*\*입니다.

부트캠프에서 프론트엔드 강사로 일하면서 학생들의 코드를 리뷰하는 일도 하고 있어요. 그러면서 초보 개발자들이 가장 \*\*자주 실수하는 부분이 바로 '이름 짓기'\*\*라는 것을 발견했습니다. 이 글에서는 실제 코드 리뷰 사례를 바탕으로, 실무에서 중요하게 다뤄지는 네이밍 원칙들을 소개하려고 합니다.

## 왜 네이밍이 중요할까요?

코드는 작성하는 시간보다 **읽는 시간이 훨씬 더 많습니다.** 여러분이 작성한 코드는:

* 팀원들이 읽고 이해해야 하고

* 6개월 후 여러분 자신이 다시 봐야 하고

* 새로운 팀원이 온보딩할 때 참고해야 합니다


좋은 이름은 주석 없이도 코드의 의도를 명확하게 전달하고, 나쁜 이름은 코드를 읽는 사람을 혼란스럽게 만들어요.

---

## 1\. 단축어는 지양하세요

### ❌ Before

```html
<a href="/index.html" alt="로고" class="mb_logo"></a>
```

* `mb_logo`에서 mb가 mobile인지, main\_banner인지 바로 이해하기 어렵습니다


### ✅ After

```html
<a href="/index.html" alt="로고" class="mobile_logo"></a>
```

### ❌ Before

```css
.bn {
  background-color: blue;
}
```

* `bn`이 의미하는 바가 무엇 인지 한눈에 알기 어렵습니다.(banner? button?)


### ✅ After

```css
.banner {
  background-color: blue;
}
```

### 핵심 원칙

> 일반적으로 매우 긴 단어가 아니면 줄여쓰지 않는 게 더 이득입니다. 한눈에 알 수 있기 때문이죠.

단어를 줄여서 얻는 타이핑 이득보다, 그 의미를 파악하는 데 드는 비용이 훨씬 큽니다.

**예외:** 그런데 업계에서 널리 사용되는 약어도 있죠. 이런 약어는 사용해도 됩니다.

* `btn` (button)

* `img` (image)

* `nav` (navigation)


명확하게 `button`, `image`로 쓸지 약어를 사용할지 정해진 팀의 컨벤션이 있다면 따르면 됩니다.

---

## 2\. 의미를 알 수 있는 이름으로 짓기

### ❌ Before(숫자를 사용하거나 의미를 알 수 없는 키워드를 사용하는 경우)

```html
<div class="login_v2_but">
  <p>간편 로그인하기</p>
</div>

<section class="section section_banner section_banner_02">
```

### 문제점

* `but`이 무슨 뜻인지 알 수 없습니다

* `v2`는 보통 버전을 의미하는데, v1이 없는 상황에서 사용되어 혼란스럽습니다

* `section_banner_02`에 단순히 숫자로 표현되어 있어 어떤 스타일을 담고 있는지 유추가 되지 않습니다


### ✅ After

```html
<div class="social_login_section">
  <p>간편 로그인하기</p>
</div>

<section class="section section_banner section_bottom">
```

### 핵심 원칙

클래스 이름만 보고도 그것이 무엇을 나타내는지 명확해야 합니다. 만약 여러분이 작성한 이름을 동료가 보고 "이 변수 이름 어떤 의미인가요?"라고 물어보는 일이 잦다면, 좋은 이름이 아니어서 그럴 수 있습니다.

---

## 3\. 가변적 특성이 아니라 핵심 특성을 드러내기

### ❌ Before

```css
.second {
  text-align: right;
}
```

### 문제점

`second`는 단순히 두 번째라는 순서를 나타낼 뿐입니다. 만약 나중에 순서가 바뀌거나, 세 번째 요소가 같은 스타일을 필요로 한다면 이름이 무의미해집니다.

### ✅ After

```css
.reverse {
  text-align: right;
}
```

해당 스타일은, 섹션들 중에 두번째 섹션만 디자인이 반대로 되어있어 필요한 스타일입니다. 그러므로 의미적으로 좌우가 반대라는 것을 알 수 있도록 클래스 이름을 지어줍니다.

### 핵심 원칙

* **순서**보다는 **역할**을 나타내세요

* **위치**보다는 **목적**을 나타내세요

* 변하지 않는 본질적인 특성을 이름에 담으세요


---

## 4\. 함수 이름은 동사로 짓기

### ❌ Before

```javascript
const changeIsOpen = () => {
  setIsOpen(!isOpen);
}
```

### 문제점

`changeIsOpen`은 isOpen을 어떻게 바꿀 것인지 불명확합니다. true로? false로? 반전시킬 건가요?

### ✅ After

```javascript
const toggleDropdown = () => {
  setIsOpen(!isOpen);
}
```

### 핵심 원칙

함수는 **동작**을 수행하므로 동사로 시작해야 합니다.

**자주 사용하는 동사들:**

* `get` - 값을 가져올 때

* `set` - 값을 설정할 때

* `fetch` - API에서 데이터를 가져올 때

* `load` - 데이터를 불러올 때

* `toggle` - boolean 값을 반전시킬 때

* `handle` - 이벤트를 처리할 때

* `update` - 기존 값을 수정할 때

* `create` - 새로운 것을 만들 때

* `delete` - 삭제할 때


---

## 5\. Boolean 타입 변수는 질문 형태로

### ❌ Before

```javascript
const open = true;
const visible = false;
```

### ✅ After

```javascript
const isOpen = true;
const isVisible = false;
```

### 핵심 원칙

boolean 변수는 `is`, `has`, `should` 등의 접두사를 붙여 예/아니오로 답할 수 있는 질문 형태로 만드세요.

**예시:**

* `isLoading` - 로딩 중인가?

* `hasError` - 에러가 있는가?

* `shouldUpdate` - 업데이트해야 하는가?

* `canSubmit` - 제출할 수 있는가?


---

## 6\. DOM 요소를 담는 변수 네이밍

### ✅ Good Practice

```javascript
const loginButton = document.querySelector('.login-button');
const userNameInput = document.querySelector('#user-name');
const modalElement = document.querySelector('.modal');
```

### 핵심 원칙

DOM 요소를 변수에 담을 때는 요소의 타입을 명확히 드러내세요. 이렇게 하면 해당 변수가 DOM 요소라는 것을 한눈에 알 수 있습니다.

---

## 7\. 파일 이름 작성하기

### ❌ Before

```typescript
Img_home_bottom.png
ic_facebook.png
dropdownMoIcon.svg
dropdownPcIcon.svg
```

### 문제점

* 대소문자가 섞여 있습니다

* 케이스가 통일되지 않았습니다 (snake\_case와 camelCase 혼재)

* `Mo`가 Mobile을 의미하는지 바로 알기 어렵습니다

* `Pc`보다는 `Desktop`이 Mobile과 더 자연스러운 쌍입니다


### ✅ After (Option 1: kebab-case)

```typescript
img-home-bottom.png
ic-facebook.png
dropdown-mobile-icon.svg
dropdown-desktop-icon.svg
```

### ✅ After (Option 2: snake\_case)

```typescript
img_home_bottom.png
ic_facebook.png
dropdown_mobile_icon.svg
dropdown_desktop_icon.svg
```

### 핵심 원칙

**1\. 소문자로 시작하기**

* 파일명은 소문자로 시작하는 것이 일반적입니다


**2\. 케이스 통일하기**

* kebab-case 또는 snake\_case 중 하나를 선택해 일관되게 사용하세요

* 프로젝트 전체에서 같은 규칙을 따르는 것이 중요합니다


**3\. 명확한 단어 사용**

* `Mo` → `mobile`

* `Pc` → `desktop`

* 짧게 쓰고 싶다면: `sm` (small), `md` (medium) 같은 사이즈 축을 사용할 수도 있습니다


---

## 8\. 함수 이름은 camelCase로

### ❌ Before

```javascript
function Load_Products() {
  // ...
}
```

### ✅ After

```javascript
function loadProducts() {
  // ...
}
```

### 핵심 원칙

JavaScript에서 함수와 변수는 camelCase를 사용하는 것이 일반적인 컨벤션입니다.

**네이밍 케이스 정리:**

* **camelCase**: 변수, 함수 → `userName`, `getUserData`

* **PascalCase**: 컴포넌트, 클래스 → `UserProfile`, `Button`

* **UPPER\_SNAKE\_CASE**: 상수 → `MAX_COUNT`, `API_URL`

* **kebab-case**: CSS 클래스, 파일명 → `user-profile`, `main-header`


---

## 9\. 오타 주의하기

### ❌ Before

```javascript
const loadProducs = async () => {
  // ...
}
```

### ✅ After

```javascript
const loadProducts = async () => {
  // ...
}
```

### 핵심 원칙

오타는 생각보다 자주 발생하고, 자동완성이나 디버깅을 어렵게 만듭니다. VSCode 같은 에디터의 자동 완성 기능을 적극 활용하세요.

---

## 마무리하며

좋은 네이밍은 하루아침에 만들어지지 않습니다. 하지만 다음의 체크리스트를 기억한다면 훨씬 나은 코드를 작성할 수 있어요:

### 네이밍 체크리스트 ✅

1. **단축어를 피했는가?** (`mb` → `mobile`)

2. **의미가 명확한가?** (`h_logo` → `header_logo`)

3. **본질적 특성을 나타내는가?** (`second` → `reverse`)

4. **함수는 동사로 시작하는가?** (`changeIsOpen` → `toggleDropdown`)

5. **Boolean은 질문 형태인가?** (`open` → `isOpen`)

6. **케이스가 통일되었는가?** (camelCase, kebab-case 등)

7. **오타가 없는가?** (`producs` → `products`)


기억하세요. 코드는 컴퓨터보다 사람을 위해 작성하는 것입니다. 이름을 잘 지으면 여러분의 코드를 읽는 모든 사람(미래의 자신 포함)의 에너지를 아낄 수 있어요.

---

## 참고 자료

* [MDN - Kebab case](https://developer.mozilla.org/ko/docs/Glossary/Kebab_case)

* [MDN - Snake case](https://developer.mozilla.org/ko/docs/Glossary/Snake_case)

* [Clean Code by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)


---

> 이 글은 실제 부트캠프 코드 리뷰 경험을 바탕으로 작성되었습니다. 🚀
