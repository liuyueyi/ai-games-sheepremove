/**
 * 难度3-关卡51配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 51,
  name: '中级进阶-第51关',
  description: '挑战第51关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 42,
  maxSlots: 8,
  timeLimit: 110,
  maxLayers: 7,
  difficulty: 3
};
