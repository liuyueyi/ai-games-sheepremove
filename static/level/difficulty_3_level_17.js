/**
 * 难度3-关卡17配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 17,
  name: '中级进阶-第17关',
  description: '挑战第17关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 21,
  maxSlots: 7,
  timeLimit: 144,
  maxLayers: 5,
  difficulty: 3
};
