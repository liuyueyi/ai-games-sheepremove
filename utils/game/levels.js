/**
 * 游戏关卡配置
 * 包含不同关卡的卡片类型、数量和布局信息
 */

import { CARD_TYPES } from './cards.js';

/**
 * 关卡配置数组
 * 每个关卡包含以下属性：
 * - id: 关卡ID
 * - name: 关卡名称
 * - description: 关卡描述
 * - cardTypes: 使用的卡片类型数组
 * - cardsPerType: 每种类型的卡片数量
 * - maxSlots: 最大槽位数量
 * - timeLimit: 时间限制（秒）
 * - maxLayers: 最大层数
 * - unlockScore: 解锁所需的分数
 * - difficulty: 难度系数（影响布局复杂度）
 */
export const LEVELS = [
  {
    id: 1,
    name: '新手入门',
    description: '简单的入门关卡，熟悉游戏规则',
    cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
    cardsPerType: 3,
    maxSlots: 7,
    timeLimit: 180,
    maxLayers: 3,
    unlockScore: 0, // 初始关卡，无需解锁
    difficulty: 1
  },
  {
    id: 2,
    name: '初级挑战',
    description: '增加一些难度，考验你的反应',
    cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
    cardsPerType: 3,
    maxSlots: 7,
    timeLimit: 160,
    maxLayers: 4,
    unlockScore: 100, // 需要在前一关获得100分才能解锁
    difficulty: 2
  },
  {
    id: 3,
    name: '中级挑战',
    description: '更多种类的卡片，更复杂的布局',
    cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
    cardsPerType: 3,
    maxSlots: 7,
    timeLimit: 150,
    maxLayers: 4,
    unlockScore: 200,
    difficulty: 3
  },
  {
    id: 4,
    name: '高级挑战',
    description: '高难度挑战，考验你的眼力和记忆力',
    cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
    cardsPerType: 3,
    maxSlots: 6, // 减少槽位，增加难度
    timeLimit: 140,
    maxLayers: 5,
    unlockScore: 300,
    difficulty: 4
  },
  {
    id: 5,
    name: '专家级',
    description: '最高难度，全部种类的卡片',
    cardTypes: CARD_TYPES, // 使用所有类型的卡片
    cardsPerType: 3,
    maxSlots: 5, // 进一步减少槽位
    timeLimit: 120,
    maxLayers: 5,
    unlockScore: 400,
    difficulty: 5
  }
];

/**
 * 获取关卡配置
 * @param {Number} levelId 关卡ID
 * @returns {Object} 关卡配置对象
 */
export function getLevelConfig(levelId) {
  return LEVELS.find(level => level.id === levelId) || LEVELS[0];
}

/**
 * 获取已解锁的关卡
 * @param {Number} score 当前总分数
 * @returns {Array} 已解锁的关卡数组
 */
export function getUnlockedLevels(score) {
  return LEVELS.filter(level => level.unlockScore <= score);
}

/**
 * 生成关卡卡片
 * @param {Object} level 关卡配置
 * @returns {Array} 卡片数据数组
 */
export function generateLevelCards(level) {
  const cards = [];
  let id = 1;
  
  level.cardTypes.forEach(type => {
    for (let i = 0; i < level.cardsPerType; i++) {
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