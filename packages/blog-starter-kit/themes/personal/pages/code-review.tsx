'use client';

import { CodeReviewComparison } from '@/components/code-review-comparison';

export default function Page() {
	return (
		<div className="container mx-auto max-w-6xl space-y-12 px-4 py-12">
			<div className="space-y-4 text-center">
				<h1 className="text-balance text-4xl font-bold">좋은 코드를 만드는 코드 리뷰</h1>
				<p className="text-muted-foreground text-pretty text-lg">
					가독성과 유지보수성을 높이는 실전 피드백 모음입니다.
					<br />
					코드잇 프론트엔드 부트캠프 21기에서 진행한 리뷰를 정리했습니다.
				</p>
			</div>
			<CodeReviewComparison
				title="컴포넌트 설계 개선 - OCP 원칙 적용"
				descriptions={[
					`❌ 문제점: variant === 'best' 방식은 새로운 타입(예: special)이 필요할 때마다 ProductCard 내부 코드를 수정해야 합니다. 이는 Open-Closed Principle을 위반하며, 컴포넌트가 변경에 열려있게 됩니다.`,
					`✅ 개선: style을 외부에서 주입받는 방식으로 변경하면, ProductCard는 수정 없이 다양한 상황에서 재사용 가능합니다. 새로운 스타일이 필요하면 사용하는 쪽에서 새로운 style만 전달하면 됩니다.`,
				]}
				before={`function ProductCard({ product, variant = "default" }) {
  return (
    <div
      className={\`\${styles.card} \${
        variant === "best" ? styles.bestCard : styles.allCard
      }\`}
    >
      {/* 상품 내용 */}
    </div>
  );
}

// 사용 예시
<ProductCard product={product} variant="best" />
<ProductCard product={product} variant="all" />

// 새로운 타입이 필요하면? → ProductCard 내부를 수정해야 함!
// variant === "special" ? styles.specialCard : ...`}
				after={`function ProductCard({ product, wrapperStyle }) {
  return (
    <div className={\`\${styles.card} \${wrapperStyle}\`}>
      {/* 상품 내용 */}
    </div>
  );
}

// 사용 예시 - 외부에서 스타일 주입
<ProductCard product={product} wrapperStyle={styles.bestCard} />
<ProductCard product={product} wrapperStyle={styles.allCard} />

// 새로운 타입이 필요하면? → 새 스타일만 전달! (컴포넌트 수정 불필요)
<ProductCard product={product} wrapperStyle={styles.specialCard} />`}
				language="javascript"
			/>
		</div>
	);
}
