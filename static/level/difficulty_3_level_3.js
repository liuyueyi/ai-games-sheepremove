/**
 * 难度3-关卡3配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 3,
  name: '中级进阶-第3关',
  description: '挑战第3关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 7,
  timeLimit: 158,
  maxLayers: 4,
  difficulty: 3
};
