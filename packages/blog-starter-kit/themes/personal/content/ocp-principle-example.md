---
title: "컴포넌트 설계와 OCP 원칙"
date: "2025-12-11"
excerpt: "Open-Closed Principle을 적용하여 더 유연하고 확장 가능한 컴포넌트를 만드는 방법"
---

SOLID 원칙 중 하나인 **Open-Closed Principle (개방-폐쇄 원칙)** 은 소프트웨어 엔티티는 확장에는 열려있고 수정에는 닫혀있어야 한다는 원칙입니다.

## 문제 상황

다음과 같은 ProductCard 컴포넌트가 있다고 가정해봅시다:

```jsx
function ProductCard({ product, variant = "default" }) {
  return (
    <div className={`${styles.card} ${
      variant === "best" ? styles.bestCard : styles.allCard
    }`}>
      {/* 상품 내용 */}
    </div>
  );
}
```

이 설계의 문제점은 무엇일까요?

1. **새로운 variant 추가 시 컴포넌트 내부 수정 필요**: "special" variant가 필요하면 ProductCard 내부 코드를 수정해야 합니다.
2. **컴포넌트가 변경에 열려있음**: OCP 원칙 위반
3. **재사용성 저하**: 다양한 상황에서 활용하기 어려움

## 개선된 설계

스타일을 외부에서 주입받는 방식으로 변경합니다:

```jsx
function ProductCard({ product, wrapperStyle }) {
  return (
    <div className={`${styles.card} ${wrapperStyle}`}>
      {/* 상품 내용 */}
    </div>
  );
}

// 사용 예시
<ProductCard product={product} wrapperStyle={styles.bestCard} />
<ProductCard product={product} wrapperStyle={styles.allCard} />
<ProductCard product={product} wrapperStyle={styles.specialCard} />
```

## 장점

1. **확장성**: 새로운 스타일이 필요하면 외부에서 스타일만 전달
2. **수정 불필요**: ProductCard 컴포넌트는 수정 없이 재사용 가능
3. **OCP 준수**: 확장에는 열려있고 수정에는 닫혀있음

## 결론

컴포넌트 설계 시 OCP 원칙을 고려하면 더 유연하고 유지보수하기 쉬운 코드를 작성할 수 있습니다. 항상 "이 코드가 변경에 닫혀있는가?"를 자문하며 설계해보세요.
