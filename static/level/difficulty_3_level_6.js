/**
 * 难度3-关卡6配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 6,
  name: '中级进阶-第6关',
  description: '挑战第6关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 7,
  timeLimit: 155,
  maxLayers: 8,
  gridRows: 5,
  gridCols: 7,
  difficulty: 3
};
