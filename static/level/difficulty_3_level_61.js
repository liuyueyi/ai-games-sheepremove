/**
 * 难度3-关卡61配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 61,
  name: '中级进阶-第61关',
  description: '挑战第61关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 48,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 12,
  gridRows: 6,
  gridCols: 8,
  difficulty: 3
};
