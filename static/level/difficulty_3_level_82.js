/**
 * 难度3-关卡82配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 82,
  name: '中级进阶-第82关',
  description: '挑战第82关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 60,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 3
};
