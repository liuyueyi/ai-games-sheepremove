/**
 * 难度3-关卡33配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 33,
  name: '中级进阶-第33关',
  description: '挑战第33关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 30,
  maxSlots: 8,
  timeLimit: 128,
  maxLayers: 6,
  difficulty: 3
};
