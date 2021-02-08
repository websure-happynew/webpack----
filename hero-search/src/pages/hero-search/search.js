/**
 * 搜索英雄数据
 *
 * @export
 * @param {*} allHeros 所有英雄
 * @param {*} type 英雄类型
 * @param {*} key 搜索关键字
 */
export default function (allHeros, type, key) {
  if (key) {
    // 有关键字
    return allHeros.filter((h) => h.cname.includes(key));
  }
  if (type === "all") {
    return allHeros;
  }
  if (type === "free") {
    return allHeros.filter((h) => h.pay_type === 10);
  }
  if (type === "new") {
    return allHeros.filter((h) => h.pay_type === 11);
  }
  return allHeros.filter((h) => h.hero_type === +type);
}
