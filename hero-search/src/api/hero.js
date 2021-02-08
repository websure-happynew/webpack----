/**
 * 获取所有英雄
 */
export async function getHeros() {
  return await fetch("/web201605/js/herolist.json").then((r) => r.json());
}

export function getHeroTypes() {
  return [
    { id: 3, name: "坦克" },
    { id: 1, name: "战士" },
    { id: 4, name: "刺客" },
    { id: 2, name: "法师" },
    { id: 5, name: "射手" },
    { id: 6, name: "辅助" },
  ];
}
