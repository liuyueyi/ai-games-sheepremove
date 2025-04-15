/**
 * 难度3-关卡41配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 41,
  name: '中级进阶-第41关',
  description: '挑战第41关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 3
};
