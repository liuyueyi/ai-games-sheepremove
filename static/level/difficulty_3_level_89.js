/**
 * 难度3-关卡89配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 89,
  name: '中级进阶-第89关',
  description: '挑战第89关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 63,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 17,
  gridRows: 6,
  gridCols: 8,
  difficulty: 3
};
