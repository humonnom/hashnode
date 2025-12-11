'use client';

import { CodeReviewComparison } from '@/components/code-review-comparison';

const beforeCode = `function getUserData(userId) {
  const response = fetch('/api/users/' + userId);
  const data = response.json();
  return data;
}`;

const afterCode = `async function getUserData(userId: string): Promise<User> {
  const response = await fetch(\`/api/users/\${userId}\`);

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  const data: User = await response.json();
  return data;
}`;

export default function Page() {
	return (
		<div className="container mx-auto max-w-6xl space-y-12 px-4 py-12">
			<div className="space-y-4 text-center">
				<h1 className="text-balance text-4xl font-bold">코드 리뷰 예시</h1>
				<p className="text-muted-foreground text-pretty text-lg">
					Before/After 비교를 통해 코드 개선 사항을 확인하세요
				</p>
			</div>

			<CodeReviewComparison
				title="비동기 처리 개선"
				description="Promise를 제대로 처리하고 에러 핸들링을 추가했습니다."
				before={beforeCode}
				after={afterCode}
				language="typescript"
			/>

			<CodeReviewComparison
				title="컴포넌트 최적화"
				description="불필요한 리렌더링을 방지하기 위해 useMemo를 활용했습니다."
				before={`function ExpensiveComponent({ items, filter }) {
  const filteredItems = items.filter(item =>
    item.name.includes(filter)
  );

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
				after={`function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() =>
    items.filter(item => item.name.includes(filter)),
    [items, filter]
  );

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
				language="typescript"
			/>
		</div>
	);
}
