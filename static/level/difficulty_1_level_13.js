/**
 * 难度1-关卡13配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 13,
  name: '新手入门-第13关',
  description: '挑战第13关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 9,
  maxSlots: 7,
  timeLimit: 168,
  maxLayers: 7,
  gridRows: 4,
  gridCols: 6,
  difficulty: 1
};
