/**
 * 难度3-关卡68配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 68,
  name: '中级进阶-第68关',
  description: '挑战第68关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 51,
  maxSlots: 9,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 3
};
