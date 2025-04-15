/**
 * 难度3-关卡60配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 60,
  name: '中级进阶-第60关',
  description: '挑战第60关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 101,
  maxLayers: 10,
  gridRows: 6,
  gridCols: 8,
  difficulty: 3
};
