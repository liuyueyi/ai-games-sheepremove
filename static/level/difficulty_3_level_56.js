/**
 * 难度3-关卡56配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 56,
  name: '中级进阶-第56关',
  description: '挑战第56关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 105,
  maxLayers: 7,
  difficulty: 3
};
