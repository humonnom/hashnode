'use client';
import ArticleTitle from '@/components/article/title';
import { CodeReviewComparison } from '@/components/code-review-comparison';
import { ReactElement, ReactNode } from 'react';

const CodeChangesExplanation = ({ children }: { children: ReactNode }) => {
	return (
		<div className={'hashnode-content-style'}>
			<h3>핵심 원칙 </h3>
			{children}
			<hr />
		</div>
	);
};

const BulletList = ({
	children,
}: {
	children:
		| ReactElement<{ children: ReactNode }, 'p'>
		| ReactElement<{ children: ReactNode }, 'p'>[];
}) => {
	const isArray = Array.isArray(children);
	return (
		<ul className={'hashnode-content-style list-disc pl-5'}>
			{isArray ? children.map((child, index) => <li key={index}>{child}</li>) : <li>{children}</li>}
		</ul>
	);
};

export default function NamingConventionPage() {
	return (
		<div className="container mx-auto max-w-4xl space-y-12 px-4 py-12">
			<ArticleTitle title={'좋은 코드의 시작, 네이밍 컨벤션'} />
			<div className="hashnode-content-style">
				<h2>들어가며</h2>
				<p className="text-pretty text-md">
					&quot;좋은 코드는 읽기 쉬운 코드다&quot;라는 말을 들어보셨을 거예요. 그리고 그 읽기 쉬운
					코드의 가장 기본이 되는 것이 바로 네이밍(이름 짓기)입니다.
					<br />
					<br />
					부트캠프에서 프론트엔드 강사로 일하면서 학생들의 코드를 리뷰하는 일도 하고 있어요.
					그러면서 초보 개발자들이 가장 자주 실수하는 부분이 바로 &apos;이름 짓기&apos;라는 것을
					발견했습니다. 이 글에서는 실제 코드 리뷰 사례를 바탕으로, 실무에서 중요하게 다뤄지는
					네이밍 원칙들을 소개하려고 합니다.
				</p>
				<h2>왜 네이밍이 중요할까요?</h2>
				<p>코드는 작성하는 시간보다 읽는 시간이 훨씬 더 많습니다. 여러분이 작성한 코드는:</p>
				<ul>
					<li>팀원들이 읽고 이해해야 하고</li>
					<li>6개월 후 여러분 자신이 다시 봐야 하고</li>
					<li>새로운 팀원이 온보딩할 때 참고해야 합니다</li>
				</ul>
				<p>
					좋은 이름은 주석 없이도 코드의 의도를 명확하게 전달하고, 나쁜 이름은 코드를 읽는 사람을
					혼란스럽게 만들어요.
				</p>
				<hr />
			</div>
			<CodeReviewComparison
				title="단축어는 지양하세요"
				// descriptions={['mb_logo에서 mb가 mobile인지, main banner인지 바로 이해하기 어렵습니다.']}
				before={`<!-- HTML -->
<a href="/index.html" alt="로고" class="mb_logo"></a>`}
				after={`<!-- HTML -->
<a href="/index.html" alt="로고" class="mobile_logo"></a>`}
				language="html"
			/>
			<BulletList>
				<p>
					<code>mb_logo</code>에서 <code>mb</code>가 mobile인지, main banner인지 바로 이해하기
					어렵습니다.
				</p>
			</BulletList>
			<CodeReviewComparison
				title="단축어는 지양하세요2"
				// descriptions={['bn이 의미하는 바가 무엇인지 한눈에 알기 어렵습니다 (banner? button?)']}
				before={`/* CSS */
.bn {
  background-color: blue;
}`}
				after={`/* CSS */
.banner {
  background-color: blue;
}`}
				language="html"
			/>
			<BulletList>
				<p>
					<code>bn</code>이 의미하는 바가 무엇인지 한눈에 알기 어렵습니다 (banner? button?)
				</p>
			</BulletList>
			<CodeChangesExplanation>
				{/*<h3>핵심 원칙 </h3>*/}
				<blockquote>
					&quot;일반적으로 매우 긴 단어가 아니면 줄여쓰지 않는 게 더 이득입니다. 한눈에 알 수 있기
					때문이죠.&quot;
				</blockquote>
				<p>단어를 줄여서 얻는 타이핑 이득보다, 그 의미를 파악하는 데 드는 비용이 훨씬 큽니다.</p>
				<p>
					<strong>예외: </strong>그런데 업계에서 널리 사용되는 약어도 있죠. 이런 약어는 사용해도
					됩니다.
				</p>
				<BulletList>
					<p>
						<code>btn</code> (button)
					</p>
					<p>
						<code>img</code> (image)
					</p>
					<p>
						<code>nav</code> (navigation)
					</p>
				</BulletList>
				<p>
					명확하게 <code>button</code>, <code>image</code>로 쓸지 약어를 사용할지 정해진 팀의
					컨벤션이 있다면 따르면 됩니다.
				</p>
			</CodeChangesExplanation>
			<CodeReviewComparison
				title="의미를 알 수 있는 이름으로 짓기"
				descriptions={['혼란을 주는 키워드 사용', '단순 숫자 사용']}
				before={`<div class="login_v2_but">
  <p>간편 로그인하기</p>
</div>

<section class="section section_banner section_banner_02">`}
				after={`<div class="social_login_section">
  <p>간편 로그인하기</p>
</div>

<section class="section section_banner section_bottom">`}
				language="html"
			/>
			<BulletList>
				<p>
					<code>but</code>이 무슨 뜻인지 알 수 없습니다
				</p>
				<p>
					<code>v2</code>는 보통 버전을 의미하는데, v1이 없는 상황에서 사용되어 혼란스럽습니다
				</p>
				<p>
					<code>section_banner_02</code>에 단순히 숫자로 표현되어 있어 어떤 스타일을 담고 있는지
					유추가 되지 않습니다
				</p>
			</BulletList>
			<CodeChangesExplanation>
				클래스 이름만 보고도 그것이 무엇을 나타내는지 명확히 알 수 있어야 합니다.
				<br />
				<br />
				만약 여러분이 작성한 이름에 대해 &quot;이 변수 이름 어떤 의미인가요?&quot;라고 자주 질문을
				받는다면, 내가 식별자 이름을 잘 짓고 있는지 점검해볼 필요가 있습니다.
			</CodeChangesExplanation>
			<CodeReviewComparison
				title="3. 가변적 특성이 아니라 핵심특성을 드러내기"
				descriptions={['화면에 보이는 순서로 이름 짓기']}
				before={`.second {
  text-align: right;
}`}
				after={`.reverse {
  text-align: right;
}`}
				language="css"
			/>
			<BulletList>
				<p>
					<code>second</code>는 단순히 두 번째라는 순서를 나타낼 뿐입니다. 만약 나중에 순서가
					바뀌거나, 세 번째 요소가 같은 스타일을 필요로 한다면 이름이 무의미해집니다.
				</p>
				<p>
					해당 스타일은, 섹션들 중에 두번째 섹션만 디자인이 반대로 되어있어 필요한 스타일입니다.
					그러므로 의미적으로 좌우가 반대라는 것을 알 수 있도록 클래스 이름을 지어줍니다.
				</p>
			</BulletList>
			<CodeChangesExplanation>
				<BulletList>
					<p>순서보다는 역할을 나타내세요</p>
					<p>위치보다는 목적을 나타내세요</p>
					<p>변하지 않는 본질적인 특성을 이름에 담으세요</p>
				</BulletList>
			</CodeChangesExplanation>
			{/* 4. 함수 이름은 동사로 짓기 */}
			<CodeReviewComparison
				title="4. 함수 이름은 동사로 짓기"
				descriptions={[
					`❌ 문제점: changeIsOpen은 isOpen을 어떻게 바꿀 것인지 불명확합니다. true로? false로? 반전시킬 건가요?`,
					`✅ 개선: 함수는 동작을 수행하므로 동사로 시작해야 합니다. toggle은 boolean 값을 반전시킨다는 명확한 의미를 전달합니다. 자주 사용하는 동사들: get, set, fetch, load, toggle, handle, update, create, delete`,
				]}
				before={`const changeIsOpen = () => {
  setIsOpen(!isOpen);
}`}
				after={`const toggleDropdown = () => {
  setIsOpen(!isOpen);
}`}
				language="javascript"
			/>
			{/* 5. Boolean 타입 변수는 질문 형태로 */}
			<CodeReviewComparison
				title="5. Boolean 타입 변수는 질문 형태로"
				descriptions={[
					`❌ 문제점: open과 visible만으로는 boolean 타입임을 명확히 알기 어렵고, 의미가 모호할 수 있습니다.`,
					`✅ 개선: boolean 변수는 is, has, should 등의 접두사를 붙여 예/아니오로 답할 수 있는 질문 형태로 만드세요. 예시: isLoading, hasError, shouldUpdate, canSubmit`,
				]}
				before={`const open = true;
const visible = false;`}
				after={`const isOpen = true;
const isVisible = false;`}
				language="javascript"
			/>
			{/* 6. DOM 요소를 담는 변수 네이밍 */}
			<CodeReviewComparison
				title="6. DOM 요소를 담는 변수 네이밍"
				descriptions={[
					`❌ 문제점: 변수명만으로는 이것이 DOM 요소인지, 일반 데이터인지 구분하기 어렵습니다.`,
					`✅ 개선: DOM 요소를 변수에 담을 때는 요소의 타입을 명확히 드러내세요. 이렇게 하면 해당 변수가 DOM 요소라는 것을 한눈에 알 수 있습니다.`,
				]}
				before={`const login = document.querySelector('.login-button');
const userName = document.querySelector('#user-name');
const modal = document.querySelector('.modal');`}
				after={`const loginButton = document.querySelector('.login-button');
const userNameInput = document.querySelector('#user-name');
const modalElement = document.querySelector('.modal');`}
				language="javascript"
			/>
			{/* 7. 파일 이름 작성하기 */}
			<CodeReviewComparison
				title="7. 파일 이름 작성하기"
				descriptions={[
					`❌ 문제점: 대소문자가 섞여 있습니다. 케이스가 통일되지 않았습니다 (snake_case와 camelCase 혼재). Mo가 Mobile을 의미하는지 바로 알기 어렵습니다. Pc보다는 Desktop이 Mobile과 더 자연스러운 쌍입니다.`,
					`✅ 개선: 파일명은 소문자로 시작하는 것이 일반적입니다. kebab-case 또는 snake_case 중 하나를 선택해 일관되게 사용하세요. 프로젝트 전체에서 같은 규칙을 따르는 것이 중요합니다.`,
				]}
				before={`Img_home_bottom.png
ic_facebook.png
dropdownMoIcon.svg
dropdownPcIcon.svg`}
				after={`img-home-bottom.png
ic-facebook.png
dropdown-mobile-icon.svg
dropdown-desktop-icon.svg

// 또는 snake_case 사용
img_home_bottom.png
ic_facebook.png
dropdown_mobile_icon.svg
dropdown_desktop_icon.svg`}
				language="typescript"
			/>
			{/* 8. 함수 이름은 camelCase로 */}
			<CodeReviewComparison
				title="8. 함수 이름은 camelCase로"
				descriptions={[
					`❌ 문제점: Load_Products는 PascalCase와 snake_case가 혼합된 형태로, JavaScript 네이밍 컨벤션을 따르지 않습니다.`,
					`✅ 개선: JavaScript에서 함수와 변수는 camelCase를 사용하는 것이 일반적인 컨벤션입니다. camelCase: 변수, 함수 / PascalCase: 컴포넌트, 클래스 / UPPER_SNAKE_CASE: 상수 / kebab-case: CSS 클래스, 파일명`,
				]}
				before={`function Load_Products() {
  // ...
}`}
				after={`function loadProducts() {
  // ...
}`}
				language="javascript"
			/>
			{/* 9. 오타 주의하기 */}
			<CodeReviewComparison
				title="9. 오타 주의하기"
				descriptions={[
					`❌ 문제점: loadProducs는 Products의 오타입니다. 오타는 자동완성이나 디버깅을 어렵게 만듭니다.`,
					`✅ 개선: VSCode 같은 에디터의 자동 완성 기능을 적극 활용하세요. 오타는 생각보다 자주 발생하고, 찾기 어려운 버그의 원인이 될 수 있습니다.`,
				]}
				before={`const loadProducs = async () => {
  // ...
}`}
				after={`const loadProducts = async () => {
  // ...
}`}
				language="javascript"
			/>
			{/* 마무리 섹션 */}
			<div className="space-y-6 rounded-lg border p-8">
				<h2 className="text-2xl font-bold">네이밍 체크리스트 ✅</h2>
				<ul className="space-y-3 text-lg">
					<li>
						1. <strong>단축어를 피했는가?</strong> (mb → mobile)
					</li>
					<li>
						2. <strong>의미가 명확한가?</strong> (h_logo → header_logo)
					</li>
					<li>
						3. <strong>본질적 특성을 나타내는가?</strong> (second → reverse)
					</li>
					<li>
						4. <strong>함수는 동사로 시작하는가?</strong> (changeIsOpen → toggleDropdown)
					</li>
					<li>
						5. <strong>Boolean은 질문 형태인가?</strong> (open → isOpen)
					</li>
					<li>
						6. <strong>케이스가 통일되었는가?</strong> (camelCase, kebab-case 등)
					</li>
					<li>
						7. <strong>오타가 없는가?</strong> (producs → products)
					</li>
				</ul>
				<p className="text-muted-foreground text-lg">
					기억하세요. 코드는 컴퓨터보다 사람을 위해 작성하는 것입니다. <br />
					이름을 잘 지으면 여러분의 코드를 읽는 모든 사람(미래의 자신 포함)의 에너지를 아낄 수
					있어요.
				</p>
			</div>
			{/* 참고 자료 */}
			<div className="space-y-4 rounded-lg border p-8">
				<h2 className="text-2xl font-bold">참고 자료</h2>
				<ul className="text-muted-foreground space-y-2">
					<li>
						•{' '}
						<a
							href="https://developer.mozilla.org/ko/docs/Glossary/Kebab_case"
							className="hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							MDN - Kebab case
						</a>
					</li>
					<li>
						•{' '}
						<a
							href="https://developer.mozilla.org/ko/docs/Glossary/Snake_case"
							className="hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							MDN - Snake case
						</a>
					</li>
					<li>
						•{' '}
						<a
							href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
							className="hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Clean Code by Robert C. Martin
						</a>
					</li>
				</ul>
				<p className="text-muted-foreground mt-4 italic">
					이 글은 실제 부트캠프 코드 리뷰 경험을 바탕으로 작성되었습니다. 🚀
				</p>
			</div>
		</div>
	);
}
