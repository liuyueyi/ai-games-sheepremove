/**
 * 游戏卡片数据
 * 包含卡片类型及对应的图标
 */

export const CARD_TYPES = [
  { id: 1, name: '塑料瓶', icon: '🥤' },
  { id: 2, name: '纸箱', icon: '📦' },
  { id: 3, name: '电池', icon: '🔋' },
  { id: 4, name: '垃圾桶', icon: '🗑️' },
  { id: 5, name: '报纸', icon: '📰' },
  { id: 6, name: '购物袋', icon: '🛍️' },
  { id: 7, name: '罐头', icon: '🥫' },
  { id: 8, name: '药品', icon: '💊' },
  { id: 9, name: '玻璃瓶', icon: '🍾' },
  { id: 10, name: '食物残渣', icon: '🍖' },
  { id: 11, name: '旧衣物', icon: '👕' },
  { id: 12, name: '废纸', icon: '📄' },
];

/**
 * 获取随机卡片类型
 * @param {Number} count 需要获取的卡片类型数量
 * @returns {Array} 卡片类型数组
 */
export function getRandomCardTypes(count = 6) {
  const shuffled = [...CARD_TYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * 生成游戏卡片数据
 * @param {Number} typeCount 卡片类型数量
 * @param {Number} eachCount 每种类型的卡片数量
 * @returns {Array} 卡片数据数组
 */
export function generateCards(typeCount = 6, eachCount = 3) {
  const types = getRandomCardTypes(typeCount);
  let cards = [];
  let id = 1;
  
  types.forEach(type => {
    for (let i = 0; i < eachCount; i++) {
      cards.push({
        id: id++,
        typeId: type.id,
        icon: type.icon,
        name: type.name,
        isRemoved: false,
        zIndex: 0,
        position: { x: 0, y: 0 }
      });
    }
  });
  
  return cards;
}