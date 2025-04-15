/**
 * 难度3-关卡42配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 42,
  name: '中级进阶-第42关',
  description: '挑战第42关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 119,
  maxLayers: 7,
  difficulty: 3
};
