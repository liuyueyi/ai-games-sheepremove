/**
 * 难度3-关卡5配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 5,
  name: '中级进阶-第5关',
  description: '挑战第5关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 6,
  timeLimit: 156,
  maxLayers: 4,
  difficulty: 3
};
