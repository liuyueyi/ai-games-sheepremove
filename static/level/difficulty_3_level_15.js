/**
 * 难度3-关卡15配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 15,
  name: '中级进阶-第15关',
  description: '挑战第15关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 18,
  maxSlots: 6,
  timeLimit: 146,
  maxLayers: 5,
  difficulty: 3
};
