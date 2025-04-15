/**
 * 难度3-关卡50配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 50,
  name: '中级进阶-第50关',
  description: '挑战第50关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 39,
  maxSlots: 9,
  timeLimit: 111,
  maxLayers: 7,
  difficulty: 3
};
