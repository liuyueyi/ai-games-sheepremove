/**
 * 难度3-关卡59配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 59,
  name: '中级进阶-第59关',
  description: '挑战第59关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 8,
  timeLimit: 102,
  maxLayers: 7,
  difficulty: 3
};
