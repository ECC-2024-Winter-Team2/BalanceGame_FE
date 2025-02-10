export function Result() {
  // TODO: 데이터 연동 후 제거 필요
  const categories = [
    { categoryId: 1, name: "연애" },
    { categoryId: 2, name: "음식" },
    { categoryId: 3, name: "병맛" },
    { categoryId: 4, name: "인생" },
  ];

  return (
    <div>
      <div>결과</div>
      {/* TODO: 코드 이해하기 */}
      {categories.map((category) => (
        <div key={category.name}>{category.name}</div>
      ))}
    </div>
  );
}
