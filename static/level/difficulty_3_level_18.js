/**
 * 难度3-关卡18配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 18,
  name: '中级进阶-第18关',
  description: '挑战第18关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 21,
  maxSlots: 7,
  timeLimit: 143,
  maxLayers: 8,
  gridRows: 5,
  gridCols: 7,
  difficulty: 3
};
